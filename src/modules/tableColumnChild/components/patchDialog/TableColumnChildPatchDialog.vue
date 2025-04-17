<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">{{title}}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="tableColumnChild.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="tableColumnChild.key"
              label="Ключ"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.key ? 'mdi-pencil' : ''"
              @input="onFieldChange('key')"
          />
          <v-text-field
              v-model.number="tableColumnChild.widthPercent"
              label="Ширина в процентах"
              :rules="[requiredRule]"
              type="number"
              clearable
              :append-icon="changedFields.widthPercent ? 'mdi-pencil' : ''"
              @input="onFieldChange('widthPercent')"
          />
          <v-textarea
              v-model="tableColumnChild.tooltipInfo"
              label="Всплывающая подсказка"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.tooltipInfo ? 'mdi-pencil' : ''"
              @input="onFieldChange('tooltipInfo')"
              rows="1"
              autogrow
          />
          <v-checkbox
              label="В корзине"
              v-model="tableColumnChild.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTableColumnChild">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as tableColumnChildApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'TableColumnChildPatchDialog',
  props: ['tableColumnChildId', 'isOpen'],
  emits: ['closeDialog', 'tableColumnChildPatched'],
  data: () => ({
    title: 'Редактировать вложенную колонку',
    valid: false,
    tableColumnChild: {
      name: null,
      tooltipInfo: null,
      widthPercent: null,
      key: null,
      isTrash: false,
    },
    originalTableColumnChild: {},
    changedFields: {},
  }),
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async tableColumnChildId (value) {
      if (value) {
        await this.getTableColumnChild()
      }
    }
  },
  methods: {
    requiredRule,
    async getTableColumnChild () {
      if (this.tableColumnChildId) {
        const data = await tableColumnChildApi.getTableColumnChildById({ id: this.tableColumnChildId })
        this.tableColumnChild = { ...data }
        this.originalTableColumnChild = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.tableColumnChild[field] !== this.originalTableColumnChild[field]
    },
    resetChanges () {
      this.tableColumnChild = { ...this.originalTableColumnChild }
      this.changedFields = {}
    },
    async patchTableColumnChild () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTableColumnChild = await tableColumnChildApi.patchTableColumnChildById({
        id: this.tableColumnChildId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.tableColumnChild[key]
          return acc
        }, {})
      })
      if (patchedTableColumnChild.id) {
        this.$emit('tableColumnChildPatched', patchedTableColumnChild)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

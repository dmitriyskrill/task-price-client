<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">{{title}}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="tableColumnGroup.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-checkbox
              label="В корзине"
              v-model="tableColumnGroup.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTableColumnGroup">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as tableColumnGroupApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'TableColumnGroupPatchDialog',
  props: ['tableColumnGroupId', 'isOpen'],
  emits: ['closeDialog', 'tableColumnGroupPatched'],
  data: () => ({
    title: 'Редактировать группу колонок',
    valid: false,
    tableColumnGroup: {
      name: '',
      isTrash: false
    },
    originalTableColumnGroup: {},
    changedFields: {},
  }),
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async tableColumnGroupId (value) {
      if (value) {
        await this.getTableColumnGroup()
      }
    }
  },
  methods: {
    requiredRule,
    async getTableColumnGroup () {
      if (this.tableColumnGroupId) {
        const data = await tableColumnGroupApi.getTableColumnGroupById({ id: this.tableColumnGroupId })
        this.tableColumnGroup = { ...data }
        this.originalTableColumnGroup = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.tableColumnGroup[field] !== this.originalTableColumnGroup[field]
    },
    resetChanges () {
      this.tableColumnGroup = { ...this.originalTableColumnGroup }
      this.changedFields = {}
    },
    async patchTableColumnGroup () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTableColumnGroup = await tableColumnGroupApi.patchTableColumnGroupById({
        id: this.tableColumnGroupId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.tableColumnGroup[key]
          return acc
        }, {})
      })
      if (patchedTableColumnGroup.id) {
        this.$emit('tableColumnGroupPatched', patchedTableColumnGroup)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

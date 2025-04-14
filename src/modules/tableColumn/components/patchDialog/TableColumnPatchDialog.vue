<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">{{title}}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="tableColumn.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="tableColumn.key"
              label="Ключ"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.key ? 'mdi-pencil' : ''"
              @input="onFieldChange('key')"
          />
          <v-text-field
              v-model.number="tableColumn.width"
              label="Ширина"
              :rules="[requiredRule]"
              type="number"
              clearable
              :append-icon="changedFields.width ? 'mdi-pencil' : ''"
              @input="onFieldChange('width')"
          />
          <v-text-field
              v-model="tableColumn.cellType"
              label="Тип ячейки"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.cellType ? 'mdi-pencil' : ''"
              @input="onFieldChange('cellType')"
          />
          <v-checkbox
              label="Показать"
              v-model="tableColumn.isShow"
              :append-icon="changedFields.isShow ? 'mdi-pencil' : ''"
              @input="onFieldChange('isShow')"
          />
          <v-checkbox
              label="Зафиксировать"
              v-model="tableColumn.isFixed"
              :append-icon="changedFields.isFixed ? 'mdi-pencil' : ''"
              @input="onFieldChange('isFixed')"
          />
          <v-checkbox
              label="Доступна для редактирования"
              v-model="tableColumn.isEditable"
              :append-icon="changedFields.isEditable ? 'mdi-pencil' : ''"
              @input="onFieldChange('isEditable')"
          />
          <v-checkbox
              label="В корзине"
              v-model="tableColumn.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTableColumn">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as tableColumnApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'TableColumnPatchDialog',
  props: ['tableColumnId', 'isOpen'],
  emits: ['closeDialog', 'tableColumnPatched'],
  data: () => ({
    title: 'Редактировать колонку',
    valid: false,
    tableColumn: {
      surname: '',
      name: '',
      patronymic: '',
      email: '',
    },
    originalTableColumn: {},
    changedFields: {},
  }),
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async tableColumnId (value) {
      if (value) {
        await this.getTableColumn()
      }
    }
  },
  methods: {
    requiredRule,
    async getTableColumn () {
      if (this.tableColumnId) {
        const data = await tableColumnApi.getTableColumnById({ id: this.tableColumnId })
        this.tableColumn = { ...data }
        this.originalTableColumn = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.tableColumn[field] !== this.originalTableColumn[field]
    },
    resetChanges () {
      this.tableColumn = { ...this.originalTableColumn }
      this.changedFields = {}
    },
    async patchTableColumn () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTableColumn = await tableColumnApi.patchTableColumnById({
        id: this.tableColumnId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.tableColumn[key]
          return acc
        }, {})
      })
      if (patchedTableColumn.id) {
        this.$emit('tableColumnPatched', patchedTableColumn)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

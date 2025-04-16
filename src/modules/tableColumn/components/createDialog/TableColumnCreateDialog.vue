<template>
  <v-dialog v-model="dialog" persistent max-width="500px" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          v-tooltip:bottom="tooltipText"
          v-bind="{ ...activatorProps }"
          variant="text"
          icon
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="tableColumn.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model="tableColumn.key"
              label="Ключ"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model.number="tableColumn.width"
              label="Ширина"
              :rules="[requiredRule]"
              type="number"
              clearable
          />
          <v-text-field
              v-model="tableColumn.cellType"
              label="Тип ячейки"
              :rules="[requiredRule]"
              clearable
          />
          <v-checkbox
              label="Показать"
              v-model="tableColumn.isShow"
          />
          <v-checkbox
              label="Зафиксировать"
              v-model="tableColumn.isFixed"
          />
          <v-checkbox
              label="Доступна для редактирования"
              v-model="tableColumn.isEditable"
          />
          <v-checkbox
              label="В корзине"
              v-model="tableColumn.isTrash"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTableColumn">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as tableColumnApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'TableColumnCreateDialog',
  props: [],
  emits: ['tableColumnCreated'],
  data: () => ({
    tooltipText: 'Создать колонку',
    title: 'Создать колонку',
    dialog: false,
    valid: false,
    tableColumn: {
      name: null,
      key: null,
      width: null,
      isShow: false,
      isFixed: false,
      cellType: null,
      isEditable: false,
      isTrash: false,
    },
  }),
  methods: {
    requiredRule,
    async createTableColumn () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const createdTableColumn = await tableColumnApi.postTableColumn(this.tableColumn)
      if (createdTableColumn.id) {
        this.$emit('tableColumnCreated', createdTableColumn)
        this.closeDialog()
      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

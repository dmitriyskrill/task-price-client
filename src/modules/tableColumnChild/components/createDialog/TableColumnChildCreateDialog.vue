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
              v-model="tableColumnChild.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model="tableColumnChild.key"
              label="Ключ"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model.number="tableColumnChild.widthPercent"
              label="Ширина в процентах"
              :rules="[requiredRule]"
              type="number"
              clearable
          />
          <v-textarea
              v-model.number="tableColumnChild.tooltipInfo"
              label="Всплывающая подсказка"
              :rules="[requiredRule]"
              rows="1"
              auto-grow
              clearable
          />
          <v-checkbox
              label="В корзине"
              v-model="tableColumnChild.isTrash"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTableColumnChild">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as tableColumnChildApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'TableColumnChildCreateDialog',
  props: [],
  emits: ['tableColumnChildCreated'],
  data: () => ({
    tooltipText: 'Создать вложенную колонку',
    title: 'Создать вложенную колонку',
    dialog: false,
    valid: false,
    tableColumnChild: {
      name: null,
      tooltipInfo: null,
      widthPercent: null,
      key: null,
      isTrash: false,
    },
  }),
  methods: {
    requiredRule,
    async createTableColumnChild () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const createdTableColumnChild = await tableColumnChildApi.postTableColumnChild(this.tableColumnChild)
      if (createdTableColumnChild.id) {
        this.$emit('tableColumnChildCreated', createdTableColumnChild)
        this.closeDialog()
      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

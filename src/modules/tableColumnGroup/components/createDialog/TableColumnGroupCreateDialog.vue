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
              v-model="tableColumnGroup.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
          />
          <v-checkbox
              label="В корзине"
              v-model="tableColumnGroup.isTrash"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTableColumnGroup">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as tableColumnGroupApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'TableColumnGroupCreateDialog',
  props: [],
  emits: ['tableColumnGroupCreated'],
  data: () => ({
    tooltipText: 'Создать группу колонок',
    title: 'Создать группу колонок',
    dialog: false,
    valid: false,
    tableColumnGroup: {
      name: null,
      isTrash: false,
    },
  }),
  methods: {
    requiredRule,
    async createTableColumnGroup () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const createdTableColumnGroup = await tableColumnGroupApi.postTableColumnGroup(this.tableColumnGroup)
      if (createdTableColumnGroup.id) {
        this.$emit('tableColumnGroupCreated', createdTableColumnGroup)
        this.closeDialog()
      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

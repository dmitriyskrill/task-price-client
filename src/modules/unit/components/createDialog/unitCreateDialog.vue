<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="500px"
      scrollable
  >
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
              v-model="unit.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model="unit.shortName"
              label="shortName"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model.number="unit.fullName"
              label="fullName"
              :rules="[requiredRule]"
              clearable
          />
          <v-text-field
              v-model="unit.codeId"
              label="codeId"
              :rules="[requiredRule]"
              clearable
          />
          <v-checkbox
              label="isHourUnit"
              v-model="unit.isHourUnit"
          />
          <v-checkbox
              label="В корзине"
              v-model="unit.isTrash"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createUnit">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as unitApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

const defaultUnit = {
  name: null,
  shortName: null,
  fullName: null,
  codeId: null,
  isHourUnit: false,
  isTrash: false,
}

export default {
  name: 'unitCreateDialog',
  props: [],
  emits: ['unitCreated'],
  data: () => ({
    tooltipText: 'Добавить ед. измерения',
    title: 'Новая ед. измерения',
    dialog: false,
    valid: false,
    unit: { ...defaultUnit },
  }),
  methods: {
    requiredRule,
    async createUnit () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const createdUnit = await unitApi.postUnit(this.unit)
      if (createdUnit.id) {
        this.$emit('unitCreated', createdUnit)
        this.closeDialog()
      }
    },
    closeDialog () {
      this.dialog = false
      this.unit = { ...defaultUnit }
    }
  }
}
</script>

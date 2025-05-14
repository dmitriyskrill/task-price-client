<template>
  <v-dialog
      :model-value="isOpen"
      persistent
      max-width="500px"
      scrollable
  >
    <v-card>
      <v-card-title class="text-h6">{{title}}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="unit.name"
              label="Наименование"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="unit.shortName"
              label="shortName"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.shortName ? 'mdi-pencil' : ''"
              @input="onFieldChange('shortName')"
          />
          <v-text-field
              v-model="unit.fullName"
              label="fullName"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.fullName ? 'mdi-pencil' : ''"
              @input="onFieldChange('fullName')"
          />
          <v-text-field
              v-model="unit.codeId"
              label="codeId"
              :rules="[requiredRule]"
              clearable
              :append-icon="changedFields.codeId ? 'mdi-pencil' : ''"
              @input="onFieldChange('codeId')"
          />


          <v-checkbox
              label="isHourUnit"
              v-model="unit.isHourUnit"
              :append-icon="changedFields.isHourUnit ? 'mdi-pencil' : ''"
              @input="onFieldChange('isHourUnit')"
          />
          <v-checkbox
              label="В корзине"
              v-model="unit.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchUnit">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as unitApi from '../../api'
import { requiredRule } from '@/shared/utils/formRules.js'

export default {
  name: 'UnitPatchDialog',
  props: ['unitId', 'isOpen'],
  emits: ['closeDialog', 'unitPatched'],
  data: () => ({
    title: 'Редактировать колонку',
    valid: false,
    unit: {
      name: '',
      shortName: '',
      fullName: '',
      isHourUnit: '',
      isTrash: '',
    },
    originalUnit: {},
    changedFields: {},
  }),
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async unitId (value) {
      if (value) {
        await this.getUnit()
      }
    }
  },
  methods: {
    requiredRule,
    async getUnit () {
      if (this.unitId) {
        const data = await unitApi.getUnitById({ id: this.unitId })
        this.unit = { ...data }
        this.originalUnit = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.unit[field] !== this.originalUnit[field]
    },
    resetChanges () {
      this.unit = { ...this.originalUnit }
      this.changedFields = {}
    },
    async patchUnit () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedUnit = await unitApi.patchUnitById({
        id: this.unitId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.unit[key]
          return acc
        }, {})
      })
      if (patchedUnit.id) {
        this.$emit('unitPatched', patchedUnit)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

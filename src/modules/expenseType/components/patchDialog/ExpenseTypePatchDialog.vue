<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать пользователя</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="expenseType[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-checkbox
              v-for="checkbox in checkboxes"
              :key="checkbox.key"
              :label="checkbox.text"
              v-model="expenseType[checkbox.key]"
              :append-icon="changedFields[checkbox.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(checkbox.key)"
              :rules="[]"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchExpenseType">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseTypeApi from '../../api'

export default {
  name: 'ExpenseTypePatchDialog',
  props: ['expenseTypeId', 'isOpen'],
  emits: ['closeDialog', 'expenseTypePatched'],
  data: () => ({
    textFields: [
      { key: 'name', text: 'Наименование' },
      { key: 'shortName', text: 'Краткое наименование' }
    ],
    checkboxes: [
      {
        text: 'В корзине',
        key: 'isTrash'
      },
    ],
    valid: false,
    expenseType: {
      shortName: '',
      name: '',
    },
    originalExpenseType: {},
    changedFields: {},
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async expenseTypeId (value) {
      if (value) {
        await this.getExpenseType()
      }
    }
  },
  methods: {
    async getExpenseType () {
      if (this.expenseTypeId) {
        const data = await expenseTypeApi.getExpenseTypeById({ id: this.expenseTypeId })
        this.expenseType = { ...data }
        this.originalExpenseType = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.expenseType[field] !== this.originalExpenseType[field]
    },
    resetChanges () {
      this.expenseType = { ...this.originalExpenseType }
      this.changedFields = {}
    },
    async patchExpenseType () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedExpenseType = await expenseTypeApi.patchExpenseTypeById({
        id: this.expenseTypeId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.expenseType[key]
          return acc
        }, {})
      })
      if (patchedExpenseType.id) {
        this.$emit('expenseTypePatched', patchedExpenseType)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

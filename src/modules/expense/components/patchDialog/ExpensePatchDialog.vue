<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать затрату</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="expense[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-textarea
              v-for="textareaField in textareaFields"
              :key="textareaField.key"
              v-model="expense[textareaField.key]"
              :label="textareaField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textareaField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textareaField.key)"
          />
          <v-text-field
              v-for="numberField in numberFields"
              :key="numberField.key"
              v-model.number="expense[numberField.key]"
              type="number"
              :label="numberField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[numberField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(numberField.key)"
          />
          <v-text-field
              v-for="dateField in dateFields"
              :key="dateField.key"
              v-model="expense[dateField.key]"
              type="date"
              :label="dateField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[dateField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(dateField.key)"
          />
          <v-checkbox
              v-for="checkbox in checkboxes"
              :key="checkbox.key"
              :label="checkbox.text"
              v-model="expense[checkbox.key]"
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
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchExpense">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseApi from '../../api'

export default {
  name: 'ExpensePatchDialog',
  props: ['expenseId', 'isOpen'],
  emits: ['closeDialog', 'expensePatched'],
  data: () => ({
    valid: false,
    expense: {},
    numberFields: [
      {
        key: 'amount',
        text: 'Сумма'
      }
    ],
    textFields: [
      { key: 'name', text: 'Наименование' },
      { key: 'type', text: 'Тип' }
    ],
    textareaFields: [
      { key: 'description', text: 'Описание' }
    ],
    dateFields: [
      { key: 'date', text: 'Дата' }
    ],
    checkboxes: [
      {
        text: 'В корзине',
        key: 'isTrash'
      }
    ],
    originalExpense: {},
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
    async expenseId (value) {
      if (value) {
        await this.getExpense()
      }
    }
  },
  methods: {
    async getExpense () {
      if (this.expenseId) {
        const data = await expenseApi.getExpenseById({ id: this.expenseId })
        this.expense = { ...data }
        this.originalExpense = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.expense[field] !== this.originalExpense[field]
    },
    resetChanges () {
      this.expense = { ...this.originalExpense }
      this.changedFields = {}
    },
    async patchExpense () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedExpense = await expenseApi.patchExpenseById({
        id: this.expenseId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.expense[key]
          return acc
        }, {})
      })
      if (patchedExpense.id) {
        this.$emit('expensePatched', patchedExpense)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script> 
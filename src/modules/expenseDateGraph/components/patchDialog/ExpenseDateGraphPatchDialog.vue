<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="expenseDateGraph[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-text-field
              v-for="numberField in numberFields"
              :key="numberField.key"
              v-model.number="expenseDateGraph[numberField.key]"
              type="number"
              :label="numberField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[numberField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(numberField.key)"
          />
          <v-checkbox
              v-for="checkbox in checkboxes"
              :key="checkbox.key"
              :label="checkbox.text"
              v-model="expenseDateGraph[checkbox.key]"
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
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchExpenseDateGraph">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseDateGraphApi from '../../api'

export default {
  name: 'ExpenseDateGraphPatchDialog',
  props: ['expenseDateGraphId', 'isOpen'],
  emits: ['closeDialog', 'expenseDateGraphPatched'],
  data: () => ({
    title: 'Редактировать запись даты из графика расхода',
    valid: false,
    expenseDateGraph: {},
    numberFields: [
      {
        key: 'amount',
        text: 'Кол-во'
      },
    ],
    textFields: [
      {
        key: 'date',
        text: 'Дата'
      },
    ],
    checkboxes: [
      {
        text: 'Факт',
        key: 'isFact'
      },
      {
        text: 'В корзине',
        key: 'isTrash'
      },
    ],
    originalExpenseDateGraph: {},
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
    async expenseDateGraphId (value) {
      if (value) {
        await this.getExpenseDateGraph()
      }
    }
  },
  methods: {
    async getExpenseDateGraph () {
      if (this.expenseDateGraphId) {
        const data = await expenseDateGraphApi.getExpenseDateGraphById({ id: this.expenseDateGraphId })
        this.expenseDateGraph = { ...data }
        this.originalExpenseDateGraph = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.expenseDateGraph[field] !== this.originalExpenseDateGraph[field]
    },
    resetChanges () {
      this.expenseDateGraph = { ...this.originalExpenseDateGraph }
      this.changedFields = {}
    },
    async patchExpenseDateGraph () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedExpenseDateGraph = await expenseDateGraphApi.patchExpenseDateGraphById({
        id: this.expenseDateGraphId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.expenseDateGraph[key]
          return acc
        }, {})
      })
      if (patchedExpenseDateGraph.id) {
        this.$emit('expenseDateGraphPatched', patchedExpenseDateGraph)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script> 
<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="taskDateGraph[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-text-field
              v-for="numberField in numberFields"
              :key="numberField.key"
              v-model.number="taskDateGraph[numberField.key]"
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
              v-model="taskDateGraph[checkbox.key]"
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
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskDateGraph">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskDateGraphApi from '../../api'

export default {
  name: 'TaskDateGraphPatchDialog',
  props: ['taskDateGraphId', 'isOpen'],
  emits: ['closeDialog', 'taskDateGraphPatched'],
  data: () => ({
    title: 'Редактировать запись даты из графика задачи',
    valid: false,
    taskDateGraph: {},
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
    originalTaskDateGraph: {},
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
    async taskDateGraphId (value) {
      if (value) {
        await this.getTaskDateGraph()
      }
    }
  },
  methods: {
    async getTaskDateGraph () {
      if (this.taskDateGraphId) {
        const data = await taskDateGraphApi.getTaskDateGraphById({ id: this.taskDateGraphId })
        this.taskDateGraph = { ...data }
        this.originalTaskDateGraph = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.taskDateGraph[field] !== this.originalTaskDateGraph[field]
    },
    resetChanges () {
      this.taskDateGraph = { ...this.originalTaskDateGraph }
      this.changedFields = {}
    },
    async patchTaskDateGraph () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTaskDateGraph = await taskDateGraphApi.patchTaskDateGraphById({
        id: this.taskDateGraphId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.taskDateGraph[key]
          return acc
        }, {})
      })
      if (patchedTaskDateGraph.id) {
        this.$emit('taskDateGraphPatched', patchedTaskDateGraph)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script> 
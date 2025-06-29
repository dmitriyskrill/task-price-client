<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать задачу</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="task[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-textarea
              v-for="textareaField in textareaFields"
              :key="textareaField.key"
              v-model="task[textareaField.key]"
              :label="textareaField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textareaField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textareaField.key)"
          />
          <v-text-field
              v-for="numberField in numberFields"
              :key="numberField.key"
              v-model.number="task[numberField.key]"
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
              v-model="task[checkbox.key]"
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
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTask">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskApi from '../../api'

export default {
  name: 'TaskPatchDialog',
  props: ['taskId', 'isOpen'],
  emits: ['closeDialog', 'taskPatched'],
  data: () => ({
    valid: false,
    task: {},
    numberFields: [
      {
        key: 'priority',
        text: 'Приоритет'
      },
      {
        key: 'estimatedHours',
        text: 'Оценка часов'
      },
      {
        key: 'actualHours',
        text: 'Фактические часы'
      }
    ],
    textFields: [
      { key: 'name', text: 'Наименование' },
      { key: 'status', text: 'Статус' },
      { key: 'type', text: 'Тип' },
      { key: 'responsible', text: 'Ответственный' }
    ],
    textareaFields: [
      { key: 'description', text: 'Описание' }
    ],
    checkboxes: [
      {
        text: 'В корзине',
        key: 'isTrash'
      },
      {
        text: 'Завершена',
        key: 'isCompleted'
      },
      {
        text: 'В работе',
        key: 'isInProgress'
      }
    ],
    originalTask: {},
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
    async taskId (value) {
      if (value) {
        await this.getTask()
      }
    }
  },
  methods: {
    async getTask () {
      if (this.taskId) {
        const data = await taskApi.getTaskById({ id: this.taskId })
        this.task = { ...data }
        this.originalTask = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.task[field] !== this.originalTask[field]
    },
    resetChanges () {
      this.task = { ...this.originalTask }
      this.changedFields = {}
    },
    async patchTask () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTask = await taskApi.patchTaskById({
        id: this.taskId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.task[key]
          return acc
        }, {})
      })
      if (patchedTask.id) {
        this.$emit('taskPatched', patchedTask)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script> 
<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать пользователя</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="taskStatus.name"
              label="Наименование"
              :rules="[]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="taskStatus.shortName"
              label="Краткое наименование"
              :rules="[]"
              clearable
              :append-icon="changedFields.shortName ? 'mdi-pencil' : ''"
              @input="onFieldChange('shortName')"
          />
          <v-checkbox
              label="В корзине"
              v-model="taskStatus.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskStatus">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskStatusApi from '../../api'

export default {
  name: 'TaskStatusPatchDialog',
  props: ['taskStatusId', 'isOpen'],
  emits: ['closeDialog', 'taskStatusPatched'],
  data: () => ({
    valid: false,
    taskStatus: {
      shortName: '',
      name: '',
    },
    originalTaskStatus: {},
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
    async taskStatusId (value) {
      if (value) {
        await this.getTaskStatus()
      }
    }
  },
  methods: {
    async getTaskStatus () {
      if (this.taskStatusId) {
        const data = await taskStatusApi.getTaskStatusById({ id: this.taskStatusId })
        this.taskStatus = { ...data }
        this.originalTaskStatus = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.taskStatus[field] !== this.originalTaskStatus[field]
    },
    resetChanges () {
      this.taskStatus = { ...this.originalTaskStatus }
      this.changedFields = {}
    },
    async patchTaskStatus () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTaskStatus = await taskStatusApi.patchTaskStatusById({
        id: this.taskStatusId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.taskStatus[key]
          return acc
        }, {})
      })
      if (patchedTaskStatus.id) {
        this.$emit('taskStatusPatched', patchedTaskStatus)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать пользователя</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="taskWorkflowStatus.name"
              label="Наименование"
              :rules="[]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="taskWorkflowStatus.shortName"
              label="Краткое наименование"
              :rules="[]"
              clearable
              :append-icon="changedFields.shortName ? 'mdi-pencil' : ''"
              @input="onFieldChange('shortName')"
          />
          <v-checkbox
              label="В корзине"
              v-model="taskWorkflowStatus.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskWorkflowStatus">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskWorkflowStatusApi from '../../api'

export default {
  name: 'TaskWorkflowStatusPatchDialog',
  props: ['taskWorkflowStatusId', 'isOpen'],
  emits: ['closeDialog', 'taskWorkflowStatusPatched'],
  data: () => ({
    valid: false,
    taskWorkflowStatus: {
      shortName: '',
      name: '',
    },
    originalTaskWorkflowStatus: {},
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
    async taskWorkflowStatusId (value) {
      if (value) {
        await this.getTaskWorkflowStatus()
      }
    }
  },
  methods: {
    async getTaskWorkflowStatus () {
      if (this.taskWorkflowStatusId) {
        const data = await taskWorkflowStatusApi.getTaskWorkflowStatusById({ id: this.taskWorkflowStatusId })
        this.taskWorkflowStatus = { ...data }
        this.originalTaskWorkflowStatus = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.taskWorkflowStatus[field] !== this.originalTaskWorkflowStatus[field]
    },
    resetChanges () {
      this.taskWorkflowStatus = { ...this.originalTaskWorkflowStatus }
      this.changedFields = {}
    },
    async patchTaskWorkflowStatus () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTaskWorkflowStatus = await taskWorkflowStatusApi.patchTaskWorkflowStatusById({
        id: this.taskWorkflowStatusId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.taskWorkflowStatus[key]
          return acc
        }, {})
      })
      if (patchedTaskWorkflowStatus.id) {
        this.$emit('taskWorkflowStatusPatched', patchedTaskWorkflowStatus)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

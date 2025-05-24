<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать пользователя</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="taskWorkflow.name"
              label="Наименование"
              :rules="[]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="taskWorkflow.shortName"
              label="Краткое наименование"
              :rules="[]"
              clearable
              :append-icon="changedFields.shortName ? 'mdi-pencil' : ''"
              @input="onFieldChange('shortName')"
          />
          <v-checkbox
              label="В корзине"
              v-model="taskWorkflow.isTrash"
              :append-icon="changedFields.isTrash ? 'mdi-pencil' : ''"
              @input="onFieldChange('isTrash')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskWorkflow">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskWorkflowApi from '../../api'

export default {
  name: 'TaskWorkflowPatchDialog',
  props: ['taskWorkflowId', 'isOpen'],
  emits: ['closeDialog', 'taskWorkflowPatched'],
  data: () => ({
    valid: false,
    taskWorkflow: {
      shortName: '',
      name: '',
    },
    originalTaskWorkflow: {},
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
    async taskWorkflowId (value) {
      if (value) {
        await this.getTaskWorkflow()
      }
    }
  },
  methods: {
    async getTaskWorkflow () {
      if (this.taskWorkflowId) {
        const data = await taskWorkflowApi.getTaskWorkflowById({ id: this.taskWorkflowId })
        this.taskWorkflow = { ...data }
        this.originalTaskWorkflow = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.taskWorkflow[field] !== this.originalTaskWorkflow[field]
    },
    resetChanges () {
      this.taskWorkflow = { ...this.originalTaskWorkflow }
      this.changedFields = {}
    },
    async patchTaskWorkflow () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTaskWorkflow = await taskWorkflowApi.patchTaskWorkflowById({
        id: this.taskWorkflowId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.taskWorkflow[key]
          return acc
        }, {})
      })
      if (patchedTaskWorkflow.id) {
        this.$emit('taskWorkflowPatched', patchedTaskWorkflow)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

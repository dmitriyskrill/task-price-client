<template>
  <v-dialog v-model="dialog" persistent max-width="500px" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          v-tooltip:bottom="title"
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
              v-model="taskWorkflow.shortName"
              label="Краткое наименование"
              :rules="[]"
              clearable
          />
          <v-text-field
              v-model="taskWorkflow.name"
              label="Наименование"
              :rules="[]"
              clearable
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTaskWorkflow">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskWorkflowApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'TaskWorkflowCreateDialog',
  props: [],
  emits: ['taskWorkflowCreated'],
  data: () => ({
    title: 'Создать рабочий процесс задачи',
    dialog: false,
    valid: false,
    taskWorkflow: {
      shortName: '',
      name: '',
    },
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  methods: {
    async createTaskWorkflow () {
      if (!await this.$refs.form.validate() || !this.currentUserStore?.user?.id) {
        return false
      }
      const createdTaskWorkflow = await taskWorkflowApi.postTaskWorkflow({
        ...this.taskWorkflow,
        ownerId: this.currentUserStore?.user?.id
      })
      if (createdTaskWorkflow.id) {
        this.$emit('taskWorkflowCreated', createdTaskWorkflow)
        this.closeDialog()
      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

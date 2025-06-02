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
          <v-select
              label="Task Workflow"
              v-model="taskWorkflowStatus.taskWorkflowId"
              :items="taskWorkflowList"
              item-title="name"
              item-value="id"
              :rules="[required]"
              :return-object="false"
          />
          <v-select
              label="Task Status"
              v-model="taskWorkflowStatus.taskStatusId"
              :items="taskStatusList"
              item-title="name"
              item-value="id"
              :rules="[required]"
              :return-object="false"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTaskWorkflowStatus">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskWorkflowStatusApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'
import { taskWorkflowService } from '@/modules/taskWorkflow'
import { taskStatusService } from '@/modules/taskStatus'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'TaskWorkflowStatusCreateDialog',
  props: [],
  emits: ['taskWorkflowStatusCreated'],
  data: () => ({
    title: 'Создать taskWorkflowStatus',
    dialog: false,
    valid: false,
    taskWorkflowStatus: {
        taskWorkflowId: null,
        taskStatusId: null,
    },
    taskWorkflowList: [],
    taskStatusList: [],
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  methods: {
    async createTaskWorkflowStatus () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return
      const createdTaskWorkflowStatus = await taskWorkflowStatusApi.postTaskWorkflowStatus({
        ...this.taskWorkflowStatus,
        ownerId
      })

      if (createdTaskWorkflowStatus.id) {
        this.$emit('taskWorkflowStatusCreated', createdTaskWorkflowStatus)
        this.closeDialog()

      }

    },
    async getRelations () {
      this.taskWorkflowList = await taskWorkflowService.getTaskWorkflowList()
      this.taskStatusList = await taskStatusService.getTaskStatusList()
    },
    closeDialog () {
      this.dialog = false
    }
  },
  async beforeMount () {
    await this.getRelations()
  }
}
</script>

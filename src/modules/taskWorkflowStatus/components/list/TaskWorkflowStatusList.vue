<script>
import * as taskWorkflowStatusApi from '../../api'
import TaskWorkflowStatusPatchDialog from '../patchDialog/TaskWorkflowStatusPatchDialog.vue'
import TaskWorkflowStatusCreateDialog from '../createDialog/TaskWorkflowStatusCreateDialog.vue'

export default {
  components: { TaskWorkflowStatusCreateDialog, TaskWorkflowStatusPatchDialog },
  data: () => ({
    title: 'Список taskWorkflowStatus',
    editDialog: {
      isOpen: false,
      taskWorkflowStatusId: null,
    },
    taskWorkflowStatusList: [],
    headers: [
      { title: 'Рабочий процесс', key: 'taskWorkflow' },
      { title: 'Статус', key: 'taskStatus' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskWorkflowStatusId) {
      this.editDialog = {
        isOpen: true,
        taskWorkflowStatusId: taskWorkflowStatusId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskWorkflowStatusId: null,
      }
    },
    setToTaskWorkflowStatusList (taskWorkflowStatus) {
      const index = this.taskWorkflowStatusList.findIndex(u => u.id === taskWorkflowStatus.id)
      if (index >= 0) {
        this.taskWorkflowStatusList.splice(index, 1, taskWorkflowStatus)
      } else {
        this.taskWorkflowStatusList.push(taskWorkflowStatus)
      }
    }
  },
  async mounted () {
    const taskWorkflowStatusList = await taskWorkflowStatusApi.getTaskWorkflowStatusList()
    this.taskWorkflowStatusList = [
      ...taskWorkflowStatusList,
    ]
  }

}
</script>

<template>
  <v-app-bar
      density="compact"
      no-gutters
      class="px-4"
  >
    <h3 class="mx-10">{{ title }}</h3>
    <v-spacer/>
    <TaskWorkflowStatusCreateDialog
        @taskWorkflowStatusCreated="setToTaskWorkflowStatusList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskWorkflowStatusList"
      fixed-header
      style="height: calc(100vh - 48px)"
      :itemsPerPage="-1"
  >
    <template #item.actions="{ item }">
      <v-btn variant="text" icon @click="openEditDialog(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <template #item.taskWorkflow="{ item }">
      {{ item.taskWorkflow?.name }}
    </template>
    <template #item.taskStatus="{ item }">
      {{ item.taskStatus?.name }}
    </template>
  </v-data-table>
  <TaskWorkflowStatusPatchDialog
      :isOpen="editDialog.isOpen"
      :taskWorkflowStatusId="editDialog.taskWorkflowStatusId"
      @closeDialog="closeEditDialog"
      @taskWorkflowStatusPatched="setToTaskWorkflowStatusList($event)"
  />
</template>

<style scoped>
</style>
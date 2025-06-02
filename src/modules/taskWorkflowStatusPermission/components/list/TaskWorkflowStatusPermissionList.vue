<script>
import * as taskWorkflowStatusPermissionApi from '../../api'
import TaskWorkflowStatusPermissionPatchDialog from '../patchDialog/TaskWorkflowStatusPermissionPatchDialog.vue'
import TaskWorkflowStatusPermissionCreateDialog from '../createDialog/TaskWorkflowStatusPermissionCreateDialog.vue'

export default {
  components: { TaskWorkflowStatusPermissionCreateDialog, TaskWorkflowStatusPermissionPatchDialog },
  data: () => ({
    title: 'Список taskWorkflowStatusPermission',
    editDialog: {
      isOpen: false,
      taskWorkflowStatusPermissionId: null,
    },
    taskWorkflowStatusPermissionList: [],
    headers: [
      { title: 'Сущность', key: 'entity' },
      { title: 'Операция', key: 'operation' },
      { title: 'isPlan', key: 'isPlan' },
      { title: 'taskWorkflowStatus', key: 'taskWorkflowStatus' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskWorkflowStatusPermissionId) {
      this.editDialog = {
        isOpen: true,
        taskWorkflowStatusPermissionId: taskWorkflowStatusPermissionId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskWorkflowStatusPermissionId: null,
      }
    },
    setToTaskWorkflowStatusPermissionList (taskWorkflowStatusPermission) {
      const index = this.taskWorkflowStatusPermissionList.findIndex(u => u.id === taskWorkflowStatusPermission.id)
      if (index >= 0) {
        this.taskWorkflowStatusPermissionList.splice(index, 1, taskWorkflowStatusPermission)
      } else {
        this.taskWorkflowStatusPermissionList.push(taskWorkflowStatusPermission)
      }
    }
  },
  async mounted () {
    const taskWorkflowStatusPermissionList = await taskWorkflowStatusPermissionApi.getTaskWorkflowStatusPermissionList()
    this.taskWorkflowStatusPermissionList = [
      ...taskWorkflowStatusPermissionList,
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
    <TaskWorkflowStatusPermissionCreateDialog
        @taskWorkflowStatusPermissionCreated="setToTaskWorkflowStatusPermissionList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskWorkflowStatusPermissionList"
      fixed-header
      style="height: calc(100vh - 48px)"
      :itemsPerPage="-1"
  >
    <template #item.actions="{ item }">
      <v-btn variant="text" icon @click="openEditDialog(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
    <template #item.taskWorkflowStatus="{ item }">
      <template
      v-if="item.taskWorkflowStatus && item.taskWorkflowStatus.taskWorkflow && item.taskWorkflowStatus.taskStatus"
      >
        {{ item.taskWorkflowStatus.taskWorkflow.name }} - {{ item.taskWorkflowStatus.taskStatus.name }}
      </template>

    </template>
  </v-data-table>
  <TaskWorkflowStatusPermissionPatchDialog
      :isOpen="editDialog.isOpen"
      :taskWorkflowStatusPermissionId="editDialog.taskWorkflowStatusPermissionId"
      @closeDialog="closeEditDialog"
      @taskWorkflowStatusPermissionPatched="setToTaskWorkflowStatusPermissionList($event)"
  />
</template>

<style scoped>
</style>
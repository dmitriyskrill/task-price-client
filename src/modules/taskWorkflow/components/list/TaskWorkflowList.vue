<script>
import * as taskWorkflowApi from '../../api'
import TaskWorkflowPatchDialog from '../patchDialog/TaskWorkflowPatchDialog.vue'
import TaskWorkflowCreateDialog from '../createDialog/TaskWorkflowCreateDialog.vue'

export default {
  components: { TaskWorkflowCreateDialog, TaskWorkflowPatchDialog },
  data: () => ({
    title: 'Рабочие процессы задач',
    editDialog: {
      isOpen: false,
      taskWorkflowId: null,
    },
    taskWorkflowList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Кратное наименование', key: 'shortName' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskWorkflowId) {
      this.editDialog = {
        isOpen: true,
        taskWorkflowId: taskWorkflowId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskWorkflowId: null,
      }
    },
    setToTaskWorkflowList (taskWorkflow) {
      const index = this.taskWorkflowList.findIndex(u => u.id === taskWorkflow.id)
      if (index >= 0) {
        this.taskWorkflowList.splice(index, 1, taskWorkflow)
      } else {
        this.taskWorkflowList.push(taskWorkflow)
      }
    }
  },
  async mounted () {
    const taskWorkflowList = await taskWorkflowApi.getTaskWorkflowList()
    this.taskWorkflowList = [
      ...taskWorkflowList,
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
    <h3 class="mx-10">{{title}}</h3>
    <v-spacer/>
    <TaskWorkflowCreateDialog
        @taskWorkflowCreated="setToTaskWorkflowList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskWorkflowList"
      fixed-header
      style="height: calc(100vh - 48px)"
      :itemsPerPage="-1"
  >
    <template #item.actions="{ item }">
      <v-btn variant="text" icon @click="openEditDialog(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
  <TaskWorkflowPatchDialog
      :isOpen="editDialog.isOpen"
      :taskWorkflowId="editDialog.taskWorkflowId"
      @closeDialog="closeEditDialog"
      @taskWorkflowPatched="setToTaskWorkflowList($event)"
  />
</template>

<style scoped>
</style>
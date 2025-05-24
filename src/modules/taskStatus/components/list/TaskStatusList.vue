<script>
import * as taskStatusApi from '../../api'
import TaskStatusPatchDialog from '../patchDialog/TaskStatusPatchDialog.vue'
import TaskStatusCreateDialog from '../createDialog/TaskStatusCreateDialog.vue'

export default {
  components: { TaskStatusCreateDialog, TaskStatusPatchDialog },
  data: () => ({
    title: 'Список статусов задач',
    editDialog: {
      isOpen: false,
      taskStatusId: null,
    },
    taskStatusList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Кратное наименование', key: 'shortName' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskStatusId) {
      this.editDialog = {
        isOpen: true,
        taskStatusId: taskStatusId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskStatusId: null,
      }
    },
    setToTaskStatusList (taskStatus) {
      const index = this.taskStatusList.findIndex(u => u.id === taskStatus.id)
      if (index >= 0) {
        this.taskStatusList.splice(index, 1, taskStatus)
      } else {
        this.taskStatusList.push(taskStatus)
      }
    }
  },
  async mounted () {
    const taskStatusList = await taskStatusApi.getTaskStatusList()
    this.taskStatusList = [
      ...taskStatusList,
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
    <TaskStatusCreateDialog
        @taskStatusCreated="setToTaskStatusList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskStatusList"
      fixed-header
      style="height: calc(100vh - 48px)"
      :footer-props="{
        itemsPerPageText: 'Элементов на странице:',
        itemsPerPageAllText: 'Все',
        itemsPerPage: -1
      }"
  >
    <template #item.actions="{ item }">
      <v-btn variant="text" icon @click="openEditDialog(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
  <TaskStatusPatchDialog
      :isOpen="editDialog.isOpen"
      :taskStatusId="editDialog.taskStatusId"
      @closeDialog="closeEditDialog"
      @taskStatusPatched="setToTaskStatusList($event)"
  />
</template>

<style scoped>
</style>
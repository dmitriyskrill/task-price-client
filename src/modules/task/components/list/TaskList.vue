<script>
import * as taskApi from '../../api'
import TaskPatchDialog from '../patchDialog/TaskPatchDialog.vue'
import TaskCreateDialog from '../createDialog/TaskCreateDialog.vue'

export default {
  components: { TaskCreateDialog, TaskPatchDialog },
  data: () => ({
    title: 'Список задач',
    editDialog: {
      isOpen: false,
      taskId: null,
    },
    taskList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Описание', key: 'description' },
      { title: 'Статус', key: 'status' },
      { title: 'Тип', key: 'type' },
      { title: 'Ответственный', key: 'responsible' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskId) {
      this.editDialog = {
        isOpen: true,
        taskId: taskId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskId: null,
      }
    },
    setToTaskList (task) {
      const index = this.taskList.findIndex(u => u.id === task.id)
      if (index >= 0) {
        this.taskList.splice(index, 1, task)
      } else {
        this.taskList.push(task)
      }
    }
  },
  async mounted () {
    const taskList = await taskApi.getTaskList()
    this.taskList = [
      ...taskList,
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
    <TaskCreateDialog
        @taskCreated="setToTaskList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskList"
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
  <TaskPatchDialog
      :isOpen="editDialog.isOpen"
      :taskId="editDialog.taskId"
      @closeDialog="closeEditDialog"
      @taskPatched="setToTaskList($event)"
  />
</template>

<style scoped>
</style> 
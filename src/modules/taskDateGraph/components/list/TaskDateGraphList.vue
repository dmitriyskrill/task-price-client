<script>
import * as taskDateGraphApi from '../../api'
import TaskDateGraphPatchDialog from '../patchDialog/TaskDateGraphPatchDialog.vue'
import TaskDateGraphCreateDialog from '../createDialog/TaskDateGraphCreateDialog.vue'

export default {
  components: { TaskDateGraphCreateDialog, TaskDateGraphPatchDialog },
  data: () => ({
    title: 'Список записей даты из графика задач',
    editDialog: {
      isOpen: false,
      taskDateGraphId: null,
    },
    taskDateGraphList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Дата', key: 'date' },
      { title: 'Кол-во', key: 'amount' },
      { title: 'Факт', key: 'isFact' },
      { title: 'taskId', key: 'taskId' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskDateGraphId) {
      this.editDialog = {
        isOpen: true,
        taskDateGraphId: taskDateGraphId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskDateGraphId: null,
      }
    },
    setToTaskDateGraphList (taskDateGraph) {
      const index = this.taskDateGraphList.findIndex(u => u.id === taskDateGraph.id)
      if (index >= 0) {
        this.taskDateGraphList.splice(index, 1, taskDateGraph)
      } else {
        this.taskDateGraphList.push(taskDateGraph)
      }
    }
  },
  async mounted () {
    const taskDateGraphList = await taskDateGraphApi.getTaskDateGraphList()
    this.taskDateGraphList = [
      ...taskDateGraphList,
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
    <TaskDateGraphCreateDialog
        @taskDateGraphCreated="setToTaskDateGraphList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskDateGraphList"
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
  <TaskDateGraphPatchDialog
      :isOpen="editDialog.isOpen"
      :taskDateGraphId="editDialog.taskDateGraphId"
      @closeDialog="closeEditDialog"
      @taskDateGraphPatched="setToTaskDateGraphList($event)"
  />
</template>

<style scoped>
</style> 
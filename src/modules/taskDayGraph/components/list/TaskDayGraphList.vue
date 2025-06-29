<script>
import * as taskDayGraphApi from '../../api'
import TaskDayGraphPatchDialog from '../patchDialog/TaskDayGraphPatchDialog.vue'
import TaskDayGraphCreateDialog from '../createDialog/TaskDayGraphCreateDialog.vue'

export default {
  components: { TaskDayGraphCreateDialog, TaskDayGraphPatchDialog },
  data: () => ({
    title: 'Список типов задач',
    editDialog: {
      isOpen: false,
      taskDayGraphId: null,
    },
    taskDayGraphList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Кратное наименование', key: 'shortName' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskDayGraphId) {
      this.editDialog = {
        isOpen: true,
        taskDayGraphId: taskDayGraphId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskDayGraphId: null,
      }
    },
    setToTaskDayGraphList (taskDayGraph) {
      const index = this.taskDayGraphList.findIndex(u => u.id === taskDayGraph.id)
      if (index >= 0) {
        this.taskDayGraphList.splice(index, 1, taskDayGraph)
      } else {
        this.taskDayGraphList.push(taskDayGraph)
      }
    }
  },
  async mounted () {
    const taskDayGraphList = await taskDayGraphApi.getTaskDayGraphList()
    this.taskDayGraphList = [
      ...taskDayGraphList,
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
    <TaskDayGraphCreateDialog
        @taskDayGraphCreated="setToTaskDayGraphList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskDayGraphList"
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
  <TaskDayGraphPatchDialog
      :isOpen="editDialog.isOpen"
      :taskDayGraphId="editDialog.taskDayGraphId"
      @closeDialog="closeEditDialog"
      @taskDayGraphPatched="setToTaskDayGraphList($event)"
  />
</template>

<style scoped>
</style>
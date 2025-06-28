<script>
import * as taskTypeApi from '../../api'
import TaskTypePatchDialog from '../patchDialog/TaskTypePatchDialog.vue'
import TaskTypeCreateDialog from '../createDialog/TaskTypeCreateDialog.vue'

export default {
  components: { TaskTypeCreateDialog, TaskTypePatchDialog },
  data: () => ({
    title: 'Список типов задач',
    editDialog: {
      isOpen: false,
      taskTypeId: null,
    },
    taskTypeList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Кратное наименование', key: 'shortName' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (taskTypeId) {
      this.editDialog = {
        isOpen: true,
        taskTypeId: taskTypeId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        taskTypeId: null,
      }
    },
    setToTaskTypeList (taskType) {
      const index = this.taskTypeList.findIndex(u => u.id === taskType.id)
      if (index >= 0) {
        this.taskTypeList.splice(index, 1, taskType)
      } else {
        this.taskTypeList.push(taskType)
      }
    }
  },
  async mounted () {
    const taskTypeList = await taskTypeApi.getTaskTypeList()
    this.taskTypeList = [
      ...taskTypeList,
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
    <TaskTypeCreateDialog
        @taskTypeCreated="setToTaskTypeList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="taskTypeList"
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
  <TaskTypePatchDialog
      :isOpen="editDialog.isOpen"
      :taskTypeId="editDialog.taskTypeId"
      @closeDialog="closeEditDialog"
      @taskTypePatched="setToTaskTypeList($event)"
  />
</template>

<style scoped>
</style>
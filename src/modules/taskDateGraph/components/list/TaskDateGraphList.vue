<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getTaskDateGraphList } from '@/modules/taskDateGraph/api'
import type { ITaskDateGraph } from '@/modules/taskDateGraph/types/TaskDateGraph.interface'
import TaskDateGraphCreateDialog from '@/modules/taskDateGraph/components/createDialog/TaskDateGraphCreateDialog.vue'

const taskDateGraphList = ref<ITaskDateGraph[]>([])

onMounted(async () => {
  taskDateGraphList.value = await getTaskDateGraphList()
})

function addTaskDateGraph(item: ITaskDateGraph) {
  taskDateGraphList.value.push(item)
}

const headers = [
      { title: 'Дата', key: 'date' },
      { title: 'Сумма', key: 'amount' },
      { title: 'Задача', key: 'task.name' },
      { title: 'Факт', key: 'isFact' },
      { title: 'Владелец', key: 'owner.surname' }
    ]
</script>

<template>
    <v-app-bar
      density="compact"
      no-gutters
      class="px-4"
  >
    <h3 class="mx-10"> График по датам задач</h3>
    <v-spacer/>
    <TaskDateGraphCreateDialog @taskDateGraphCreated="addTaskDateGraph" />
  </v-app-bar>
  <v-data-table
    :headers="headers"
    :items="taskDateGraphList"
    density="compact"
    fixed-header
    style="height: 80vh"
  />
</template> 
<template>
  <v-dialog v-model="dialog" persistent max-width="500px" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-tooltip:bottom="'Создать график по дате задачи'"
        v-bind="{ ...activatorProps }"
        variant="text"
        icon
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6">Создать график по дате задачи</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="form.date" label="Дата" type="date" :rules="[required]"/>
          <v-text-field v-model="form.amount" label="Сумма" type="number" :rules="[required]"/>
          <v-text-field v-model="form.taskName" label="Задача (имя)" :rules="[required]"/>
          <v-checkbox v-model="form.isFact" label="Факт"/>
          <v-text-field v-model="form.ownerSurname" label="Владелец (фамилия)" :rules="[required]"/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTaskDateGraph">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { postTaskDateGraph } from '@/modules/taskDateGraph/api'

const emit = defineEmits(['taskDateGraphCreated'])
const dialog = ref(false)
const valid = ref(false)
const form = ref({
  date: '',
  amount: '',
  taskName: '',
  isFact: false,
  ownerSurname: ''
})
const required = (v: any) => !!v || 'Обязательное поле'

async function createTaskDateGraph() {
  // Преобразуем в структуру ITaskDateGraph
  const data = {
    date: new Date(form.value.date),
    amount: Number(form.value.amount),
    task: { id: '', name: form.value.taskName },
    isFact: form.value.isFact,
    owner: {
      id: '',
      name: '',
      surname: form.value.ownerSurname,
      patronymic: '',
      email: '',
      login: '',
      verificationToken: '',
      avatarPath: '',
      sort: 0,
      createdAt: new Date(),
      createdBy: '',
      updatedAt: new Date(),
      updatedBy: '',
      isTrash: false,
      dateAddingToTrash: null
    }
  }
  const created = await postTaskDateGraph(data)
  if (created && created.id) {
    emit('taskDateGraphCreated', created)
    closeDialog()
  }
}
function closeDialog() {
  dialog.value = false
}
</script> 
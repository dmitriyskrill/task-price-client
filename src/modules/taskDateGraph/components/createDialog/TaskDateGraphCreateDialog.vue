<template>
  <v-dialog v-model="dialog"  persistent max-width="500px" scrollable>
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
          <v-text-field v-model="form.date" label="Дата" type="date" :rules="[required]" />
          <v-text-field v-model="form.amount" label="Сумма" type="number" :rules="[required]" />
          <v-text-field v-model="form.taskName" label="Задача (имя)" :rules="[required]" />
          <v-checkbox v-model="form.isFact" label="Факт" />
          <v-text-field v-model="form.owner" label="Владелец (фамилия)" :rules="[required]" />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn text @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTaskDateGraph">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { postTaskDateGraph } from '@/modules/taskDateGraph/api'

export default {
  name: 'TaskDateGraphDialog',
  data () {
    return {
      dialog: false,
      valid: false,
      form: {
        date: '',
        amount: '',
        taskName: '',
        isFact: false,
        owner: ''
      },
      taskDateGraph: {
        endpoint: 'taskDateGraph',
        date: null,
        amount: null,
        taskId: null,
        isFact: null,
        ownerId: null
      }
    }
  },
  methods: {
    required (v) {
      return !!v || 'Обязательное поле'
    },
    closeDialog () {
      this.dialog = false
    },
    async createTaskDateGraph () {
      const payload = {
        ...this.taskDateGraph,
        ...this.form
      }

      try {
        const created = await postTaskDateGraph(payload)
        if (created && created.id) {
          this.$emit('taskDateGraphCreated', created)
          this.closeDialog()
        }
      } catch (e) {
        console.error('Ошибка при создании графика по дате задачи:', e)
      }
    }
  }
}
</script>

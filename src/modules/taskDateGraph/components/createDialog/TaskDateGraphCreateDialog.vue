<template>
  <v-dialog v-model="dialog" persistent max-width="500px" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          v-tooltip:bottom="title"
          v-bind="{ ...activatorProps }"
          variant="text"
          icon
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field v-model="taskDateGraph.date" label="Дата" type="date" :rules="[required]"/>
          <v-text-field v-model.number="taskDateGraph.amount" label="Сумма" type="number" :rules="[required]"/>
          <v-autocomplete
              v-model="taskDateGraph.taskId"
              label="Задача (имя)"
              :rules="[required]"
              :items="taskList"
              @click:prepend="getTaskList()"
              prepend-icon="mdi-reload"
              item-value="id"
              item-title="name"
              :return-object="false"
          />
          <v-checkbox v-model="taskDateGraph.isFact" label="Факт"/>
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

<script>
import * as taskDateGraphApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'
import { taskService } from '@/modules/task'
import dayjs from 'dayjs'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'TaskDateGraphCreateDialog',
  props: [],
  emits: ['taskDateGraphCreated'],
  data: () => ({
    title: 'Создать запись даты для графика задачи',
    dialog: false,
    valid: false,
    taskDateGraph: {
      date: '',
      amount: '',
      taskId: '',
      isFact: false,
    },
    taskList: [],
    required: v => !!v || 'Обязательное поле',
  }),
  methods: {
    async getTaskList () {
      this.taskList = await taskService.getTaskList()
    },
    async createTaskDateGraph () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return
      const createdTaskDateGraph = await taskDateGraphApi.postTaskDateGraph({
        ...this.taskDateGraph,
        date: dayjs(this.taskDateGraph.date).toISOString(),
        ownerId
      })

      if (createdTaskDateGraph.id) {
        this.$emit('taskDateGraphCreated', createdTaskDateGraph)
        this.closeDialog()

      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script> 
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
          <v-text-field
              v-model="expense.name"
              label="Наименование"
              :rules="[]"
              clearable
          />
          <v-autocomplete
              v-model="expense.taskId"
              label="Задача"
              :rules="[required]"
              :items="taskList"
              @click:prepend="getTaskList()"
              prepend-icon="mdi-reload"
              item-value="id"
              item-title="name"
              :return-object="false"
          />
          <v-autocomplete
              v-model="expense.expenseTypeId"
              label="Тип затрат"
              :rules="[required]"
              :items="expenseTypeList"
              @click:prepend="getExpenseTypeList()"
              prepend-icon="mdi-reload"
              item-value="id"
              item-title="name"
              :return-object="false"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createExpense">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'
import { taskService } from '@/modules/task'
import { expenseTypeService } from '@/modules/expenseType'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'ExpenseCreateDialog',
  props: [],
  emits: ['expenseCreated'],
  data: () => ({
    taskList: [],
    expenseTypeList: [],
    title: 'Создать затрату',
    dialog: false,
    valid: false,
    expense: {
      name: '',
      expenseTypeId: '',
      taskId: ''
    },
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  methods: {
    async getTaskList () {
      this.taskList = await taskService.getTaskList()
    },
    async getExpenseTypeList () {
      this.expenseTypeList = await expenseTypeService.getExpenseTypeList()
    },
    async createExpense () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return
      const createdExpense = await expenseApi.postExpense({
        ...this.expense,
        ownerId
      })

      if (createdExpense.id) {
        this.$emit('expenseCreated', createdExpense)
        this.closeDialog()

      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script> 
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
          <v-text-field v-model="expenseDateGraph.date" label="Дата" type="date" :rules="[required]"/>
          <v-text-field v-model.number="expenseDateGraph.amount" label="Сумма" type="number" :rules="[required]"/>
          <v-autocomplete
              v-model="expenseDateGraph.expenseId"
              label="Расход (имя)"
              :rules="[required]"
              :items="expenseList"
              @click:prepend="getExpenseList()"
              prepend-icon="mdi-reload"
              item-value="id"
              item-title="name"
              :return-object="false"
          />
          <v-checkbox v-model="expenseDateGraph.isFact" label="Факт"/>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createExpenseDateGraph">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseDateGraphApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'
import { expenseService } from '@/modules/expense'
import dayjs from 'dayjs'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'ExpenseDateGraphCreateDialog',
  props: [],
  emits: ['expenseDateGraphCreated'],
  data: () => ({
    title: 'Создать запись даты для графика расхода',
    dialog: false,
    valid: false,
    expenseDateGraph: {
      date: '',
      amount: '',
      expenseId: '',
      isFact: false,
    },
    expenseList: [],
    required: v => !!v || 'Обязательное поле',
  }),
  methods: {
    async getExpenseList () {
      this.expenseList = await expenseService.getExpenseList()
    },
    async createExpenseDateGraph () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return
      const createdExpenseDateGraph = await expenseDateGraphApi.postExpenseDateGraph({
        ...this.expenseDateGraph,
        date: dayjs(this.expenseDateGraph.date).toISOString(),
        ownerId
      })

      if (createdExpenseDateGraph.id) {
        this.$emit('expenseDateGraphCreated', createdExpenseDateGraph)
        this.closeDialog()

      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script> 
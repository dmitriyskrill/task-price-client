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
          <v-text-field v-model.number="expenseDayGraph.day" label="День" type="number" :rules="[required]"/>
          <v-text-field v-model.number="expenseDayGraph.amount" label="Сумма" type="number" :rules="[required]"/>
          <v-autocomplete
              v-model="expenseDayGraph.expenseId"
              label="Расход (имя)"
              :rules="[required]"
              :items="expenseList"
              @click:prepend="getExpenseList()"
              prepend-icon="mdi-reload"
              item-value="id"
              item-title="name"
              :return-object="false"
          />
          <v-checkbox v-model="expenseDayGraph.isFact" label="Факт"/>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createExpenseDayGraph">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseDayGraphApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'
import { expenseService } from '@/modules/expense'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'ExpenseDayGraphCreateDialog',
  props: [],
  emits: ['expenseDayGraphCreated'],
  data: () => ({
    title: 'Создать запись дня для графика расхода',
    dialog: false,
    valid: false,
    expenseDayGraph: {
      day: '',
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
    async createExpenseDayGraph () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return
      const createdExpenseDayGraph = await expenseDayGraphApi.postExpenseDayGraph({
        ...this.expenseDayGraph,
        ownerId
      })

      if (createdExpenseDayGraph.id) {
        this.$emit('expenseDayGraphCreated', createdExpenseDayGraph)
        this.closeDialog()

      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script> 
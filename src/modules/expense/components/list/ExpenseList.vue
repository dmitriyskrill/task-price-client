<script>
import * as expenseApi from '../../api'
import ExpensePatchDialog from '../patchDialog/ExpensePatchDialog.vue'
import ExpenseCreateDialog from '../createDialog/ExpenseCreateDialog.vue'

export default {
  components: { ExpenseCreateDialog, ExpensePatchDialog },
  data: () => ({
    title: 'Список затрат',
    editDialog: {
      isOpen: false,
      expenseId: null,
    },
    expenseList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'expenseId', key: 'expenseId' },
      { title: 'taskId', key: 'taskId' },
      { title: 'ownerId', key: 'ownerId' },
      { title: 'isFact', key: 'isFact' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (expenseId) {
      this.editDialog = {
        isOpen: true,
        expenseId: expenseId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        expenseId: null,
      }
    },
    setToExpenseList (expense) {
      const index = this.expenseList.findIndex(u => u.id === expense.id)
      if (index >= 0) {
        this.expenseList.splice(index, 1, expense)
      } else {
        this.expenseList.push(expense)
      }
    }
  },
  async mounted () {
    const expenseList = await expenseApi.getExpenseList()
    this.expenseList = [
      ...expenseList,
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
    <ExpenseCreateDialog
        @expenseCreated="setToExpenseList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="expenseList"
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
  <ExpensePatchDialog
      :isOpen="editDialog.isOpen"
      :expenseId="editDialog.expenseId"
      @closeDialog="closeEditDialog"
      @expensePatched="setToExpenseList($event)"
  />
</template>

<style scoped>
</style> 
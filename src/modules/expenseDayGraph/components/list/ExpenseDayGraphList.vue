<script>
import * as expenseDayGraphApi from '../../api'
import ExpenseDayGraphPatchDialog from '../patchDialog/ExpenseDayGraphPatchDialog.vue'
import ExpenseDayGraphCreateDialog from '../createDialog/ExpenseDayGraphCreateDialog.vue'

export default {
  components: { ExpenseDayGraphCreateDialog, ExpenseDayGraphPatchDialog },
  data: () => ({
    title: 'Список записей дня из графика расходов',
    editDialog: {
      isOpen: false,
      expenseDayGraphId: null,
    },
    expenseDayGraphList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'День', key: 'day' },
      { title: 'Кол-во', key: 'amount' },
      { title: 'Факт', key: 'isFact' },
      { title: 'expenseId', key: 'expenseId' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (expenseDayGraphId) {
      this.editDialog = {
        isOpen: true,
        expenseDayGraphId: expenseDayGraphId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        expenseDayGraphId: null,
      }
    },
    setToExpenseDayGraphList (expenseDayGraph) {
      const index = this.expenseDayGraphList.findIndex(u => u.id === expenseDayGraph.id)
      if (index >= 0) {
        this.expenseDayGraphList.splice(index, 1, expenseDayGraph)
      } else {
        this.expenseDayGraphList.push(expenseDayGraph)
      }
    }
  },
  async mounted () {
    const expenseDayGraphList = await expenseDayGraphApi.getExpenseDayGraphList()
    this.expenseDayGraphList = [
      ...expenseDayGraphList,
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
    <h3 class="mx-10">{{ title }}</h3>
    <v-spacer/>
    <ExpenseDayGraphCreateDialog
        @expenseDayGraphCreated="setToExpenseDayGraphList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="expenseDayGraphList"
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
  <ExpenseDayGraphPatchDialog
      :isOpen="editDialog.isOpen"
      :expenseDayGraphId="editDialog.expenseDayGraphId"
      @closeDialog="closeEditDialog"
      @expenseDayGraphPatched="setToExpenseDayGraphList($event)"
  />
</template>

<style scoped>
</style> 
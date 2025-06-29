<script>
import * as expenseDateGraphApi from '../../api'
import ExpenseDateGraphPatchDialog from '../patchDialog/ExpenseDateGraphPatchDialog.vue'
import ExpenseDateGraphCreateDialog from '../createDialog/ExpenseDateGraphCreateDialog.vue'

export default {
  components: { ExpenseDateGraphCreateDialog, ExpenseDateGraphPatchDialog },
  data: () => ({
    title: 'Список записей даты из графика расходов',
    editDialog: {
      isOpen: false,
      expenseDateGraphId: null,
    },
    expenseDateGraphList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Дата', key: 'date' },
      { title: 'Кол-во', key: 'amount' },
      { title: 'Факт', key: 'isFact' },
      { title: 'expenseId', key: 'expenseId' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (expenseDateGraphId) {
      this.editDialog = {
        isOpen: true,
        expenseDateGraphId: expenseDateGraphId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        expenseDateGraphId: null,
      }
    },
    setToExpenseDateGraphList (expenseDateGraph) {
      const index = this.expenseDateGraphList.findIndex(u => u.id === expenseDateGraph.id)
      if (index >= 0) {
        this.expenseDateGraphList.splice(index, 1, expenseDateGraph)
      } else {
        this.expenseDateGraphList.push(expenseDateGraph)
      }
    }
  },
  async mounted () {
    const expenseDateGraphList = await expenseDateGraphApi.getExpenseDateGraphList()
    this.expenseDateGraphList = [
      ...expenseDateGraphList,
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
    <ExpenseDateGraphCreateDialog
        @expenseDateGraphCreated="setToExpenseDateGraphList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="expenseDateGraphList"
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
  <ExpenseDateGraphPatchDialog
      :isOpen="editDialog.isOpen"
      :expenseDateGraphId="editDialog.expenseDateGraphId"
      @closeDialog="closeEditDialog"
      @expenseDateGraphPatched="setToExpenseDateGraphList($event)"
  />
</template>

<style scoped>
</style> 
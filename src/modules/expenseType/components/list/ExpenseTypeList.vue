<script>
import * as expenseTypeApi from '../../api'
import ExpenseTypePatchDialog from '../patchDialog/ExpenseTypePatchDialog.vue'
import ExpenseTypeCreateDialog from '../createDialog/ExpenseTypeCreateDialog.vue'

export default {
  components: { ExpenseTypeCreateDialog, ExpenseTypePatchDialog },
  data: () => ({
    title: 'Список типов затрат',
    editDialog: {
      isOpen: false,
      expenseTypeId: null,
    },
    expenseTypeList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Кратное наименование', key: 'shortName' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (expenseTypeId) {
      this.editDialog = {
        isOpen: true,
        expenseTypeId: expenseTypeId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        expenseTypeId: null,
      }
    },
    setToExpenseTypeList (expenseType) {
      const index = this.expenseTypeList.findIndex(u => u.id === expenseType.id)
      if (index >= 0) {
        this.expenseTypeList.splice(index, 1, expenseType)
      } else {
        this.expenseTypeList.push(expenseType)
      }
    }
  },
  async mounted () {
    const expenseTypeList = await expenseTypeApi.getExpenseTypeList()
    this.expenseTypeList = [
      ...expenseTypeList,
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
    <ExpenseTypeCreateDialog
        @expenseTypeCreated="setToExpenseTypeList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="expenseTypeList"
      fixed-header
      style="height: calc(100vh - 48px)"
      :footer-props="{
        itemsPerPageText: 'Элементов на странице:',
        itemsPerPageAllText: 'Все',
        itemsPerPage: -1
      }"
  >
    <template #item.actions="{ item }">
      <v-btn variant="text" icon @click="openEditDialog(item.id)">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>
  </v-data-table>
  <ExpenseTypePatchDialog
      :isOpen="editDialog.isOpen"
      :expenseTypeId="editDialog.expenseTypeId"
      @closeDialog="closeEditDialog"
      @expenseTypePatched="setToExpenseTypeList($event)"
  />
</template>

<style scoped>
</style>
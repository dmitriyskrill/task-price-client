<script>
import * as tableColumnChildApi from '../../api'
import TableColumnChildPatchDialog from '../patchDialog/TableColumnChildPatchDialog.vue'
import TableColumnChildCreateDialog from '../createDialog/TableColumnChildCreateDialog.vue'

export default {
  components: { TableColumnChildCreateDialog, TableColumnChildPatchDialog },
  data: () => ({
    title: 'Список вложенных колонок',
    editDialog: {
      isOpen: false,
      tableColumnChildId: null,
    },
    tableColumnChildList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Ширина в процентах', key: 'widthPercent' },
      { title: 'Ключ', key: 'key' },
      { title: 'Всплывающая подсказка', key: 'tooltipInfo' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    async postTableColumnChildFromOldDb () {
      await tableColumnChildApi.postTableColumnChildFromOldDb()
    },
    openEditDialog (tableColumnChildId) {
      this.editDialog = {
        isOpen: true,
        tableColumnChildId: tableColumnChildId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        tableColumnChildId: null,
      }
    },
    setToTableColumnChildList (tableColumnChild) {
      const index = this.tableColumnChildList.findIndex(u => u.id === tableColumnChild.id)
      if (index >= 0) {
        this.tableColumnChildList.splice(index, 1, tableColumnChild)
      } else {
        this.tableColumnChildList.push(tableColumnChild)
      }
    }
  },
  async mounted () {
    const tableColumnChildList = await tableColumnChildApi.getTableColumnChildList()
    this.tableColumnChildList = [
      ...tableColumnChildList,
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
    <v-btn
        v-tooltip:bottom="'Создать из старой базы данных'"
        variant="text"
        icon
        @click="postTableColumnChildFromOldDb"
    >
      <v-icon>mdi-database-arrow-down</v-icon>
    </v-btn>
    <TableColumnChildCreateDialog
        @tableColumnChildCreated="setToTableColumnChildList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="tableColumnChildList"
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
  <TableColumnChildPatchDialog
      :isOpen="editDialog.isOpen"
      :tableColumnChildId="editDialog.tableColumnChildId"
      @closeDialog="closeEditDialog"
      @tableColumnChildPatched="setToTableColumnChildList($event)"
  />
</template>

<style scoped>
</style>
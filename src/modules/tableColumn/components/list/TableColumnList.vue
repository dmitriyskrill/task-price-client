<script>
import * as tableColumnApi from '../../api'
import TableColumnPatchDialog from '../patchDialog/TableColumnPatchDialog.vue'
import TableColumnCreateDialog from '../createDialog/TableColumnCreateDialog.vue'

export default {
  components: { TableColumnCreateDialog, TableColumnPatchDialog },
  data: () => ({
    title: 'Список колонок',
    editDialog: {
      isOpen: false,
      tableColumnId: null,
    },
    tableColumnList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'Ключ', key: 'key' },
      { title: 'Ширина', key: 'width' },
      { title: 'Тип ячейки', key: 'cellType' },
      { title: 'Сортировка', key: 'sort' },
      { title: 'Показать', key: 'isShow' },
      { title: 'Зафиксировать', key: 'isFixed' },
      { title: 'Доступна для редактирования', key: 'isEditable' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    async postTableColumnFromOldDb () {
      await tableColumnApi.postTableColumnFromOldDb()
    },
    openEditDialog (tableColumnId) {
      this.editDialog = {
        isOpen: true,
        tableColumnId: tableColumnId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        tableColumnId: null,
      }
    },
    setToTableColumnList (tableColumn) {
      const index = this.tableColumnList.findIndex(u => u.id === tableColumn.id)
      if (index >= 0) {
        this.tableColumnList.splice(index, 1, tableColumn)
      } else {
        this.tableColumnList.push(tableColumn)
      }
    }
  },
  async mounted () {
    const tableColumnList = await tableColumnApi.getTableColumnList()
    this.tableColumnList = [
      ...tableColumnList,
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
        @click="postTableColumnFromOldDb"
    >
      <v-icon>mdi-database-arrow-down</v-icon>
    </v-btn>
    <TableColumnCreateDialog
        @tableColumnCreated="setToTableColumnList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="tableColumnList"
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
  <TableColumnPatchDialog
      :isOpen="editDialog.isOpen"
      :tableColumnId="editDialog.tableColumnId"
      @closeDialog="closeEditDialog"
      @tableColumnPatched="setToTableColumnList($event)"
  />
</template>

<style scoped>
</style>
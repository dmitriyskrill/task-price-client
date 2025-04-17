<script>
import * as tableColumnGroupApi from '../../api'
import TableColumnGroupPatchDialog from '../patchDialog/TableColumnGroupPatchDialog.vue'
import TableColumnGroupCreateDialog from '../createDialog/TableColumnGroupCreateDialog.vue'

export default {
  components: { TableColumnGroupCreateDialog, TableColumnGroupPatchDialog },
  data: () => ({
    title: 'Список групп колонок',
    editDialog: {
      isOpen: false,
      tableColumnGroupId: null,
    },
    tableColumnGroupList: [],
    headers: [
      { title: 'Наименование', key: 'name' },
      { title: 'В корзине', key: 'isTrash' },
      { key: 'actions' }
    ],
  }),
  methods: {
    async postTableColumnGroupFromOldDb () {
      await tableColumnGroupApi.postTableColumnGroupFromOldDb()
    },
    openEditDialog (tableColumnGroupId) {
      this.editDialog = {
        isOpen: true,
        tableColumnGroupId: tableColumnGroupId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        tableColumnGroupId: null,
      }
    },
    setToTableColumnGroupList (tableColumnGroup) {
      const index = this.tableColumnGroupList.findIndex(u => u.id === tableColumnGroup.id)
      if (index >= 0) {
        this.tableColumnGroupList.splice(index, 1, tableColumnGroup)
      } else {
        this.tableColumnGroupList.push(tableColumnGroup)
      }
    }
  },
  async mounted () {
    const tableColumnGroupList = await tableColumnGroupApi.getTableColumnGroupList()
    this.tableColumnGroupList = [
      ...tableColumnGroupList,
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
        @click="postTableColumnGroupFromOldDb"
    >
      <v-icon>mdi-database-arrow-down</v-icon>
    </v-btn>
    <TableColumnGroupCreateDialog
        @tableColumnGroupCreated="setToTableColumnGroupList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="tableColumnGroupList"
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
  <TableColumnGroupPatchDialog
      :isOpen="editDialog.isOpen"
      :tableColumnGroupId="editDialog.tableColumnGroupId"
      @closeDialog="closeEditDialog"
      @tableColumnGroupPatched="setToTableColumnGroupList($event)"
  />
</template>

<style scoped>
</style>
<script lang="js">
import * as tableColumnGroupApi from '../api'

export default {
  components: {},
  data: () => ({
    search: '',
    tableColumnGroupList: [],
    headers: [{
      align: 'start',
      key: 'key',
      sortable: false,
      title: 'Ключ',
    },

      { key: 'tableColumnList', title: 'Колонки' },]

  }),
  methods: {
    async getTableColumnGroupList () {
      this.tableColumnGroupList = await tableColumnGroupApi.getTableColumnGroupList()
    }
  },
}


</script>

<template>
  <v-data-table
      :headers="headers"
      :items="tableColumnGroupList"
      :search="search"
      :multi-sort="true"
      items-per-page="-1"
  >

  </v-data-table>
</template>

<style scoped>

</style>
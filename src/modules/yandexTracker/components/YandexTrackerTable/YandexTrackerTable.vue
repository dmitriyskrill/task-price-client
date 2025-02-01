<script>

export default {
  data: () => ({
    search: '',
    headers: [
      {
        align: 'start',
        key: 'key',
        sortable: false,
        title: 'Ключ',
      },

      { key: 'hours', title: 'Часы' },
      { key: 'summary', title: 'Наименование' },
      { key: 'originalEstimation', title: 'План' },
      { key: 'spent', title: 'Факт' },
      { key: 'workLogs', title: 'Отработанное время' },
    ],
  }),
  props: ['issueList']
}


</script>

<template>
  <v-card
      title="Nutrition"
      flat
  >
    <template v-slot:text>
      <v-text-field
          v-model="search"
          label="Search"
          prepend-inner-icon="mdi-magnify"
          variant="outlined"
          hide-details
          single-line
      ></v-text-field>
    </template>

    <v-data-table
        :headers="headers"
        :items="issueList"
        :search="search"
    ></v-data-table>
  </v-card>
</template>

<style scoped>

</style>
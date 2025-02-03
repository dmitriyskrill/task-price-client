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
      { key: 'originalEstimationHours', title: 'Первый план' },
      { key: 'estimationHours', title: 'План' },
      { key: 'spentHours', title: 'Факт' },
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
    >
      <template v-slot:item.workLogs="{ item }">
        <v-row
            no-gutters
            v-for="workLog in item.workLogs"
            :key="workLog.id"
        >
          <v-col no-gutters>{{ workLog.durationHours}}ч</v-col>
          <v-col
              no-gutters
          >
            {{workLog.comment}}
          </v-col>

        </v-row>
      </template>
    </v-data-table>
  </v-card>
</template>

<style scoped>

</style>
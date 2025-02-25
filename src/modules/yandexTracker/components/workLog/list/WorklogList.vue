<script>

import dayjs from 'dayjs'

export default {
  data: () => ({
    search: '',
    headers: [
      { key: 'index', title: '№' },
      { key: 'durationHours', title: 'Часы' },
      { key: 'comment', title: 'Комментарий' },
      { key: 'issueInfo', title: 'Задача' },
      { key: 'start', title: 'Старт' },
      { key: 'createdAt', title: 'Дата создания' },
      { key: 'createdByInfo', title: 'Кем создано' },

      { key: 'updatedAt', title: 'Дата изменения' },
      { key: 'updatedById', title: 'Кем изменено' },
    ],
  }),
  props: ['worklogList'],
  computed: {
    mappedWorklogList(){
      return this.worklogList.map(worklog=> ({
        ...worklog,
        createdById: worklog.createdBy.id,
        updatedById: worklog.updatedBy.id,
        issueInfo: this.issueInfo(worklog.issue),
        createdByInfo: this.displayName(worklog.createdBy)
      }))
    }
  },
  methods: {
    issueInfo(issue){
      return issue.key + ':' + issue.display
    },
    displayName (user) {
      return user.display || 'Не указан'
    },
    dateTime (date) {
      return dayjs(date).format('DD.MM.YYYY HH:mm')
    }
  }
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
        :items="mappedWorklogList"
        :search="search"
        :multi-sort="true"
        items-per-page="-1"
    >
      <template #item.index="{ index }">
        {{ index + 1 }}
      </template>
      <template #item.issue="{ item }">
        {{ issueInfo(item.issue) }}
      </template>
      <template #item.createdById="{ item }">
        {{ displayName(item.createdBy) }}
      </template>
      <template #item.updatedById="{ item }">
        {{ displayName(item.updatedBy) }}
      </template>
      <template #item.createdAt="{ item }">
        {{ dateTime(item.createdAt) }}
      </template>
      <template #item.updatedAt="{ item }">
        {{ dateTime(item.updatedAt) }}
      </template>
      <template #item.start="{ item }">
        {{ dateTime(item.start) }}
      </template>


    </v-data-table>
  </v-card>
</template>

<style scoped>

</style>
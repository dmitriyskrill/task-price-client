<script lang="js">

import { ref } from 'vue'
import * as yandexTrackerApi from '../api'
import YandexTrackerTable from '../components/issue/list/YandexTrackerTable.vue'

export default {
  components: {
    YandexTrackerTable,
  },
  emits: ['toggleTheme'],
  props: ['theme'],
  data: () => ({
    issueId: 'DEVELOPMENT-164',
    issueList: []
  }),
  methods: {
    async getMySelf () {
      await yandexTrackerApi.getMySelf()
    },
    async getIssueWorklogByIssueId () {
      await yandexTrackerApi.getIssueWorklogByIssueId(this.issueId)
    },
    async getIssueList () {
      this.issueList = await yandexTrackerApi.getIssueList()
    },
    async getIssueById () {
      await yandexTrackerApi.getIssueById(this.issueId)
    }

  },
  setup () {
    const drawer = ref(true)

    return { drawer }
  },
}



</script>

<template>
  <v-text-field
      v-model="issueId"
      label="Issue ID"
  />
  <v-btn @click="getMySelf()">getMySelf</v-btn>
  <v-btn @click="getIssueList()">getIssueList</v-btn>
  <v-btn @click="getIssueById()">getIssueById</v-btn>
  <v-btn @click="getIssueWorklogByIssueId()">getIssueWorklogByIssueId</v-btn>
  <YandexTrackerTable
      :issueList="issueList"
  />
</template>

<style scoped>

</style>
<script lang="js">

import NavBarLinks from '@/components/NavBarLinks.vue'
import duration from 'dayjs/plugin/duration'
import dayjs from 'dayjs'
import { ref } from 'vue'
import YandexTrackerTable from '@/components/yandex-tracker/YandexTrackerTable/YandexTrackerTable.vue'
import axios from 'axios'

export default {
  components: {
    YandexTrackerTable,
    NavBarLinks,
  },
  emits: ['toggleTheme'],
  props: ['theme'],
  data: () => ({
    issueId: 'DEVELOPMENT-164',
    issueList: []
  }),
  methods: {
    async getMySelf () {
      await fetch('http://localhost:3045/api/yandexTracker/myself')
    },

    async getIssueList () {
      const response = await axios.get(`http://localhost:3045/api/yandexTracker/issues/list`, {
        params: { keys: ['DEVELOPMENT-164', 'DEVELOPMENT-159'] }
      })
      console.log(response)
      // this.issueList = list
      this.issueList = response.data

    },

    async getIssueById () {
      if (!this.issueId) return
      await fetch(`http://localhost:3045/api/yandexTracker/issues/byIssueId/${this.issueId}`)
    },

    async getIssueWorklogByIssueId () {
      if (!this.issueId) return
      const response = await axios.get(`http://localhost:3045/api/yandexTracker/issues/worklog/byIssueId/${this.issueId}`, {

      })
      const list = data.map(worklog => {
        const someData = dayjs.duration(worklog.duration)
        return {
          ...worklog,
          hours: someData?.$d.hours,
        }
      })

    }
  },
  setup () {
    const drawer = ref(true)

    return { drawer }
  },
}

dayjs.extend(duration)


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
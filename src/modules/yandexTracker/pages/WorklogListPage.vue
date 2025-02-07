<script lang="js">

import * as yandexTrackerApi from '../api'
import WorklogList from '@/modules/yandexTracker/components/workLog/list/WorklogList.vue'

export default {
  components: {
    WorklogList
  },
  data: () => ({
    worklogList: []
  }),
  methods: {
    async getWorklogList () {
      this.worklogList = await yandexTrackerApi.getWorklogList()
    },

  },
}


</script>

<template>
  <v-btn @click="getWorklogList()">getWorklogList</v-btn>
  <WorklogList
      :worklogList="worklogList"
  />
</template>

<style scoped>

</style>
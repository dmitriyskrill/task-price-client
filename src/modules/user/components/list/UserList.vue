<script>

import * as userApi from '../../api'

export default {
  data: () => ({
    userList: [],
    headers: [
      { title: 'Имя', key: 'name' },
      { title: 'Фамилия', key: 'surname' },
      { title: 'Отчество', key: 'patronymic' },
      { title: 'Почта', key: 'email' },
      { title: 'Логин', key: 'login' },
    ],
  }),
  async mounted () {
    this.userList = await userApi.getUserList()
  }

}
</script>

<template>
  <v-data-table
      :headers="headers"
      :items="userList"
  />
</template>

<style scoped>

</style>
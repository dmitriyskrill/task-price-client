<script>
import * as userApi from '../../api'
import UserPatchDialog from '../patchDialog/UserPatchDialog.vue'
import UserCreateDialog from '../createDialog/UserCreateDialog.vue'

export default {
  components: { UserCreateDialog, UserPatchDialog },
  data: () => ({
    editDialog: {
      isOpen: false,
      userId: null,
    },
    userList: [],
    headers: [
      { title: 'Имя', key: 'name' },
      { title: 'Фамилия', key: 'surname' },
      { title: 'Отчество', key: 'patronymic' },
      { title: 'Почта', key: 'email' },
      { key: 'actions' }
    ],
  }),
  methods: {
    openEditDialog (userId) {
      this.editDialog = {
        isOpen: true,
        userId: userId,
      }
    },
    closeEditDialog () {
      this.editDialog = {
        isOpen: false,
        userId: null,
      }
    },
    setToUserList (user) {
      const index = this.userList.findIndex(u => u.id === user.id)
      if (index >= 0) {
        this.userList.splice(index, 1, user)
      } else {
        this.userList.push(user)
      }
    }
  },
  async mounted () {
    const userList = await userApi.getUserList()
    this.userList = [
      ...userList,
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
    <h3 class="mx-10">Список пользователей</h3>
    <v-spacer/>
    <UserCreateDialog
        @userCreated="setToUserList($event)"
    />
  </v-app-bar>
  <v-data-table
      density="compact"
      :headers="headers"
      :items="userList"
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
  <UserPatchDialog
      :isOpen="editDialog.isOpen"
      :userId="editDialog.userId"
      @closeDialog="closeEditDialog"
      @userPatched="setToUserList($event)"
  />
</template>

<style scoped>
</style>
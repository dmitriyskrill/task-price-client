<template>
  <v-dialog v-model="dialog" persistent max-width="500px" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          v-tooltip:bottom="'Создать пользователя'"
          v-bind="{ ...activatorProps }"
          variant="text"
          icon
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6">Создать пользователя</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="user.surname"
              label="Фамилия"
              :rules="[]"
              clearable
          />
          <v-text-field
              v-model="user.name"
              label="Имя"
              :rules="[]"
              clearable
          />
          <v-text-field
              v-model="user.patronymic"
              label="Отчество"
              clearable
          />
          <v-text-field
              v-model="user.email"
              label="Email"
              :rules="[required, emailRule]"
              clearable
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createUser">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as userApi from '../../api'

export default {
  name: 'UserCreateDialog',
  props: [],
  emits: ['userCreated'],
  data: () => ({
    dialog: false,
    valid: false,
    user: {
      surname: '',
      name: '',
      patronymic: '',
      email: '',
    },
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  methods: {
    async createUser () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const createdUser = await userApi.postUser(this.user)
      if (createdUser.id) {
        this.$emit('userCreated', createdUser)
        this.closeDialog()
      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

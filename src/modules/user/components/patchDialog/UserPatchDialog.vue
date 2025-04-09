<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать пользователя</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="user.surname"
              label="Фамилия"
              :rules="[]"
              clearable
              :append-icon="changedFields.surname ? 'mdi-pencil' : ''"
              @input="onFieldChange('surname')"
          />
          <v-text-field
              v-model="user.name"
              label="Имя"
              :rules="[]"
              clearable
              :append-icon="changedFields.name ? 'mdi-pencil' : ''"
              @input="onFieldChange('name')"
          />
          <v-text-field
              v-model="user.patronymic"
              label="Отчество"
              clearable
              :append-icon="changedFields.patronymic ? 'mdi-pencil' : ''"
              @input="onFieldChange('patronymic')"
          />
          <v-text-field
              v-model="user.email"
              label="Email"
              :rules="[required, emailRule]"
              clearable
              :append-icon="changedFields.email ? 'mdi-pencil' : ''"
              @input="onFieldChange('email')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchUser">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as userApi from '../../api'

export default {
  name: 'UserPatchDialog',
  props: ['userId', 'isOpen'],
  emits: ['closeDialog', 'userPatched'],
  data: () => ({
    valid: false,
    user: {
      surname: '',
      name: '',
      patronymic: '',
      email: '',
    },
    originalUser: {},
    changedFields: {},
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async userId (value) {
      if (value) {
        await this.getUser()
      }
    }
  },
  methods: {
    async getUser () {
      if (this.userId) {
        const data = await userApi.getUserById({ id: this.userId })
        this.user = { ...data }
        this.originalUser = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.user[field] !== this.originalUser[field]
    },
    resetChanges () {
      this.user = { ...this.originalUser }
      this.changedFields = {}
    },
    async patchUser () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedUser = await userApi.patchUserById({
        id: this.userId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.user[key]
          return acc
        }, {})
      })
      if (patchedUser.id) {
        this.$emit('userPatched', patchedUser)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

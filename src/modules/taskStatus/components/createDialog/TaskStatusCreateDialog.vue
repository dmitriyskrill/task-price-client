<template>
  <v-dialog v-model="dialog" persistent max-width="500px" scrollable>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
          v-tooltip:bottom="title"
          v-bind="{ ...activatorProps }"
          variant="text"
          icon
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h6">{{ title }}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-model="taskStatus.shortName"
              label="Краткое наименование"
              :rules="[]"
              clearable
          />
          <v-text-field
              v-model="taskStatus.name"
              label="Наименование"
              :rules="[]"
              clearable
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTaskStatus">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskStatusApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'TaskStatusCreateDialog',
  props: [],
  emits: ['taskStatusCreated'],
  data: () => ({
    title: 'Создать статус задачи',
    dialog: false,
    valid: false,
    taskStatus: {
      shortName: '',
      name: '',
    },
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  methods: {
    async createTaskStatus () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return
      const createdTaskStatus = await taskStatusApi.postTaskStatus({
        ...this.taskStatus,
        ownerId
      })

      if (createdTaskStatus.id) {
        this.$emit('taskStatusCreated', createdTaskStatus)
        this.closeDialog()

      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

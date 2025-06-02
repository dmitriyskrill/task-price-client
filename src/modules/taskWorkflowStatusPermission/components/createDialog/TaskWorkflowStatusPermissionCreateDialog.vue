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
          <v-select
              label="Сущность (Entity)"
              v-model="taskWorkflowStatusPermission.entity"
              :items="entityTypeList"
              :rules="[required]"
          />

          <v-select
              label="Операция (Operation)"
              v-model="taskWorkflowStatusPermission.operation"
              :items="operationTypeList"
              :rules="[required]"
          />

          <v-select
              label="Task Workflow Status"
              v-model="taskWorkflowStatusPermission.taskWorkflowStatusId"
              :items="taskWorkflowStatusList"
              item-value="id"
              item-title="label"
              :rules="[required]"
          />

          <v-checkbox
              v-model="taskWorkflowStatusPermission.isPlan"
              label="Это план (isPlan)"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createTaskWorkflowStatusPermission">
          Создать
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as taskWorkflowStatusPermissionApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'
import { taskWorkflowStatusService } from '@/modules/taskWorkflowStatus'
import {
  EntityType,
  OperationType,
  entityTypeList,
  operationTypeList
} from '../../constants'

export default defineComponent({
  name: 'TaskWorkflowStatusPermissionCreateDialog',
  emits: ['taskWorkflowStatusPermissionCreated'],
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  data () {
    return {
      title: 'Создать разрешение на статус workflow',
      dialog: false,
      valid: false,
      taskWorkflowStatusPermission: {
        entity: null,
        operation: null,
        isPlan: false,
        taskWorkflowStatusId: null
      },
      taskWorkflowStatusList: [],
      entityTypeList,
      operationTypeList,
      required: (v: any) => !!v || 'Обязательное поле'
    }
  },
  methods: {
    async createTaskWorkflowStatusPermission () {
      const form = this.$refs.form as any
      if (!await form.validate()) return

      const ownerId = this.currentUserStore?.user?.id
      if (!ownerId) return

      const created = await taskWorkflowStatusPermissionApi.postTaskWorkflowStatusPermission({
        ...this.taskWorkflowStatusPermission,
        ownerId
      })

      if (created?.id) {
        this.$emit('taskWorkflowStatusPermissionCreated', created)
        this.closeDialog()
      }
    },
    async getRelations () {
      this.taskWorkflowStatusList = (await taskWorkflowStatusService.getTaskWorkflowStatusList())
          .map(item => ({
            ...item,
            label: `${item.taskWorkflow?.name} - ${item.taskStatus?.name}`
          }))
    },
    closeDialog () {
      this.dialog = false
    }
  },
  async beforeMount () {
    await this.getRelations()
  }
})
</script>

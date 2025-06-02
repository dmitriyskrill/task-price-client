<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать разрешение</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-select
              label="Сущность (Entity)"
              v-model="taskWorkflowStatusPermission.entity"
              :items="entityTypeList"
              :rules="[required]"
              :append-icon="changedFields.entity ? 'mdi-pencil' : ''"
              @update:model-value="onFieldChange('entity')"
          />

          <v-select
              label="Операция (Operation)"
              v-model="taskWorkflowStatusPermission.operation"
              :items="operationTypeList"
              :rules="[required]"
              :append-icon="changedFields.operation ? 'mdi-pencil' : ''"
              @update:model-value="onFieldChange('operation')"
          />

          <v-select
              label="Task Workflow Status"
              v-model="taskWorkflowStatusPermission.taskWorkflowStatusId"
              :items="taskWorkflowStatusList"
              item-value="id"
              item-title="label"
              :rules="[required]"
              :append-icon="changedFields.taskWorkflowStatusId ? 'mdi-pencil' : ''"
              @update:model-value="onFieldChange('taskWorkflowStatusId')"
          />

          <v-checkbox
              label="Это план (isPlan)"
              v-model="taskWorkflowStatusPermission.isPlan"
              :append-icon="changedFields.isPlan ? 'mdi-pencil' : ''"
              @update:model-value="onFieldChange('isPlan')"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskWorkflowStatusPermission">
          Изменить
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import * as taskWorkflowStatusPermissionApi from '../../api'
import { taskWorkflowStatusService } from '@/modules/taskWorkflowStatus'
import {
  EntityType,
  OperationType,
  entityTypeList,
  operationTypeList
} from '../../constants'

export default defineComponent({
  name: 'TaskWorkflowStatusPermissionPatchDialog',
  props: ['taskWorkflowStatusPermissionId', 'isOpen'],
  emits: ['closeDialog', 'taskWorkflowStatusPermissionPatched'],
  data () {
    return {
      valid: false,
      taskWorkflowStatusPermission: {
        entity: null,
        operation: null,
        isPlan: false,
        taskWorkflowStatusId: null
      },
      originalTaskWorkflowStatusPermission: {},
      changedFields: {},
      taskWorkflowStatusList: [],
      entityTypeList,
      operationTypeList,
      required: (v: any) => !!v || 'Обязательное поле'
    }
  },
  computed: {
    isChanged () {
      return Object.values(this.changedFields).some(Boolean)
    }
  },
  watch: {
    async taskWorkflowStatusPermissionId (value) {
      if (value) {
        await this.getTaskWorkflowStatusPermission()
      }
    }
  },
  methods: {
    async getTaskWorkflowStatusPermission () {
      const data = await taskWorkflowStatusPermissionApi.getTaskWorkflowStatusPermissionById({ id: this.taskWorkflowStatusPermissionId })
      this.taskWorkflowStatusPermission = {
        entity: data.entity,
        operation: data.operation,
        isPlan: data.isPlan,
        taskWorkflowStatusId: data.taskWorkflowStatusId
      }
      this.originalTaskWorkflowStatusPermission = { ...this.taskWorkflowStatusPermission }
      this.changedFields = {}
    },
    onFieldChange (field: string) {
      this.changedFields[field] = this.taskWorkflowStatusPermission[field] !== this.originalTaskWorkflowStatusPermission[field]
    },
    resetChanges () {
      this.taskWorkflowStatusPermission = { ...this.originalTaskWorkflowStatusPermission }
      this.changedFields = {}
    },
    async patchTaskWorkflowStatusPermission () {
      if (!await (this.$refs.form as any).validate()) return

      const patchData = Object.keys(this.changedFields).reduce((acc, key) => {
        acc[key] = this.taskWorkflowStatusPermission[key]
        return acc
      }, {} as any)

      const result = await taskWorkflowStatusPermissionApi.patchTaskWorkflowStatusPermissionById({
        id: this.taskWorkflowStatusPermissionId,
        data: patchData
      })

      if (result?.id) {
        this.$emit('taskWorkflowStatusPermissionPatched', result)
      }
      this.closeDialog()
    },
    async getRelations () {
      this.taskWorkflowStatusList = (await taskWorkflowStatusService.getTaskWorkflowStatusList()).map(item => ({
        ...item,
        label: `${item.taskWorkflow?.name} - ${item.taskStatus?.name}`
      }))
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  },
  async mounted () {
    await this.getRelations()
  }
})
</script>

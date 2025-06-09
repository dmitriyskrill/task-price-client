<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать тип задачи</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="taskType[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-text-field
              v-for="numberField in numberFields"
              :key="numberField.key"
              v-model.number="taskType[numberField.key]"
              type="number"
              :label="numberField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[numberField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(numberField.key)"
          />
          <v-checkbox
              v-for="checkbox in checkboxes"
              :key="checkbox.key"
              :label="checkbox.text"
              v-model="taskType[checkbox.key]"
              :append-icon="changedFields[checkbox.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(checkbox.key)"
              :rules="[]"
          />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="resetChanges" :disabled="!isChanged">Сбросить</v-btn>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskType">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskTypeApi from '../../api'

export default {
  name: 'TaskTypePatchDialog',
  props: ['taskTypeId', 'isOpen'],
  emits: ['closeDialog', 'taskTypePatched'],
  data: () => ({
    valid: false,
    taskType: {},
    numberFields: [
      {
        key: 'defaultDayAdditionalFactor',
        text: 'Множитель для графиков по умолчанию'
      },
      {
        key: 'defaultDateAdditionalFactor',
        text: 'Множитель для графиков ДАТ по умолчанию'
      },
      {
        key: 'defaultProfitPercent',
        text: '% прибыли по умолчанию'
      },
      {
        key: 'defaultGeneralBusinessExpensesPercent',
        text: '% общехозяйственные по умолчанию'
      },
      {
        key: 'defaultUnforeseenExpensesPercent',
        text: '% непредвиденные по умолчанию'
      },
      {
        key: 'defaultVatPercent',
        text: '% НДС по умолчанию'
      },
      {
        key: 'fontSize',
        text: 'Величина шрифта в ЛЗК'
      },
      {
        key: 'fontWeight',
        text: 'Масса шрифта в ЛЗК'
      },
    ],
    textFields: [
      { key: 'name', text: 'Наименование' },
      { key: 'shortName', text: 'Краткое наименование' }
    ],
    checkboxes: [
      {
        text: 'Можно связывать с объектами',
        key: 'isCanConnectToObject'
      },
      {
        text: 'Показывать кнопку скрытия/показа детей в дереве задач',
        key: 'taskTreeIsShowChildBtn'
      },
      {
        text: 'Показывать кнопку добавления в дереве задач',
        key: 'taskTreeIsShowAddBtn'
      },
      {
        text: 'Открывается в виде отдельной ЛЗК',
        key: 'isOpenLikeMain'
      },
      {
        text: 'Может содержать затраты',
        key: 'isCanContainExpense'
      },
      {
        text: 'Показывать сводную информацию по графикам',
        key: 'isShowGraphInfo'
      },
      {
        text: 'Задача верхнего уровня',
        key: 'isTopLevel'
      },
      // {
      //   text: 'Ответственный обязателен',
      //   key: 'isResponsibleRequired'
      // },
      // {
      //   text: 'Статус, указанный по умолчанию в типе задачи, является приоритетным',
      //   key: 'isPriorityDefaultElementStatus'
      // },

    ],
    originalTaskType: {},
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
    async taskTypeId (value) {
      if (value) {
        await this.getTaskType()
      }
    }
  },
  methods: {
    async getTaskType () {
      if (this.taskTypeId) {
        const data = await taskTypeApi.getTaskTypeById({ id: this.taskTypeId })
        this.taskType = { ...data }
        this.originalTaskType = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.taskType[field] !== this.originalTaskType[field]
    },
    resetChanges () {
      this.taskType = { ...this.originalTaskType }
      this.changedFields = {}
    },
    async patchTaskType () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTaskType = await taskTypeApi.patchTaskTypeById({
        id: this.taskTypeId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.taskType[key]
          return acc
        }, {})
      })
      if (patchedTaskType.id) {
        this.$emit('taskTypePatched', patchedTaskType)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

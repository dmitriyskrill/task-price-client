<template>
  <v-dialog :model-value="isOpen" persistent max-width="500px" scrollable>
    <v-card>
      <v-card-title class="text-h6">Редактировать тип задачи</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
          <v-text-field
              v-for="textField in textFields"
              :key="textField.key"
              v-model="taskDayGraph[textField.key]"
              :label="textField.text"
              :rules="[]"
              clearable
              :append-icon="changedFields[textField.key] ? 'mdi-pencil' : ''"
              @input="onFieldChange(textField.key)"
          />
          <v-text-field
              v-for="numberField in numberFields"
              :key="numberField.key"
              v-model.number="taskDayGraph[numberField.key]"
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
              v-model="taskDayGraph[checkbox.key]"
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
        <v-btn :disabled="!valid || !isChanged" color="primary" @click="patchTaskDayGraph">Изменить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as taskDayGraphApi from '../../api'

export default {
  name: 'TaskDayGraphPatchDialog',
  props: ['taskDayGraphId', 'isOpen'],
  emits: ['closeDialog', 'taskDayGraphPatched'],
  data: () => ({
    valid: false,
    taskDayGraph: {},
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
    originalTaskDayGraph: {},
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
    async taskDayGraphId (value) {
      if (value) {
        await this.getTaskDayGraph()
      }
    }
  },
  methods: {
    async getTaskDayGraph () {
      if (this.taskDayGraphId) {
        const data = await taskDayGraphApi.getTaskDayGraphById({ id: this.taskDayGraphId })
        this.taskDayGraph = { ...data }
        this.originalTaskDayGraph = { ...data }
        this.changedFields = {}
      }
    },
    onFieldChange (field) {
      this.changedFields[field] = this.taskDayGraph[field] !== this.originalTaskDayGraph[field]
    },
    resetChanges () {
      this.taskDayGraph = { ...this.originalTaskDayGraph }
      this.changedFields = {}
    },
    async patchTaskDayGraph () {
      if (!await this.$refs.form.validate()) {
        return false
      }
      const patchedTaskDayGraph = await taskDayGraphApi.patchTaskDayGraphById({
        id: this.taskDayGraphId,
        data: Object.keys(this.changedFields).reduce((acc, key) => {
          acc[key] = this.taskDayGraph[key]
          return acc
        }, {})
      })
      if (patchedTaskDayGraph.id) {
        this.$emit('taskDayGraphPatched', patchedTaskDayGraph)
      }
      this.closeDialog()
    },
    closeDialog () {
      this.$emit('closeDialog')
    }
  }
}
</script>

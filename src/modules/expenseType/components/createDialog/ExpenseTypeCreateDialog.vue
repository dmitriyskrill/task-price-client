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
      <v-card-title class="text-h6">{{title}}</v-card-title>

      <v-card-text>
        <v-form ref="form" v-model="valid">
            <v-text-field
                v-model="expenseType.shortName"
                label="Краткое наименование"
                :rules="[]"
                clearable
            />
            <v-text-field
                v-model="expenseType.name"
                label="Наименование"
                :rules="[]"
                clearable
            />
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer/>
        <v-btn variant="text" @click="closeDialog">Отмена</v-btn>
        <v-btn :disabled="!valid" color="primary" @click="createExpenseType">Создать</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as expenseTypeApi from '../../api'
import { useCurrentUserStore } from '@/modules/auth'

export default {
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  name: 'ExpenseTypeCreateDialog',
  props: [],
  emits: ['expenseTypeCreated'],
  data: () => ({
    title: 'Создать тип затрат',
    dialog: false,
    valid: false,
    expenseType: {
      shortName: '',
      name: '',
    },
    required: v => !!v || 'Обязательное поле',
    emailRule: v => /.+@.+\..+/.test(v) || 'Некорректный email'
  }),
  methods: {
    async createExpenseType () {
      const ownerId = this.currentUserStore?.userId
      if (!await this.$refs.form.validate() || !ownerId) {
        return false
      }

      const createdExpenseType = await expenseTypeApi.postExpenseType({
        ...this.expenseType,
        ownerId
      })
      if (createdExpenseType.id) {
        this.$emit('expenseTypeCreated', createdExpenseType)
        this.closeDialog()
      }

    },
    closeDialog () {
      this.dialog = false
    }
  }
}
</script>

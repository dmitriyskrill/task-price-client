<script>
import { defineComponent } from 'vue'
import { useCurrentUserStore } from '@/modules/auth'

export default defineComponent({
  setup () {
    const currentUserStore = useCurrentUserStore()
    return { currentUserStore }
  },
  data: () => ({
    rail: true,
    subDrawer: true,
    activeLink: null,
    navLinkList: [
      {
        icon: 'mdi-chart-tree',
        title: 'Цена задачи',
        value: 'taskPrice',
        children: [
          {
            icon: 'mdi-account-multiple',
            title: 'Пользователи',
            value: 'userList',
            to: '/user/list',
          },
          {
            icon: 'mdi-view-column-outline',
            title: 'Группы колонок',
            value: 'tableColumnGroup',
            to: '/tableColumnGroup/list',
          },
          {
            icon: 'mdi-table-column',
            title: 'Колонки',
            value: 'tableColumn',
            to: '/tableColumn/list',
          },
          {
            icon: 'mdi-table-column',
            title: 'Вложенные колонки',
            value: 'tableColumnChild',
            to: '/tableColumnChild/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'Задачи',
            value: 'task',
            to: '/task/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'Типы задач',
            value: 'taskType',
            to: '/taskType/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'Статусы задач',
            value: 'taskStatus',
            to: '/taskStatus/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'Рабочие процессы задач',
            value: 'taskWorkflow',
            to: '/taskWorkflow/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'taskWorkflowStatus',
            value: 'taskWorkflowStatus',
            to: '/taskWorkflowStatus/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'taskWorkflowStatusPermission',
            value: 'taskWorkflowStatusPermission',
            to: '/taskWorkflowStatusPermission/list',
          },
          {
            icon: 'mdi-table-column',
            title: 'Единицы измерения',
            value: 'unit',
            to: '/unit/list',
          },
          {
            icon: 'mdi-chart-line',
            title: 'TaskDateGraph',
            value: 'taskDateGraph',
            to: '/taskDateGraph/list',
          },
          {
            icon: 'mdi-chart-line',
            title: 'TaskDayGraph',
            value: 'taskDayGraph',
            to: '/taskDayGraph/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'Затраты',
            value: 'expense',
            to: '/expense/list',
          },
          {
            icon: 'mdi-list-status',
            title: 'Тип затрат',
            value: 'expenseType',
            to: '/expenseType/list',
          },
          {
            icon: 'mdi-chart-line',
            title: 'ExpenseDateGraph',
            value: 'expenseDateGraph',
            to: '/expenseDateGraph/list',
          },
          {
            icon: 'mdi-chart-line',
            title: 'ExpenseDayGraph',
            value: 'expenseDayGraph',
            to: '/expenseDayGraph/list',
          },
        ]
      },
      {
        icon: 'mdi-timetable',
        title: 'Яндекс трекер',
        value: 'yandexTracker',
        children: [
          {
            icon: 'mdi-calendar-check',
            title: 'Задачи',
            value: 'issueList',
            to: '/yandexTracker/issue/list',
          },
          {
            icon: 'mdi-book-clock',
            title: 'Отработанное время',
            value: 'worklogList',
            to: '/yandexTracker/worklog/list',
          }
        ]
      }
    ]
  }),
  props: ['drawer', 'theme'],
  emits: ['update:drawer', 'toggleTheme'],
  methods: {
    setActiveLink (link) {
      if (link?.value === this.activeLink?.value) {
        this.activeLink = null
      } else {
        this.activeLink = link
      }

      this.subDrawer = true
    }
  },
  computed: {
    userEmail () {
      return this.currentUserStore?.user?.email || 'Гость'
    },
  }
})
</script>

<template>
  <v-navigation-drawer
      :model-value="drawer"
      @update:model-value="$emit('update:drawer', $event)"
      :rail="rail"
      :theme="theme"
  >
    <div class="d-flex flex-column fill-height">
      <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          :title="userEmail"
          nav
      />
      <v-divider></v-divider>
      <div class="flex-grow-1 overflow-y-auto">
        <v-list
            density="compact"
            nav
        >
          <v-list-item
              v-for="link  in navLinkList"
              :key="link.value"
              :prepend-icon="link.icon"
              :title="link.title"
              :value="link.value"
              :active="activeLink?.value === link.value"
              @click="setActiveLink(link)"
          />
        </v-list>
      </div>
      <v-divider></v-divider>
      <v-list-item
          nav
          @click="rail = false"
      >
        <template v-slot:prepend>
          <v-btn
              :icon="`mdi-chevron-${rail?'right':'left'}`"
              variant="text"
              @click.stop="rail = !rail"
          ></v-btn>
        </template>
        <template v-slot:append>
          <v-btn
              icon="mdi-close"
              variant="text"
              @click.stop="$emit('update:drawer', false)"
          ></v-btn>
        </template>
        <v-btn icon @click="$emit('toggleTheme')" variant="text">
          <v-icon>{{ theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
        </v-btn>
      </v-list-item>

    </div>
  </v-navigation-drawer>

  <v-navigation-drawer
      v-if="activeLink"
      :model-value="subDrawer && drawer"
      :theme="theme"
  >
    <v-list
        density="compact"
        nav
    >
      <v-list-item
          v-for="childLink  in activeLink.children"
          :key="childLink.value"
          :title="childLink.title"
          :value="childLink.value"
          :prepend-icon="childLink.icon"
          :to="childLink.to"
          exact
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
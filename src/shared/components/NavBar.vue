<script>
export default {
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
          }
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
  emits: ['update:drawer'],
  methods: {
    setActiveLink (link) {
      this.activeLink = link
      this.subDrawer = true
    }
  }
}
</script>

<template>
  <v-navigation-drawer
      :model-value="drawer"
      @update:model-value="$emit('update:drawer', $event)"
      :rail="rail"
      :theme="theme"
  >
    <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
        title="John Leider"
        nav
        @click="rail = false"
    >
      <template v-slot:append>
        <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
        ></v-btn>
      </template>
    </v-list-item>
    <v-divider></v-divider>
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
    <v-list-item
        :prepend-icon="subDrawer?'mdi-menu-close':'mdi-menu-open'"
        @click="subDrawer = !subDrawer"
    />
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
      />
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>

</style>
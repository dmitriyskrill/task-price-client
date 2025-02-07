import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/yandexTracker',
    name: 'yandexTracker',
    component: () => import('../pages/YandexTrackerPage.vue'),
    meta: {
      layout: Main
    }
  },
  {
    path: '/yandexTracker/issues',
    name: 'yandexTracker',
    component: () => import('../pages/YandexTrackerPage.vue'),
    meta: {
      layout: Main
    }
  },
  {
    path: '/yandexTracker/worklog',
    name: 'yandexTracker',
    component: () => import('../pages/WorklogListPage.vue'),
    meta: {
      layout: Main
    }
  },
]

export default routes
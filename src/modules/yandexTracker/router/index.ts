import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/yandexTracker',
    name: 'yandexTracker',
    component: () => import('../pages/YandexTrackerPage.vue'),
    meta: {
      layout: Main,
      authenticateIsRequired: true
    }
  },
  {
    path: '/yandexTracker/issue/list',
    name: 'yandexTrackerIssueList',
    component: () => import('../pages/YandexTrackerPage.vue'),
    meta: {
      layout: Main,
      authenticateIsRequired: true
    }
  },
  {
    path: '/yandexTracker/worklog/list',
    name: 'yandexTrackerWorklogList',
    component: () => import('../pages/WorklogListPage.vue'),
    meta: {
      layout: Main,
      authenticateIsRequired: true
    }
  },
]

export default routes
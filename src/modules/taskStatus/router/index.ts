import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskStatus/list',
    name: 'taskStatusList',
    component: () => import('../pages/TaskStatusListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
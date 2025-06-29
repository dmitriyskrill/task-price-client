import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskDayGraph/list',
    name: 'taskDayGraphList',
    component: () => import('../pages/TaskDayGraphListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskType/list',
    name: 'taskTypeList',
    component: () => import('../pages/TaskTypeListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
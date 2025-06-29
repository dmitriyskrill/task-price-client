import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskDateGraph/list',
    name: 'taskDateGraphList',
    component: () => import('../pages/TaskDateGraphListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes 
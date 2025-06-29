import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/task/list',
    name: 'taskList',
    component: () => import('../pages/TaskListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes 
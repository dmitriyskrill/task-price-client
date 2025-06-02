import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskWorkflowStatus/list',
    name: 'taskWorkflowStatusList',
    component: () => import('../pages/TaskWorkflowStatusListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
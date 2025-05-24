import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskWorkflow/list',
    name: 'taskWorkflowList',
    component: () => import('../pages/TaskWorkflowListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
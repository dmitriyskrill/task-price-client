import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/taskWorkflowStatusPermission/list',
    name: 'taskWorkflowStatusPermissionList',
    component: () => import('../pages/TaskWorkflowStatusPermissionListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
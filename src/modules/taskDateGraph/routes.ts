import Main from '@/shared/layouts/Main.vue'


export const taskDateGraphRoutes = [
  {
    path: '/taskDateGraph/list',
    name: 'taskDateGraphList',
    component: () => import('./pages/TaskDateGraphListPage.vue'),
    meta: {
      title: 'TaskDateGraph',
      authenticateIsRequired: true,
      layout: Main
    }
  }
] 
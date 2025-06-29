import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/expenseDayGraph/list',
    name: 'expenseDayGraphList',
    component: () => import('../pages/ExpenseDayGraphListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes 
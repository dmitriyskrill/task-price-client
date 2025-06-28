import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/expenseType/list',
    name: 'expenseTypeList',
    component: () => import('../pages/ExpenseTypeListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
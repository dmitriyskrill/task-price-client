import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/expense/list',
    name: 'expenseList',
    component: () => import('../pages/ExpenseListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes 
import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/expenseDateGraph/list',
    name: 'expenseDateGraphList',
    component: () => import('../pages/ExpenseDateGraphListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes 
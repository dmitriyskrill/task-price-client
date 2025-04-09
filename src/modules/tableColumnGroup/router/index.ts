import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/tableColumnGroup',
    name: 'tableColumnGroup',
    component: () => import('../pages/TableColumnGroupPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
  {
    path: '/tableColumnGroup/list',
    name: 'tableColumnGroup',
    component: () => import('../pages/TableColumnGroupListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  }
]

export default routes
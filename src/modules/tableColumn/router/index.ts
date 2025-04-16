import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/tableColumn/list',
    name: 'tableColumnList',
    component: () => import('../pages/TableColumnListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
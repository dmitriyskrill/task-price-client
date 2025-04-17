import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/tableColumnChild/list',
    name: 'tableColumnChildList',
    component: () => import('../pages/TableColumnChildListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
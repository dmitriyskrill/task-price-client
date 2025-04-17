import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/tableColumnGroup/list',
    name: 'tableColumnGroupList',
    component: () => import('../pages/TableColumnGroupListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/unit/list',
    name: 'unitList',
    component: () => import('../pages/unitListPage.vue'),
    meta: {
      authenticateIsRequired: true,
      layout: Main
    }
  },
]

export default routes
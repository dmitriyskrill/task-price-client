import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/user/list',
    name: 'userList',
    component: () => import('../pages/UserListPage.vue'),
    meta: {
      layout: Main
    }
  },
]

export default routes
import Auth from '@/shared/layouts/Auth.vue'

const routes = [
  {
    path: '/auth/login',
    name: 'authLogin',
    component: () => import('../pages/Login.vue'),
    meta: {
      layout: Auth
    }
  },
  {
    path: '/auth/register',
    name: 'authRegister',
    component: () => import('../pages/Register.vue'),
    meta: {
      layout: Auth
    }
  },
]

export default routes
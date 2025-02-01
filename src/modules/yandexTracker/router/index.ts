import Main from '@/shared/layouts/Main.vue'

const routes = [
  {
    path: '/yandexTracker',
    name: 'yandexTracker',
    component: () => import('../pages/YandexTracker.vue'),
    meta: {
      layout: Main
    }
  },
]

export default routes
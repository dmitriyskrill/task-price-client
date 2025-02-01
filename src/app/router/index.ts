import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../shared/layouts/Main.vue'
import { yandexTrackerRoutes } from '@/modules/yandexTracker'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue'),
      meta: {
        layout: Main
      }
    },
    ...yandexTrackerRoutes
  ]
})

export { router }
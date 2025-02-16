import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../shared/layouts/Main.vue'
import { yandexTrackerRoutes } from '@/modules/yandexTracker'
import { authRoutes, authService } from '@/modules/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue'),
      meta: {
        layout: Main,
        authenticateIsRequired: true
      }
    },
    { path: '/:pathMatch(.*)*', redirect: '/' }, //component: NotFound
    ...yandexTrackerRoutes,
    ...authRoutes
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach', authService.isAuthenticated(), to.meta)
  if (to.meta.authenticateIsRequired && !authService.isAuthenticated()) {
    next('/auth/login') // Перенаправляем на страницу входа
  } else {
    next() // Разрешаем навигацию
  }
})

export { router }
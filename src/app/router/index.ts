import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../shared/layouts/Main.vue'
import { yandexTrackerRoutes } from '@/modules/yandexTracker'
import { authRoutes, authService } from '@/modules/auth'
import { tableColumnGroupRoutes } from '@/modules/tableColumnGroup'
import { userRoutes } from '@/modules/user'


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
    ...tableColumnGroupRoutes,
    ...authRoutes,
    ...userRoutes
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.authenticateIsRequired && !authService.isAuthenticated()) {
    next('/auth/login') // Перенаправляем на страницу входа
  } else {
    next() // Разрешаем навигацию
  }
})

export { router }
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../../shared/layouts/Main.vue'
import { yandexTrackerRoutes } from '@/modules/yandexTracker'
import { authRoutes, authService } from '@/modules/auth'
import { userRoutes } from '@/modules/user'

import { unitRoutes } from '@/modules/unit'

import { tableColumnGroupRoutes } from '@/modules/tableColumnGroup'
import { tableColumnRoutes } from '@/modules/tableColumn'
import { tableColumnChildRoutes } from '@/modules/tableColumnChild'

import { taskTypeRoutes} from '@/modules/taskType'
import { taskStatusRoutes } from '@/modules/taskStatus'
import { taskWorkflowRoutes } from '@/modules/taskWorkflow'
import { taskWorkflowStatusRoutes } from '@/modules/taskWorkflowStatus'
import { taskWorkflowStatusPermissionRoutes } from '@/modules/taskWorkflowStatusPermission'
import { taskDateGraphRoutes } from '@/modules/taskDateGraph'
import { expenseTypeRoutes } from '@/modules/expenseType'
import { taskDayGraphRoutes } from '@/modules/taskDayGraph'
import { taskRoutes } from '@/modules/task'
import { expenseRoutes } from '@/modules/expense'
import { expenseDateGraphRoutes } from '@/modules/expenseDateGraph'
import { expenseDayGraphRoutes } from '@/modules/expenseDayGraph'

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

    ...authRoutes,
    ...userRoutes,
    ...unitRoutes,

    ...tableColumnGroupRoutes,
    ...tableColumnRoutes,
    ...tableColumnChildRoutes,

    ...taskRoutes,
    ...taskTypeRoutes,
    ...taskStatusRoutes,
    ...taskWorkflowRoutes,
    ...taskWorkflowStatusRoutes,
    ...taskWorkflowStatusPermissionRoutes,
    ...taskDateGraphRoutes,
    ...taskDayGraphRoutes,

    ...expenseTypeRoutes,
    ...expenseRoutes,
    ...expenseDateGraphRoutes,
    ...expenseDayGraphRoutes,
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
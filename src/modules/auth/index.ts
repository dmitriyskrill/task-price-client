import authRoutes from './router'
import { axiosWithAuth } from './api'
import * as authService from './service'
import { useCurrentUserStore } from './store/useCurrentUserStore'

export {
  authRoutes,
  axiosWithAuth,
  authService,
  useCurrentUserStore
}
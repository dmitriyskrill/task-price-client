import axios from 'axios'
import { errorCatch } from '@/shared/api/helper'
import { baseApiUrl } from '@/shared/api/constants'
import { removeFromStorage } from '@/modules/auth/api/helpers/removeFromStorage'
import { getNewTokens } from '@/modules/auth/api/service/getNewTokens'

const axiosWithAuth = axios.create({
  baseURL: baseApiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosWithAuth.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('access_token')
  if (config?.headers && accessToken) config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

// TODO Реализовать сохранение и автоматический повтор запросов, если они были в момент обновления токена

axiosWithAuth.interceptors.response.use(
  config => config,
  async error => {
    const originalRequest = error.config

    if (
      (error?.response?.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await getNewTokens()
        return axiosWithAuth.request(originalRequest)
      } catch (error) {
        if (
          errorCatch(error) === 'jwt expired' ||
          errorCatch(error) === 'Refresh token not passed'
        )
          removeFromStorage()
      }
    }

    throw error
  }
)

export { axiosWithAuth}

import { axiosForAuth } from '../axiosForAuth'
import type { IAuthResponse } from './types'
import { saveTokenStorage } from '../helpers/saveTokenStorage'

export async function getNewTokens () {
  const response = await axiosForAuth.post<IAuthResponse>(
    '/access-token',
    {},
    { withCredentials: true }
  )

  if (response.data.accessToken) saveTokenStorage(response.data.accessToken)

  return response
}

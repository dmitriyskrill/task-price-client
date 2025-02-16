import { removeFromStorage } from '../helpers/removeFromStorage'
import { axiosForAuth } from '../axiosForAuth'

export async function logout() {
  const response = await axiosForAuth.post('/logout')

  if (response.data) removeFromStorage()

  return response
}
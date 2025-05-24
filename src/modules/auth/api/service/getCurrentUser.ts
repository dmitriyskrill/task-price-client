import { axiosWithAuth } from '../axiosWithAuth'
import { useCurrentUserStore, User } from '../../store/useCurrentUserStore'

export async function getCurrentUser () {
  const response = await axiosWithAuth.get<User>(
    '/auth/currentUser',
  )

  const currentUserStore= useCurrentUserStore()
  currentUserStore.setUser(response.data as User)
  return response.data
}

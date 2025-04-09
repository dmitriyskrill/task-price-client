import { axiosWithAuth } from '@/modules/auth'

interface GetUserByIdProps {
  id: string
}

async function getUserById ({ id }: GetUserByIdProps) {
  try {
    const userList = await axiosWithAuth.get(`/user/${id}`)
    return userList.data
  } catch (e) {
    return null
  }

}

export { getUserById }
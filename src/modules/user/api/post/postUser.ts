import { axiosWithAuth } from '@/modules/auth'

async function postUser (data: any) {
  try {
    const userList = await axiosWithAuth.post(`/user`,data)
    return userList.data
  } catch (e) {
    return []
  }

}

export { postUser }
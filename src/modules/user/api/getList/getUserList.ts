import { axiosWithAuth } from '@/modules/auth'

async function getUserList () {
  try {
    const userList = await axiosWithAuth.get(`/user/list`)
    return userList.data
  } catch (e) {
    return []
  }

}

export { getUserList }
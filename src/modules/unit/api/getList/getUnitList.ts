import { axiosWithAuth } from '@/modules/auth'
import { unitApiEndpoint } from '../const'
async function getUnitList () {
  try {
    const userList = await axiosWithAuth.get(`/${unitApiEndpoint}`)
    return userList.data
  } catch (e) {
    return []
  }

}

export { getUnitList }
import { axiosWithAuth } from '@/modules/auth'
import { tableColumnChildApiEndpoint } from '../const'
async function getTableColumnChildList () {
  try {
    const userList = await axiosWithAuth.get(`/${tableColumnChildApiEndpoint}`)
    return userList.data
  } catch (e) {
    return []
  }

}

export { getTableColumnChildList }
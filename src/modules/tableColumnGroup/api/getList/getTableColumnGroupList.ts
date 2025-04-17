import { axiosWithAuth } from '@/modules/auth'
import { tableColumnGroupApiEndpoint } from '../const'
async function getTableColumnGroupList () {
  try {
    const userList = await axiosWithAuth.get(`/${tableColumnGroupApiEndpoint}`)
    return userList.data
  } catch (e) {
    return []
  }

}

export { getTableColumnGroupList }
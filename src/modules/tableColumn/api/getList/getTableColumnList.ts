import { axiosWithAuth } from '@/modules/auth'
import { tableColumnApiEndpoint } from '../const'
async function getTableColumnList () {
  try {
    const userList = await axiosWithAuth.get(`/${tableColumnApiEndpoint}`)
    return userList.data
  } catch (e) {
    return []
  }

}

export { getTableColumnList }
import { axiosWithAuth } from '@/modules/auth'
import { tableColumnGroupApiEndpoint } from '../const'

interface GetTableColumnGroupByIdProps {
  id: string
}

async function getTableColumnGroupById ({ id }: GetTableColumnGroupByIdProps) {
  try {
    const userList = await axiosWithAuth.get(`/${tableColumnGroupApiEndpoint}/${id}`)
    return userList.data
  } catch (e) {
    return null
  }

}

export { getTableColumnGroupById }
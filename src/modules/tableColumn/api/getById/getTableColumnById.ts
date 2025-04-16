import { axiosWithAuth } from '@/modules/auth'
import { tableColumnApiEndpoint } from '../const'

interface GetTableColumnByIdProps {
  id: string
}

async function getTableColumnById ({ id }: GetTableColumnByIdProps) {
  try {
    const userList = await axiosWithAuth.get(`/${tableColumnApiEndpoint}/${id}`)
    return userList.data
  } catch (e) {
    return null
  }

}

export { getTableColumnById }
import { axiosWithAuth } from '@/modules/auth'
import { tableColumnChildApiEndpoint } from '../const'

interface GetTableColumnChildByIdProps {
  id: string
}

async function getTableColumnChildById ({ id }: GetTableColumnChildByIdProps) {
  try {
    const userList = await axiosWithAuth.get(`/${tableColumnChildApiEndpoint}/${id}`)
    return userList.data
  } catch (e) {
    return null
  }

}

export { getTableColumnChildById }
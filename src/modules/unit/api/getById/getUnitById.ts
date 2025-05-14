import { axiosWithAuth } from '@/modules/auth'
import { unitApiEndpoint } from '../const'

interface GetUnitByIdProps {
  id: string
}

async function getUnitById ({ id }: GetUnitByIdProps) {
  try {
    const userList = await axiosWithAuth.get(`/${unitApiEndpoint}/${id}`)
    return userList.data
  } catch (e) {
    return null
  }

}

export { getUnitById }
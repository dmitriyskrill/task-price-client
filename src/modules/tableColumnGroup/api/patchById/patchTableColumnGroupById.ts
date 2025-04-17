import { axiosWithAuth } from '@/modules/auth'
import { tableColumnGroupApiEndpoint } from '../const'

interface GetUserByIdProps {
  id: string
  data: any
}

async function patchTableColumnGroupById ({ id, data }: GetUserByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${tableColumnGroupApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTableColumnGroupById }
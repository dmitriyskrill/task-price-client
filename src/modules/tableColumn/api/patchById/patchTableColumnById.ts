import { axiosWithAuth } from '@/modules/auth'
import { tableColumnApiEndpoint } from '../const'

interface GetUserByIdProps {
  id: string
  data: any
}

async function patchTableColumnById ({ id, data }: GetUserByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${tableColumnApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTableColumnById }
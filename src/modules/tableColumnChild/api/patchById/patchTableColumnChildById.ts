import { axiosWithAuth } from '@/modules/auth'
import { tableColumnChildApiEndpoint } from '../const'

interface GetUserByIdProps {
  id: string
  data: any
}

async function patchTableColumnChildById ({ id, data }: GetUserByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${tableColumnChildApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTableColumnChildById }
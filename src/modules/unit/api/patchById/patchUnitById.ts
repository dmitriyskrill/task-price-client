import { axiosWithAuth } from '@/modules/auth'
import { unitApiEndpoint } from '../const'

interface GetUserByIdProps {
  id: string
  data: any
}

async function patchUnitById ({ id, data }: GetUserByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${unitApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchUnitById }
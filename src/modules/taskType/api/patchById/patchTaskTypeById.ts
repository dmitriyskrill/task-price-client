import { axiosWithAuth } from '@/modules/auth'
import { taskTypeApiEndpoint } from '../const'

interface GetTaskTypeByIdProps {
  id: string
  data: any
}

async function patchTaskTypeById ({ id, data }: GetTaskTypeByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskTypeApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskTypeById }
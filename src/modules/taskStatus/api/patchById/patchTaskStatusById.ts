import { axiosWithAuth } from '@/modules/auth'
import { taskStatusApiEndpoint } from '../const'

interface GetTaskStatusByIdProps {
  id: string
  data: any
}

async function patchTaskStatusById ({ id, data }: GetTaskStatusByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskStatusApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskStatusById }
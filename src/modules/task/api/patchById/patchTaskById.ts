import { axiosWithAuth } from '@/modules/auth'
import { taskApiEndpoint } from '../const'

interface GetTaskByIdProps {
  id: string
  data: any
}

async function patchTaskById ({ id, data }: GetTaskByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskById } 
import { axiosWithAuth } from '@/modules/auth'
import { taskDateGraphApiEndpoint } from '../const'

interface GetTaskDateGraphByIdProps {
  id: string
  data: any
}

async function patchTaskDateGraphById ({ id, data }: GetTaskDateGraphByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskDateGraphApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskDateGraphById } 
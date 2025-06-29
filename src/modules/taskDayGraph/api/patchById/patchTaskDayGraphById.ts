import { axiosWithAuth } from '@/modules/auth'
import { taskDayGraphApiEndpoint } from '../const'

interface GetTaskDayGraphByIdProps {
  id: string
  data: any
}

async function patchTaskDayGraphById ({ id, data }: GetTaskDayGraphByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskDayGraphApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskDayGraphById }
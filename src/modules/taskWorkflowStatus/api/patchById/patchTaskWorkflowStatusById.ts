import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusApiEndpoint } from '../const'

interface GetTaskWorkflowStatusByIdProps {
  id: string
  data: any
}

async function patchTaskWorkflowStatusById ({ id, data }: GetTaskWorkflowStatusByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskWorkflowStatusApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskWorkflowStatusById }
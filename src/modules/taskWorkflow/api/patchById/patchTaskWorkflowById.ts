import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowApiEndpoint } from '../const'

interface GetTaskWorkflowByIdProps {
  id: string
  data: any
}

async function patchTaskWorkflowById ({ id, data }: GetTaskWorkflowByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskWorkflowApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskWorkflowById }
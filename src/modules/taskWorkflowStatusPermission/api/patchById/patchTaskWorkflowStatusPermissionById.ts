import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusPermissionApiEndpoint } from '../const'

interface GetTaskWorkflowStatusPermissionByIdProps {
  id: string
  data: any
}

async function patchTaskWorkflowStatusPermissionById ({ id, data }: GetTaskWorkflowStatusPermissionByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${taskWorkflowStatusPermissionApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchTaskWorkflowStatusPermissionById }
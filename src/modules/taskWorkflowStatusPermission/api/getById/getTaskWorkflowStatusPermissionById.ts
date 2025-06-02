import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusPermissionApiEndpoint } from '../const'

interface GetTaskWorkflowStatusPermissionByIdProps {
  id: string
}

async function getTaskWorkflowStatusPermissionById ({ id }: GetTaskWorkflowStatusPermissionByIdProps) {
  try {
    const taskWorkflowStatusPermissionList = await axiosWithAuth.get(`/${taskWorkflowStatusPermissionApiEndpoint}/${id}`)
    return taskWorkflowStatusPermissionList.data
  } catch (e) {
    return null
  }

}

export { getTaskWorkflowStatusPermissionById }
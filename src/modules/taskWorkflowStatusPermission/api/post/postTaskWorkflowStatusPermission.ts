import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusPermissionApiEndpoint } from '../const'

async function postTaskWorkflowStatusPermission (data: any) {
  try {
    const taskWorkflowStatusPermissionList = await axiosWithAuth.post(`${taskWorkflowStatusPermissionApiEndpoint}`,data)
    return taskWorkflowStatusPermissionList.data
  } catch (e) {
    return e
  }

}

export { postTaskWorkflowStatusPermission }
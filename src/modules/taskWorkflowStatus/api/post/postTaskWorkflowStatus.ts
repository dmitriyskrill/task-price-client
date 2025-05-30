import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusApiEndpoint } from '../const'

async function postTaskWorkflowStatus (data: any) {
  try {
    const taskWorkflowStatusList = await axiosWithAuth.post(`${taskWorkflowStatusApiEndpoint}`,data)
    return taskWorkflowStatusList.data
  } catch (e) {
    return e
  }

}

export { postTaskWorkflowStatus }
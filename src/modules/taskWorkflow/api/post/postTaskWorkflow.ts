import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowApiEndpoint } from '../const'

async function postTaskWorkflow (data: any) {
  try {
    const taskWorkflowList = await axiosWithAuth.post(`${taskWorkflowApiEndpoint}`,data)
    return taskWorkflowList.data
  } catch (e) {
    return []
  }

}

export { postTaskWorkflow }
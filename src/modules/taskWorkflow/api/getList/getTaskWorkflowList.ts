import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowApiEndpoint } from '../const'


async function getTaskWorkflowList () {
  try {
    const taskWorkflowList = await axiosWithAuth.get(`/${taskWorkflowApiEndpoint}`)
    return taskWorkflowList.data
  } catch (e) {
    return []
  }

}

export { getTaskWorkflowList }
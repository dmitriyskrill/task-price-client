import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusApiEndpoint } from '../const'


async function getTaskWorkflowStatusList () {
  try {
    const taskWorkflowStatusList = await axiosWithAuth.get(`/${taskWorkflowStatusApiEndpoint}`)
    return taskWorkflowStatusList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskWorkflowStatusList }
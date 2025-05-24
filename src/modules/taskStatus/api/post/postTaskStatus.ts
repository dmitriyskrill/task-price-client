import { axiosWithAuth } from '@/modules/auth'
import { taskStatusApiEndpoint } from '../const'

async function postTaskStatus (data: any) {
  try {
    const taskStatusList = await axiosWithAuth.post(`${taskStatusApiEndpoint}`,data)
    return taskStatusList.data
  } catch (e) {
    return e
  }

}

export { postTaskStatus }
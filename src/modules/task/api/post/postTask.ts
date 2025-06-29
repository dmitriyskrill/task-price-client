import { axiosWithAuth } from '@/modules/auth'
import { taskApiEndpoint } from '../const'

async function postTask (data: any) {
  try {
    const taskList = await axiosWithAuth.post(`${taskApiEndpoint}`,data)
    return taskList.data
  } catch (e) {
    return e
  }

}

export { postTask } 
import { axiosWithAuth } from '@/modules/auth'
import { taskTypeApiEndpoint } from '../const'

async function postTaskType (data: any) {
  try {
    const taskTypeList = await axiosWithAuth.post(`${taskTypeApiEndpoint}`,data)
    return taskTypeList.data
  } catch (e) {
    return e
  }

}

export { postTaskType }
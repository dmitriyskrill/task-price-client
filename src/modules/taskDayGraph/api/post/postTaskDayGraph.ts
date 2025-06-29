import { axiosWithAuth } from '@/modules/auth'
import { taskDayGraphApiEndpoint } from '../const'

async function postTaskDayGraph (data: any) {
  try {
    const taskDayGraphList = await axiosWithAuth.post(`${taskDayGraphApiEndpoint}`,data)
    return taskDayGraphList.data
  } catch (e) {
    return e
  }

}

export { postTaskDayGraph }
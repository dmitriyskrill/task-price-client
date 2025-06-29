import { axiosWithAuth } from '@/modules/auth'
import { taskDateGraphApiEndpoint } from '../const'

async function postTaskDateGraph (data: any) {
  try {
    const taskDateGraphList = await axiosWithAuth.post(`${taskDateGraphApiEndpoint}`,data)
    return taskDateGraphList.data
  } catch (e) {
    return e
  }

}

export { postTaskDateGraph } 
import { axiosWithAuth } from '@/modules/auth'
import { taskDayGraphApiEndpoint } from '../const'


async function getTaskDayGraphList () {
  try {
    const taskDayGraphList = await axiosWithAuth.get(`/${taskDayGraphApiEndpoint}`)
    return taskDayGraphList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskDayGraphList }
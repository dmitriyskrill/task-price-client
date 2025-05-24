import { axiosWithAuth } from '@/modules/auth'
import { taskStatusApiEndpoint } from '../const'


async function getTaskStatusList () {
  try {
    const taskStatusList = await axiosWithAuth.get(`/${taskStatusApiEndpoint}`)
    return taskStatusList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskStatusList }
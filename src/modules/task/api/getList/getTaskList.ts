import { axiosWithAuth } from '@/modules/auth'
import { taskApiEndpoint } from '../const'


async function getTaskList () {
  try {
    const taskList = await axiosWithAuth.get(`/${taskApiEndpoint}`)
    return taskList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskList } 
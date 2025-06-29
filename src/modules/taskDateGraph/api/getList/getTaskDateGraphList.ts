import { axiosWithAuth } from '@/modules/auth'
import { taskDateGraphApiEndpoint } from '../const'


async function getTaskDateGraphList () {
  try {
    const taskDateGraphList = await axiosWithAuth.get(`/${taskDateGraphApiEndpoint}`)
    return taskDateGraphList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskDateGraphList } 
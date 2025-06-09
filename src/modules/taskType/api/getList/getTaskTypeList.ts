import { axiosWithAuth } from '@/modules/auth'
import { taskTypeApiEndpoint } from '../const'


async function getTaskTypeList () {
  try {
    const taskTypeList = await axiosWithAuth.get(`/${taskTypeApiEndpoint}`)
    return taskTypeList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskTypeList }
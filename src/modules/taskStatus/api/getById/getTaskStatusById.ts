import { axiosWithAuth } from '@/modules/auth'
import { taskStatusApiEndpoint } from '../const'

interface GetTaskStatusByIdProps {
  id: string
}

async function getTaskStatusById ({ id }: GetTaskStatusByIdProps) {
  try {
    const taskStatusList = await axiosWithAuth.get(`/${taskStatusApiEndpoint}/${id}`)
    return taskStatusList.data
  } catch (e) {
    return null
  }

}

export { getTaskStatusById }
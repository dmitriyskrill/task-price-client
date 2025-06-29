import { axiosWithAuth } from '@/modules/auth'
import { taskApiEndpoint } from '../const'

interface GetTaskByIdProps {
  id: string
}

async function getTaskById ({ id }: GetTaskByIdProps) {
  try {
    const taskList = await axiosWithAuth.get(`/${taskApiEndpoint}/${id}`)
    return taskList.data
  } catch (e) {
    return null
  }

}

export { getTaskById } 
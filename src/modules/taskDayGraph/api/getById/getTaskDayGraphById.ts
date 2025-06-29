import { axiosWithAuth } from '@/modules/auth'
import { taskDayGraphApiEndpoint } from '../const'

interface GetTaskDayGraphByIdProps {
  id: string
}

async function getTaskDayGraphById ({ id }: GetTaskDayGraphByIdProps) {
  try {
    const taskDayGraphList = await axiosWithAuth.get(`/${taskDayGraphApiEndpoint}/${id}`)
    return taskDayGraphList.data
  } catch (e) {
    return null
  }

}

export { getTaskDayGraphById }
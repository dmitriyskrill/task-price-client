import { axiosWithAuth } from '@/modules/auth'
import { taskTypeApiEndpoint } from '../const'

interface GetTaskTypeByIdProps {
  id: string
}

async function getTaskTypeById ({ id }: GetTaskTypeByIdProps) {
  try {
    const taskTypeList = await axiosWithAuth.get(`/${taskTypeApiEndpoint}/${id}`)
    return taskTypeList.data
  } catch (e) {
    return null
  }

}

export { getTaskTypeById }
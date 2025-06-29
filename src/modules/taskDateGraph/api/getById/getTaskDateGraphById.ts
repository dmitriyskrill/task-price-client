import { axiosWithAuth } from '@/modules/auth'
import { taskDateGraphApiEndpoint } from '../const'

interface GetTaskDateGraphByIdProps {
  id: string
}

async function getTaskDateGraphById ({ id }: GetTaskDateGraphByIdProps) {
  try {
    const taskDateGraphList = await axiosWithAuth.get(`/${taskDateGraphApiEndpoint}/${id}`)
    return taskDateGraphList.data
  } catch (e) {
    return null
  }

}

export { getTaskDateGraphById } 
import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowApiEndpoint } from '../const'

interface GetTaskWorkflowByIdProps {
  id: string
}

async function getTaskWorkflowById ({ id }: GetTaskWorkflowByIdProps) {
  try {
    const taskWorkflowList = await axiosWithAuth.get(`/${taskWorkflowApiEndpoint}/${id}`)
    return taskWorkflowList.data
  } catch (e) {
    return null
  }

}

export { getTaskWorkflowById }
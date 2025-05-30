import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusApiEndpoint } from '../const'

interface GetTaskWorkflowStatusByIdProps {
  id: string
}

async function getTaskWorkflowStatusById ({ id }: GetTaskWorkflowStatusByIdProps) {
  try {
    const taskWorkflowStatusList = await axiosWithAuth.get(`/${taskWorkflowStatusApiEndpoint}/${id}`)
    return taskWorkflowStatusList.data
  } catch (e) {
    return null
  }

}

export { getTaskWorkflowStatusById }
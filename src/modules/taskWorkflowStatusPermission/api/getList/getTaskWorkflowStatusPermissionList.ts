import { axiosWithAuth } from '@/modules/auth'
import { taskWorkflowStatusPermissionApiEndpoint } from '../const'


async function getTaskWorkflowStatusPermissionList () {
  try {
    const taskWorkflowStatusPermissionList = await axiosWithAuth.get(`/${taskWorkflowStatusPermissionApiEndpoint}`)
    return taskWorkflowStatusPermissionList.data
  } catch (e) {
    console.log(e)
  }

}

export { getTaskWorkflowStatusPermissionList }
import { axiosWithAuth } from '@/modules/auth'
import { expenseDayGraphApiEndpoint } from '../const'

async function patchExpenseDayGraphById ({ id, data }: { id: string, data: any }) {
  try {
    const expenseDayGraph = await axiosWithAuth.patch(`/${expenseDayGraphApiEndpoint}/${id}`, data)
    return expenseDayGraph.data
  } catch (e) {
    console.log(e)
  }
}

export { patchExpenseDayGraphById } 
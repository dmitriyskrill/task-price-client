import { axiosWithAuth } from '@/modules/auth'
import { expenseDayGraphApiEndpoint } from '../const'

async function getExpenseDayGraphById ({ id }: { id: string }) {
  try {
    const expenseDayGraph = await axiosWithAuth.get(`/${expenseDayGraphApiEndpoint}/${id}`)
    return expenseDayGraph.data
  } catch (e) {
    console.log(e)
  }
}

export { getExpenseDayGraphById } 
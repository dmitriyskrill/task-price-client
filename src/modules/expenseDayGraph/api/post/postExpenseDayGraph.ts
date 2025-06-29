
import { axiosWithAuth } from '@/modules/auth'
import { expenseDayGraphApiEndpoint } from '../const'

async function postExpenseDayGraph (expenseDayGraphData: any) {
  try {
    const expenseDayGraph = await axiosWithAuth.post(`/${expenseDayGraphApiEndpoint}`, expenseDayGraphData)
    return expenseDayGraph.data
  } catch (e) {
    console.log(e)
  }
}

export { postExpenseDayGraph } 
import { axiosWithAuth } from '@/modules/auth'
import { expenseDateGraphApiEndpoint } from '../const'

async function postExpenseDateGraph (expenseDateGraphData: any) {
  try {
    const expenseDateGraph = await axiosWithAuth.post(`/${expenseDateGraphApiEndpoint}`, expenseDateGraphData)
    return expenseDateGraph.data
  } catch (e) {
    console.log(e)
  }
}

export { postExpenseDateGraph } 
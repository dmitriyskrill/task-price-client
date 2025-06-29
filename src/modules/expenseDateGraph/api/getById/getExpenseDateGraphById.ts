import { axiosWithAuth } from '@/modules/auth'
import { expenseDateGraphApiEndpoint } from '../const'

async function getExpenseDateGraphById ({ id }: { id: string }) {
  try {
    const expenseDateGraph = await axiosWithAuth.get(`/${expenseDateGraphApiEndpoint}/${id}`)
    return expenseDateGraph.data
  } catch (e) {
    console.log(e)
  }
}

export { getExpenseDateGraphById } 
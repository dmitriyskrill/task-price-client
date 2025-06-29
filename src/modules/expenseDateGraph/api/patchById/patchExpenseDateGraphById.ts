import { axiosWithAuth } from '@/modules/auth'
import { expenseDateGraphApiEndpoint } from '../const'

async function patchExpenseDateGraphById ({ id, data }: { id: string, data: any }) {
  try {
    const expenseDateGraph = await axiosWithAuth.patch(`/${expenseDateGraphApiEndpoint}/${id}`, data)
    return expenseDateGraph.data
  } catch (e) {
    console.log(e)
  }
}

export { patchExpenseDateGraphById } 
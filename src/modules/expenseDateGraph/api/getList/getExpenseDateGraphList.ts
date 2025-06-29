import { axiosWithAuth } from '@/modules/auth'
import { expenseDateGraphApiEndpoint } from '../const'

async function getExpenseDateGraphList () {
  try {
    const expenseDateGraphList = await axiosWithAuth.get(`/${expenseDateGraphApiEndpoint}`)
    return expenseDateGraphList.data
  } catch (e) {
    console.log(e)
  }
}

export { getExpenseDateGraphList } 
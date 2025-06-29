import { axiosWithAuth } from '@/modules/auth'
import { expenseDayGraphApiEndpoint } from '../const'

async function getExpenseDayGraphList () {
  try {
    const expenseDayGraphList = await axiosWithAuth.get(`/${expenseDayGraphApiEndpoint}`)
    return expenseDayGraphList.data
  } catch (e) {
    console.log(e)
  }
}

export { getExpenseDayGraphList } 
import { axiosWithAuth } from '@/modules/auth'
import { expenseApiEndpoint } from '../const'

async function getExpenseList () {
  try {
    const expenseList = await axiosWithAuth.get(`/${expenseApiEndpoint}`)
    return expenseList.data
  } catch (e) {
    console.log(e)
  }
}

export { getExpenseList } 
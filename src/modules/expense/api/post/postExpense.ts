import { axiosWithAuth } from '@/modules/auth'
import { expenseApiEndpoint } from '../const'

async function postExpense (expenseData: any) {
  try {
    const expense = await axiosWithAuth.post(`/${expenseApiEndpoint}`, expenseData)
    return expense.data
  } catch (e) {
    console.log(e)
  }
}

export { postExpense } 
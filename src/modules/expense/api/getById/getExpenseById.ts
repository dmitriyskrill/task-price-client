import { axiosWithAuth } from '@/modules/auth'
import { expenseApiEndpoint } from '../const'

async function getExpenseById ({ id }: { id: string }) {
  try {
    const expense = await axiosWithAuth.get(`/${expenseApiEndpoint}/${id}`)
    return expense.data
  } catch (e) {
    console.log(e)
  }
}

export { getExpenseById } 
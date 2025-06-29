import { axiosWithAuth } from '@/modules/auth'
import { expenseApiEndpoint } from '../const'

async function patchExpenseById ({ id, data }: { id: string, data: any }) {
  try {
    const expense = await axiosWithAuth.patch(`/${expenseApiEndpoint}/${id}`, data)
    return expense.data
  } catch (e) {
    console.log(e)
  }
}

export { patchExpenseById } 
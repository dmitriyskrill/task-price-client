import { axiosWithAuth } from '@/modules/auth'
import { expenseTypeApiEndpoint } from '../const'

interface GetExpenseTypeByIdProps {
  id: string
}

async function getExpenseTypeById ({ id }: GetExpenseTypeByIdProps) {
  try {
    const expenseTypeList = await axiosWithAuth.get(`/${expenseTypeApiEndpoint}/${id}`)
    return expenseTypeList.data
  } catch (e) {
    return null
  }

}

export { getExpenseTypeById }
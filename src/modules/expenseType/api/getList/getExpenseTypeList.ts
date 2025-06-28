import { axiosWithAuth } from '@/modules/auth'
import { expenseTypeApiEndpoint } from '../const'
async function getExpenseTypeList () {
  try {
    const expenseTypeList = await axiosWithAuth.get(`/${expenseTypeApiEndpoint}`)
    return expenseTypeList.data
  } catch (e) {
    return []
  }

}

export { getExpenseTypeList }
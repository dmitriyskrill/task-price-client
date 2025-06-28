import { axiosWithAuth } from '@/modules/auth'
import { expenseTypeApiEndpoint } from '../const'
async function postExpenseType (data: any) {
  try {
    const expenseTypeList = await axiosWithAuth.post(`/${expenseTypeApiEndpoint}`,data)
    return expenseTypeList.data
  } catch (e) {
    return []
  }

}

export { postExpenseType }
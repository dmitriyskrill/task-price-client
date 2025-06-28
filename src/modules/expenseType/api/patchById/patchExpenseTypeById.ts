import { axiosWithAuth } from '@/modules/auth'
import { expenseTypeApiEndpoint } from '../const'
interface GetExpenseTypeByIdProps {
  id: string
  data: any
}

async function patchExpenseTypeById ({ id, data }: GetExpenseTypeByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/${expenseTypeApiEndpoint}/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchExpenseTypeById }
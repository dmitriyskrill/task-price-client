import { axiosWithAuth } from '@/modules/auth'

interface GetUserByIdProps {
  id: string
  data: any
}

async function patchUserById ({ id, data }: GetUserByIdProps) {
  try {
    const patchResult = await axiosWithAuth.patch(
      `/user/${id}`,
      data
    )
    return patchResult.data
  } catch (e) {
    return null
  }

}

export { patchUserById }
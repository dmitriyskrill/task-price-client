import { axiosWithAuth } from '@/modules/auth'
import { unitApiEndpoint } from '../const'

async function postUnit (data: any) {
  try {
    const axiosResponse = await axiosWithAuth.post(`/${unitApiEndpoint}`, data)
    return axiosResponse.data
  } catch (e) {
    return []
  }

}

export { postUnit }
import { axiosWithAuth } from '@/modules/auth'
import { unitApiEndpoint } from '../const'

async function postUnit (data: any) {
  try {
    // const axiosResponse = await axiosWithAuth.post(`/${unitApiEndpoint}`, data)
    // return axiosResponse.data
    return { ...data, id: Math.random() }
  } catch (e) {
    return []
  }

}

export { postUnit }
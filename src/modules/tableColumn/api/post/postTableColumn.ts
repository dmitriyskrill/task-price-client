import { axiosWithAuth } from '@/modules/auth'
import { tableColumnApiEndpoint } from '../const'

async function postTableColumn (data: any) {
  try {
    const axiosResponse = await axiosWithAuth.post(`/${tableColumnApiEndpoint}`, data)
    return axiosResponse.data
  } catch (e) {
    return []
  }

}

export { postTableColumn }
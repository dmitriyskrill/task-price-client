import { axiosWithAuth } from '@/modules/auth'
import { tableColumnApiEndpoint } from '../const'

async function postTableColumnFromOldDb () {
  try {
    const axiosResponse = await axiosWithAuth.post(`/${tableColumnApiEndpoint}/fromOldDb`)
    return axiosResponse.data
  } catch (e) {
    return []
  }

}

export { postTableColumnFromOldDb }
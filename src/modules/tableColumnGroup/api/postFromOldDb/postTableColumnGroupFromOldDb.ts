import { axiosWithAuth } from '@/modules/auth'
import { tableColumnGroupApiEndpoint } from '../const'

async function postTableColumnGroupFromOldDb () {
  try {
    const axiosResponse = await axiosWithAuth.post(`/${tableColumnGroupApiEndpoint}/fromOldDb`)
    return axiosResponse.data
  } catch (e) {
    return []
  }

}

export { postTableColumnGroupFromOldDb }
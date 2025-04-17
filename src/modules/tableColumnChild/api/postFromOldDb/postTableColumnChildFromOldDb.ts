import { axiosWithAuth } from '@/modules/auth'
import { tableColumnChildApiEndpoint } from '../const'

async function postTableColumnChildFromOldDb () {
  try {
    const axiosResponse = await axiosWithAuth.post(`/${tableColumnChildApiEndpoint}/fromOldDb`)
    return axiosResponse.data
  } catch (e) {
    return []
  }

}

export { postTableColumnChildFromOldDb }
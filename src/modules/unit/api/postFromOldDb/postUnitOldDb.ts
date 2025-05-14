import { axiosWithAuth } from '@/modules/auth'
import { unitApiEndpoint } from '../const'

async function postUnitOldDb () {
  try {
    const axiosResponse = await axiosWithAuth.post(`/${unitApiEndpoint}/fromOldDb`)
    return axiosResponse.data
  } catch (e) {
    return []
  }

}

export { postUnitOldDb }
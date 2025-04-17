import { axiosWithAuth } from '@/modules/auth'
import { tableColumnChildApiEndpoint } from '../const'

async function postTableColumnChild (data: any) {
  try {
    // const axiosResponse = await axiosWithAuth.post(`/${tableColumnChildApiEndpoint}`, data)
    // return axiosResponse.data

    return  {...data, id: Math.random().toString()}

  } catch (e) {
    return []
  }

}

export { postTableColumnChild }
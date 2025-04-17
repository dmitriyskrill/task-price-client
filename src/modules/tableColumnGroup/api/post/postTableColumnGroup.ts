import { axiosWithAuth } from '@/modules/auth'
import { tableColumnGroupApiEndpoint } from '../const'

async function postTableColumnGroup (data: any) {
  try {
    // const axiosResponse = await axiosWithAuth.post(`/${tableColumnGroupApiEndpoint}`, data)
    // return axiosResponse.data

    return  {...data, id: Math.random().toString()}

  } catch (e) {
    return []
  }

}

export { postTableColumnGroup }
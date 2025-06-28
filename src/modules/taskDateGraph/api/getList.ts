import { axiosWithAuth } from '@/modules/auth'
import { ITaskDateGraphList } from '../types/TaskDateGraph.interface'

export async function getTaskDateGraphList(): Promise<ITaskDateGraphList> {
  try {
    const res = await axiosWithAuth.get('/taskDateGraph/list')
    return res.data
  } catch (e) {
    return []
  }
} 
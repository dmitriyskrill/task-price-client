import { axiosWithAuth } from '@/modules/auth'
import type { ITaskDateGraph } from '../types/TaskDateGraph.interface'

export async function postTaskDateGraph (data: Partial<ITaskDateGraph>) {
  try {
    const res = await axiosWithAuth.post('/taskDateGraph', data)
    return res.data
  } catch (e) {
    return null
  }
} 
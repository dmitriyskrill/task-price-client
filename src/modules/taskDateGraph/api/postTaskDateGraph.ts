import { axiosWithAuth } from '@/modules/auth'
import type { ITaskDateGraph } from '../types/TaskDateGraph.interface'

export async function postTaskDateGraph (data: Partial<ITaskDateGraph>) {
  try {
    const res = await axiosWithAuth.post('/task-date-graph', data)
    return res.data
  } catch (e) {
    return null
  }
} 
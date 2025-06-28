import { ITypicalFields } from '@/shared/types/TypicalFields.interface'
import { IUser } from '@/shared/types/User.interface'
// TODO: заменить на реальный импорт, если появится
export interface ITask {
  id: string
  name: string
}

export interface ITaskDateGraph extends ITypicalFields {
  endpoint?: string // Default: 'taskDateGraph'
  date: Date
  amount: number
  task: ITask
  isFact: boolean
  owner: IUser
}

export type ITaskDateGraphList = ITaskDateGraph[] 
import { ITypicalFields } from '@/shared/types/TypicalFields.interface'

export interface ITableColumn extends ITypicalFields {
  key: string // Должно быть уникальным
  width?: number // Default: 30
  isShow?: boolean // Default: false
  isFixed?: boolean // Default: false
  cellType?: string
}
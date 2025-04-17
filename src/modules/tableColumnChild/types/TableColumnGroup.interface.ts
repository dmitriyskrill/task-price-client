import { ITypicalFields } from '@/shared/types/TypicalFields.interface'
import type { ITableColumn } from '@/modules/tableColumn'

/* Группировка колонок для отображения */
export interface ITableColumnChild extends ITypicalFields {
  tooltipInfo?: string
  widthPercent?: number
  key?: string
  tableColumn?: ITableColumn
}

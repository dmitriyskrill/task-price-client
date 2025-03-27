import { ITypicalFields } from '@/shared/types/TypicalFields.interface'
import type { ITableColumn } from '@/modules/tableColumn'

/* Группировка колонок для отображения */
export interface ITableColumnGroup extends ITypicalFields {
	tableColumnList: ITableColumn[]
}

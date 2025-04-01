import { axiosWithAuth } from '@/modules/auth'
import { ITableColumnGroup } from '../../types/TableColumnGroup.interface'
import { tableColumnGroupList } from '../../mock/tableColumnGroupMock'

async function getTableColumnGroupList (): Promise<ITableColumnGroup[]> {

  return tableColumnGroupList
}

export {
  getTableColumnGroupList
}
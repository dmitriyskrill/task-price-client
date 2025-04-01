import { ITableColumnGroup } from '../types/TableColumnGroup.interface'

const tableColumnGroupOne: ITableColumnGroup = {
  id: '123',
  name: 'ЛЗК',
  sort: 1,
  createdAt: new Date(),
  createdBy: '124124',
  updatedAt: new Date(),
  updatedBy: '124124',

  isTrash: false,
  dateAddingToTrash: null,

  tableColumnList : []
}

const tableColumnGroupList = [tableColumnGroupOne]

export {
  tableColumnGroupList,
  tableColumnGroupOne
}
const AmountTypesInTotalAmountTypes = {
  Hour: 'days',
  Day: 'dates',
  Month: 'amount'
} as const

type AmountTypesInTotalAmountT = typeof AmountTypesInTotalAmountTypes[keyof typeof AmountTypesInTotalAmountTypes]

type IdT = string

interface UserI {

}

interface UnitI {
  name: string
  shortName: string
  fullName: string
  codeId?: string
  isHourUnit?: boolean
}

interface CalculatedExpenseI {

}

interface Expense {
  id: IdT
  name?: string
  sort: number
  creator: UserI
  createdDate: Date
  lastModifier?: UserI
  lastModifiedDate?: Date
  isActive?: boolean

  expenseType: ExpenseTypeI
  amountTypesInTotalAmount?: AmountTypesInTotalAmountT[]
  amount?: number
  dayGraphAdditionalFactor?: number
  withAnDayGraphAdditionalFactor?: boolean
  dateGraphAdditionalFactor?: number
  withAnDateGraphAdditionalFactor?: boolean
  unit?: UnitI
  price?: number
  billsNumber?: number
  deliveryDaysNumber?: number
  note?: string
  planLkExpense?: string
  lkTask?: string
  isPlan: boolean
  isFixedFact: boolean
  lkElementStatus?: string
  responsible?: string
}

interface ExpenseRowSetting {
  rowHeight?: number
  rowHeightUnit?: string
}

interface ExpenseDateGraphI {
  endpoint?: string
  creator: string
  createdDate: Date
  lastModifier?: string
  lastModifiedDate?: Date
  date: Date
  amount: number
  lkExpense: string
  lkElementStatus?: string
  responsible?: string
}

interface ExpenseDayGraphI {
  name?: string
  endpoint?: string
  creator: string
  createdDate: Date
  lastModifier?: string
  lastModifiedDate?: Date
  day: number
  amount: number
  lkExpense: string
  lkElementStatus?: string
  responsible?: string
}

interface ExpenseTypeI {
  name: string
  shortName: string
  codeId?: string
  bgColor?: string
  isShowGraphInfo?: boolean
  defaultAdditionalFactor?: number
  defaultDateAdditionalFactor?: number
  defaultUnit?: string | null
  admissibleUnits?: string[]
  defaultLkElementStatus?: string | null
  defaultLkAmountTypesInTotalAmountPlan?: string[]
  defaultLkAmountTypesInTotalAmountFact?: string[]
  showAccrualCostByTypeInProfitInfo?: boolean
  sort?: number
}

interface ExpenseTypeAccrualI {
  name: string
  endpoint?: string
  sort: number
  creator: string
  createdDate: Date
  lastModifier?: string
  lastModifiedDate?: Date
  isTrash?: boolean
  lkExpenseType?: string
  amount?: number
  lkTask: string
  isPlan?: boolean
}

interface ExpenseInfoI {
  name: string
  showInProfitInfo?: boolean
  lkExpenseTypes?: string[]
  afterPosition?: string
}
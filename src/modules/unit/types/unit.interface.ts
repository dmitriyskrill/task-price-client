import { ITypicalFields } from '@/shared/types/TypicalFields.interface'

export interface IUnit extends ITypicalFields {
    name: string
    shortName: string
    fullName: string
    codeId: string
    isHourUnit: boolean
    isTrash: boolean
}
import { IUser } from './User.interface'
export interface ITypicalFields {
	id: string
	name: string

	sort: number

	createdAt: Date
	createdBy: String

	updatedAt: Date
	updatedBy: String

	isTrash: boolean
	dateAddingToTrash: Date | null
}


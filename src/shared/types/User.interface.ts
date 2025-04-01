import { ITypicalFields } from './TypicalFields.interface'

export interface IUser extends ITypicalFields {
	surname: string
	patronymic: string

	email: string
	login: string
	verificationToken: string
	avatarPath: string
}

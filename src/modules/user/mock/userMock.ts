import { IUser } from '@/shared/types/User.interface'

const userAdmin: IUser = {
  id: 'userAdmin',
  name: 'Админ',
  sort: 1,
  createdAt: new Date(),
  createdBy: '124124',
  updatedAt: new Date(),
  updatedBy: '124124',
  isTrash: false,
  dateAddingToTrash: new Date(),
  surname:'Админов',
  patronymic:'Админович',
  email:'adminov@gmail.com',
  login: 'adminov',
  verificationToken: '',
  avatarPath:'',
}

const userIvan: IUser = {
  id: 'userIvan',
  name: 'Иван',
  sort: 2,
  createdAt: new Date(),
  createdBy: '124124',
  updatedAt: new Date(),
  updatedBy: '124124',
  isTrash: false,
  dateAddingToTrash: new Date(),
  surname:'Иванов',
  patronymic:'Иванович',
  email:'ivanov@gmail.com',
  login: 'ivanov',
  verificationToken: '',
  avatarPath:'',
}

const userPetr: IUser = {
  id: 'userPetr',
  name: 'Петр',
  sort: 3,
  createdAt: new Date(),
  createdBy: '124124',
  updatedAt: new Date(),
  updatedBy: '124124',
  isTrash: false,
  dateAddingToTrash: new Date(),
  surname:'Петров',
  patronymic:'Петрович',
  email:'petrov@gmail.com',
  login: 'petrov',
  verificationToken: '',
  avatarPath:'',
}

const userList = [
  userPetr,
  userAdmin,
  userIvan,
]

export {
  userPetr,
  userIvan,
  userAdmin,
  userList
}
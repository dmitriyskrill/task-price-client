import Cookies from 'js-cookie'
import { EnumTokens } from '../constants/enum'

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict', // TODO уточнить как на сервере указано, связать с dev
    expires: 1,
  })
}
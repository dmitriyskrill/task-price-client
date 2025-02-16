import Cookies from 'js-cookie'
import { EnumTokens } from '../constants/enum'

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}
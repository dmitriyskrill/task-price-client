import Cookies from 'js-cookie'
import { EnumTokens } from '../constants/enum'

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}
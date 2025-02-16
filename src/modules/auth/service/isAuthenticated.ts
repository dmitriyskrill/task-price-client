import { EnumTokens } from '@/modules/auth/api/constants/enum'
import Cookies from 'js-cookie'
function isAuthenticated () {
  return !!Cookies.get(EnumTokens.ACCESS_TOKEN)
}

export { isAuthenticated }
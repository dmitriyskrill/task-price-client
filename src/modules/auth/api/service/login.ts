import { axiosForAuth } from '../axiosForAuth'
import { isAxiosError } from 'axios'
import { saveTokenStorage } from '@/modules/auth/api/helpers/saveTokenStorage'

interface LoginProps {
  recaptchaToken: string
  email: string
  password: string
}

async function login (props: LoginProps) {
  try {
    const response = await axiosForAuth.post(
      `/login`,
      {
        email: props.email,
        password: props.password
      },
      {
        headers: {
          'Content-Type': 'application/json',
          recaptcha: props.recaptchaToken
        },
        withCredentials: true
      }
    )
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
    return  response.data


  } catch (err) {
    if (isAxiosError(err)) {
      throw new Error(err.response?.data?.message || 'Ошибка запроса');
    } else if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error('Unknown error occurred');
    }
  }

}

export {
  login
}
import { baseApiUrl } from '@/shared/api/constants'
import axios from 'axios'

interface LoginProps {
  recaptchaToken: string
  email: string
  password: string
}

async function login (props: LoginProps) {
  try {
    const response = await axios.post(
      `${baseApiUrl}/auth/login`,
      {
        email: props.email,
        password: props.password
      },
      {
        headers: {
          'Content-Type': 'application/json',
          recaptcha: props.recaptchaToken
        }
      }
    )
// if (!response.ok) throw new Error(data.message || 'Ошибка авторизации')
    return  response.data


  } catch (err) {
    if (axios.isAxiosError(err)) {
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
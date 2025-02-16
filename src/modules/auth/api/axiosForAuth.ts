import axios from 'axios'
import { baseAuthUrl } from '@/shared/api/constants'

export const axiosForAuth = axios.create({
  baseURL: baseAuthUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})
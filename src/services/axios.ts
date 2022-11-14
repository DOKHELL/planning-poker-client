import axios from 'axios'
import getEnvVar from '../utils/getEnvVar'

axios.defaults.withCredentials = true

const api = axios.create({
  baseURL: getEnvVar('VITE_API_GATEWAY'),
  headers: {
    'Content-Type': 'application/json',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'include',
    redirect: 'follow',
    referrerPolicy: 'unsafe-url',
  },
})

export default api
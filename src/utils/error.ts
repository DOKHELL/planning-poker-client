import { AxiosError } from 'axios'
import { ErrorResponse } from '../@types/error'

export const getError = (e: AxiosError): ErrorResponse => ({
  status: String(e.response?.status),
  message: e.message
})


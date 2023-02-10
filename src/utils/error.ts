import { AxiosError } from 'axios'
import { ErrorResponse } from '@/@types'

export const getError = (e: AxiosError): ErrorResponse => ({
  status: String(e.response?.status),
  message: e.message
})


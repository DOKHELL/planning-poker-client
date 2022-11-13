import instance from './axios'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getError } from '../utils/error'

const setupAxiosInterceptors = () => {
  const onRequestSuccess = (config: AxiosRequestConfig) => {
    return config
  }
  const onResponseSuccess = (response: AxiosResponse) => {
    return response
  }
  const onResponseError = (err: AxiosError) => {
    throw getError(err)
  }
  instance.interceptors.request.use(onRequestSuccess)
  instance.interceptors.response.use(onResponseSuccess, onResponseError)
}

export default setupAxiosInterceptors

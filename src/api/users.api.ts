// TODO: rename to user.api.ts
import api from '../services/axios'
import { GET_USER, GET_USERS } from '../constants/api'
import { AxiosError, AxiosResponse } from 'axios'

export type User = {
  id: string
  name: string
  email: string
  phone: string
  username: string
  website: string
}

// TODO: move to general types /@types/error.ts
export type ErrorResponse = {
  status: string
  message: string
}

// TODO: move to general utils /utils/error.ts
const getError = (e: unknown): ErrorResponse => {
  const err = e as AxiosError
  return {
    status: String(err.response?.status),
    message: err.message
  }
}

// TODO: move to general utils /@types/index.ts
export type Meta = {
  currentPage: number
  pageSize: number
  totalCount: number
}

const convertResponse = (
  response: AxiosResponse<User[]>,
  currentPage: number,
  pageSize: number
): Promise<ListUserResponse> => {
  const { data, headers } = response

  return Promise.resolve({
    users: data,
    meta: {
      currentPage,
      pageSize,
      totalCount: Number(headers['x-total-count'])
    }
  })
}

export type ListUserResponse = {
  users: User[]
  meta: Meta
}

export type ListUserArgs = {
  pageSize: number
  currentPage: number
  filters?: string
}

// TODO: avoid carring
export const listUser = (args: ListUserArgs) => async (): Promise<any> => {
  try {
    const { currentPage, pageSize, filters } = args
    const response = await api.get(GET_USERS(currentPage, pageSize, filters))

    // TODO: move to react-query level
    return convertResponse(response, currentPage, pageSize)
  }
  catch (e) {
    // TODO: handle on axios interception level
    throw getError(e)
  }
}

// TODO: make simple
// export const findUser = (id: string) => (api.get<User>(`/users/${id}`))
export const findUser = (id: string) => async () => {
  try {
    const { data } = await api.get(GET_USER(id))

    return data
  }
  catch (e) {
    throw getError(e)
  }
}

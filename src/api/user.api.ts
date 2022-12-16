import api from '../services/axios'
import { AxiosResponse } from 'axios'
import { Meta } from '../@types'

export type User = {
  id: string
  name: string
  email: string
  phone: string
  username: string
  website: string
}

export type ListUserResponse = {
  users: User[]
  meta: Meta
}

const convertResponse = (
  response: AxiosResponse<User[]>,
  currentPage: number,
  pageSize: number
): ListUserResponse => {
  const { data, headers } = response

  return {
    users: data,
    meta: {
      currentPage,
      pageSize,
      totalCount: Number(headers['x-total-count'])
    }
  }
}

export type ListUserArgs = {
  pageSize: number
  currentPage: number
  filters?: string
}

export const listUser = async ({ currentPage, pageSize, filters }: ListUserArgs) => {
  return api.get<User[]>(`/users?_page=${currentPage}&_sort=id&_order=desc&_limit=${pageSize}${filters}`)
    .then(res => convertResponse(res, currentPage, pageSize))
}

export const findUser = async (id: string) => {
  return api.get<User>(`/users/${id}`).then(res => res.data)
}

export type CreateUserArgs = {
  name: string
  email: string
  phone: string
  username: string
  website: string
}
export const createUser = async (data: CreateUserArgs) => {
  return api.post<User>('/users', data).then(res => res.data)
}
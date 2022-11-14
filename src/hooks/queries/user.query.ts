import { useQuery } from '@tanstack/react-query'
import { findUser, listUser, ListUserResponse, User, ListUserArgs } from '../../api/user.api'
import { ErrorResponse } from '../../@types/error'

// TODO: use store here
export const useListUser = ({ filters, pageSize, currentPage }: ListUserArgs) =>
  useQuery<ListUserResponse, ErrorResponse>(
    [ 'listUser', { filters, pageSize, currentPage } ],
    () => listUser({
      currentPage,
      pageSize,
      filters
    }))

export const useFindUser = (id: string) =>
  useQuery<User, ErrorResponse>(
    [ 'findUser', id ],
    () => findUser(id)
  )


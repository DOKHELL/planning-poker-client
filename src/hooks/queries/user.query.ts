import { useQuery } from '@tanstack/react-query'
import { findUser, listUser, ListUserResponse, User } from '../../api/user.api'
import { ErrorResponse } from '../../@types/error'
import { useSnapshot } from 'valtio'
import { userStore } from '../../store/user.store'
import useDebounce from '../useDebounce'
import { filtersSerializer } from '../../utils/filtersSerializer'

export const useListUser = () => {
  const { pageSize, currentPage, filters } = useSnapshot(userStore)
  const debouncedFilters = useDebounce(filters, 700)
  const serializedFilters = filtersSerializer(debouncedFilters)

  return  useQuery<ListUserResponse, ErrorResponse>(
    [ 'listUser', { filters: serializedFilters, pageSize, currentPage } ],
    () => listUser({
      currentPage,
      pageSize,
      filters: serializedFilters
    }), {
      keepPreviousData: true,
      staleTime: 5000
    })
}


export const useFindUser = (id: string) =>
  useQuery<User, ErrorResponse>(
    [ 'findUser', id ],
    () => findUser(id)
  )


import { useQuery } from '@tanstack/react-query'
import { findUser, listUser, ListUserResponse, User } from '@/api/user.api'
import { ErrorResponse } from '@/@types/error'
import { useUserStore } from '@/store/user.store'
import useDebounce from '../useDebounce'
import { filtersSerializer } from '@/utils/filtersSerializer'
import { userQueryKeys } from '@/constants/queryKeyFactory'

export const useListUser = () => {
  const { pageSize, currentPage, filters } = useUserStore()
  const debouncedFilters = useDebounce(filters, 700)
  const serializedFilters = filtersSerializer(debouncedFilters)

  return  useQuery<ListUserResponse, ErrorResponse>(
    userQueryKeys.list(serializedFilters, pageSize, currentPage),
    () => listUser({
      currentPage,
      pageSize,
      filters: serializedFilters
    }), {
      refetchOnMount: true,
      keepPreviousData: true,
      staleTime: 10000
    })
}


export const useFindUser = (id: string) =>
  useQuery<User, ErrorResponse>(
    userQueryKeys.find(id),
    () => findUser(id)
  )


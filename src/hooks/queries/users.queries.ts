// TODO: rename to user.query.ts
import { useQuery } from '@tanstack/react-query'
import { findUser, listUser, ListUserResponse, User, ErrorResponse, ListUserArgs } from '../../api/users.api'
import { useUsers } from '../../store/users.store'
import useDebounce from '../useDebounce'
import { filtersSerializer } from '../../utils/filtersSerializer'

export const useListUser = (args: ListUserArgs) => {
  // TODO: remove store usage form hook
  const { setTotalCount, filters } = useUsers()
  const debouncedFilters = useDebounce(filters, 700)

  return useQuery<ListUserResponse, ErrorResponse>([ 'listUser', args, debouncedFilters ], listUser({
    currentPage: args.currentPage,
    pageSize: args.pageSize,
    filters: filtersSerializer(filters)
  }), {
    onSuccess: (data) => {
      // TODO: use any async data form react-query cache
      setTotalCount(data.meta.totalCount)
    }
  })
}

export const useFindUser = (id: string) =>
  useQuery<User, ErrorResponse>([ 'findUser', id ], findUser(id), {})

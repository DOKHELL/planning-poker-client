import { proxy, useSnapshot } from 'valtio'
import { devtools } from 'valtio/utils'
import { Filter } from '@/utils/filtersSerializer'

export const initFilters = (): Filter => ({
  name: {
    value: '',
    action: 'like',
  },
  username: {
    value: '',
    action: 'like',
  }
})

export type UserStore = {
  currentPage: number
  pageSize: number
  filters: Filter
}

export const userStore = proxy<UserStore>({
  currentPage: 1,
  pageSize: 9,
  filters: initFilters(),
})

export const useUserStore = () =>  useSnapshot(userStore)

export const setPageSize = (pageSize: number) => {
  userStore.pageSize = pageSize
}

export const setCurrentPage = (currentPage: number) => {
  userStore.currentPage = currentPage
}

export const setUserFilters = (name: string, value: string) => {
  userStore.currentPage = 1
  userStore.filters[name].value = value
}

export const resetUserFilters = () => {
  userStore.currentPage = 1
  userStore.filters = initFilters()
}

devtools(userStore, { name: 'userStore', enabled: true })

import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import { Filter } from '../utils/filtersSerializer'
import { cloneDeep } from 'lodash'

export const initialFilters: Filter = {
  name: {
    value: '',
    action: 'like',
  },
  username: {
    value: '',
    action: 'like',
  }
}

export type UserStore = {
  currentPage: number
  pageSize: number
  filters: Filter
}

export const userStore = proxy<UserStore>({
  currentPage: 1,
  pageSize: 9,
  filters: initialFilters,
})

export const setPageSize = (pageSize: number) => {
  userStore.pageSize = pageSize
}

export const setCurrentPage = (currentPage: number) => {
  userStore.currentPage = currentPage
}

export const addUserFilters = (name: string, value: string) => {
  userStore.filters[name].value = value
}

export const resetUserFilters = () => {
  // TODO: use init func
  userStore.filters = cloneDeep(initialFilters)
}

devtools(userStore, { name: 'userStore', enabled: true })

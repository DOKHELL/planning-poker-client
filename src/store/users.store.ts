// TODO: rename to user.store.ts
import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { Filter } from '../utils/filtersSerializer'

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

export interface IUsersStore {
  totalCount: number
  setTotalCount: (value: number) => void
  currentPage: number
  setCurrentPage: (value: number) => void
  pageSize: number
  setPageSize: (value: number) => void
  filters: Filter
  setFilters: (filters: Filter) => void
}

export const useUsers = create<IUsersStore>()(devtools(
  (set) => ({
    totalCount: 1,
    setTotalCount: (value: number) => set({ totalCount: value }, false, 'useUsers/setPageCount'),
    currentPage: 1,
    setCurrentPage: (value: number) => set({ currentPage: value }, false, 'useUsers/setCurrentPage'),
    pageSize: 10,
    setPageSize: (value: number) => set({ pageSize: value }, false, 'useUsers/setPageSize'),
    filters: initialFilters,
    setFilters: (filters: Filter) => set( { filters: filters, currentPage: 1 }, false, 'useUsers/setFilters'),
  }),
  {
    name: 'users'
  }
))

import { proxy, useSnapshot } from 'valtio'
import { devtools } from 'valtio/utils'

export type UtilsStore = {
  isMobileOpen: boolean
}

export const utilsStore = proxy<UtilsStore>({
  isMobileOpen: false,
})

export const useUtilsStore = () => useSnapshot(utilsStore)

export const setIsMobileOpen = (payload: boolean) => {
  utilsStore.isMobileOpen = payload
}

devtools(utilsStore, { name: 'utilsStore', enabled: true })
import React from 'react'
import { proxy, useSnapshot } from 'valtio'
import { devtools } from 'valtio/utils'

interface ModalState {
  open?: boolean
  variant: 'confirm' | 'error' | 'success' | 'custom'
  title?: string
  text?: string
  onClose?: () => void
  onConfirm?: () => void
  confirmBtnText?: string
  cancelBtnText?: string
  maxWidth?: number
  canClose?: boolean
  children?: React.ReactNode,
  customChildren?: (() => JSX.Element) | null
}

interface ModalStore {
  state: ModalState
}

const defaultHandler = () => true
const defaultState = (): ModalState => ({
  open: false,
  variant: 'custom',
  title: '',
  text: '',
  onClose: defaultHandler,
  onConfirm: defaultHandler,
  confirmBtnText: '',
  cancelBtnText: '',
  maxWidth: 560,
  children: null,
  canClose: true,
})

export const modalStore = proxy<ModalStore>({
  state: defaultState()
})

export const useModalStore = () => useSnapshot(modalStore).state

export const showModal = (props: ModalState) => {
  modalStore.state = {
    ...modalStore.state,
    ...props,
    open: true,
  }
}

export const resetState = () => {
  modalStore.state = defaultState()
}

devtools(modalStore, { name: 'modalStore', enabled: true })

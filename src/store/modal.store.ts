import { proxy } from 'valtio'
import { devtools } from 'valtio/utils'
import React from 'react'

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
  children?: React.ReactNode
}

export const defaultHandler = () => true

export const modalStore = proxy<ModalState>({
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
})

export const showModal = (props: ModalState) => {
  const {
    confirmBtnText,
    cancelBtnText,
    onConfirm,
    text,
    onClose,
    title,
    variant,
    maxWidth = 560,
    children
  } = props

  modalStore.open = true
  modalStore.variant = variant
  modalStore.title = title
  modalStore.text = text
  modalStore.confirmBtnText = confirmBtnText
  modalStore.cancelBtnText = cancelBtnText
  modalStore.onConfirm = onConfirm
  modalStore.onClose = onClose
  modalStore.maxWidth = maxWidth
  modalStore.children = children
}

export const resetState = () => {
  modalStore.open = false
  modalStore.variant = 'custom'
  modalStore.title = ''
  modalStore.text = ''
  modalStore.onClose = defaultHandler
  modalStore.onConfirm = defaultHandler
  modalStore.confirmBtnText = ''
  modalStore.cancelBtnText = ''
  modalStore.maxWidth = 560
  modalStore.children = null
}

devtools(modalStore, { name: 'modalStore', enabled: true })
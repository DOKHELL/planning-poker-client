import React from 'react'
import styles from './Modal.module.scss'
import { useSnapshot } from 'valtio'
import { modalStore, resetState } from '@/store/modal.store'
import Button from '@/components/Button/Button'

const Modal = () => {
  const {
    title,
    text,
    onClose,
    onConfirm,
    open = false,
    confirmBtnText,
    cancelBtnText,
    variant,
    children,
    maxWidth
  } = useSnapshot(modalStore)

  const handleConfirm = () => {
    resetState()
    if(onConfirm) onConfirm()
  }

  const handleClose = () => {
    resetState()
    if (onClose) onClose()
  }


  if(!open) return null

  return (
    <div className={styles.wrapper}>
      <div className={styles.overlay} onClick={handleClose}/>
      <>
        {variant !== 'custom'
          ? <div className={styles.content}>
            <div className={styles.body} style={{ maxWidth }}>
              <div className={styles.title}>{title}</div>
              <div className={styles.text}>{text}</div>
              <div className={styles.buttons}>
                <Button text={confirmBtnText || 'OK'} onClick={handleConfirm}/>
                {variant === 'confirm' && <Button text={cancelBtnText || 'Cancel'} onClick={handleClose}/>}
              </div>
            </div>
          </div>
          : children ? children : null
        }
      </>
    </div>
  )
}

export default Modal
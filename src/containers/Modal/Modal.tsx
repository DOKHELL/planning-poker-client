import styles from './Modal.module.scss'
import { resetState, useModalStore } from '@/store/modal.store'
import Button from '@/components/Button/Button'
import { useTranslation } from 'react-i18next'

const Modal = () => {
  const { t } = useTranslation()
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
  } = useModalStore()

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
                <Button text={confirmBtnText || t('common.ok')} onClick={handleConfirm}/>
                {variant === 'confirm' && <Button text={cancelBtnText || t('common.cancel')} onClick={handleClose}/>}
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

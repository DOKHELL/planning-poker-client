import React from 'react'
import styles from './SideBar.module.scss'
import classNames from 'classnames'

export interface SideBarProps {
  children?: React.ReactNode
  open: boolean
  onClose: () => void
}

const SideBar = (props: SideBarProps) => {
  const { children, open, onClose } = props

  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose}/>}
      <nav className={classNames(styles.sidebar, { [styles.active]: open }) }>
        <div className={styles.sidebarBody}>
          {children}
        </div>
      </nav>
    </>
  )
}

export default SideBar
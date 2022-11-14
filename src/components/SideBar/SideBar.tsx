import React from 'react'
import styles from './SideBar.module.scss'

export interface SideBarProps {
  children?: React.ReactNode
}

const SideBar = (props: SideBarProps) => {
  const { children } = props
  return (
    <nav className={styles.sidebar}>
      <div className={styles.sidebarBody}>
        {children}
      </div>
    </nav>
  )
}

export default SideBar
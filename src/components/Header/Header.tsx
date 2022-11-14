import React from 'react'
import styles from './Header.module.scss'

export interface HeaderProps {
  children?: React.ReactNode
}

const Header = (props: HeaderProps) => {
  const { children } = props

  return (
    <>
      <header className={styles.header}>
        {children}
      </header>
    </>
  )
}

export default Header
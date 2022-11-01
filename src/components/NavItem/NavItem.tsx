import React from 'react'
import styles from './NavItem.module.scss'

export interface NavItemProps {
  id: string
  name: string
  onClick: () => void
  navKey: string
}

const NavItem = (props: NavItemProps) => {
  const { id , name, navKey, onClick } = props

  return (
    <a className={styles.navItem} onClick={onClick} id={id} key={navKey}>{name}</a>
  )
}

export default NavItem
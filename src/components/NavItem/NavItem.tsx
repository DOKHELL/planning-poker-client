import React from 'react'
import styles from './NavItem.module.scss'
import { NavLink } from 'react-router-dom'

type NavItemProps = {
  id: string
  name: string
  navKey: string
  url: string
  onClick?: () => void
}

const NavItem = (props: NavItemProps) => {
  const { id , name, navKey, url, onClick = () => undefined } = props

  return (
    <NavLink to={url} key={navKey} className={styles.navItem} id={id} onClick={onClick}>{name}</NavLink>
  )
}

export default NavItem
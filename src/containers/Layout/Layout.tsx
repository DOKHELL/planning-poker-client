import React from 'react'
import reactLogo from '../../assets/react.svg'
import { Outlet } from 'react-router-dom'
import { HOME, USERS } from '../../constants/routes'
import styles from './Layout.module.scss'
import Header from '../../components/Header/Header'
import SideBar from '../../components/SideBar/SideBar'
import NavItem from '../../components/NavItem/NavItem'

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header>
        <img src={reactLogo} alt=""/>
      </Header>
      <div className={styles.wrapper}>
        <SideBar>
          <NavItem id='home' name='Home' url={HOME} navKey='home'/>
          <NavItem id='users' name='Users' url={USERS} navKey='users'/>
        </SideBar>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout

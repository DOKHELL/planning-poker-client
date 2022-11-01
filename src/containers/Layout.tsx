import React from 'react'
import reactLogo from '../assets/react.svg'
import { Outlet, useNavigate } from 'react-router-dom'
import { HOME, USERS } from '../constants/routes'
import styles from './Layout.module.scss'
import Header from '../components/Header/Header'
import SideBar from '../components/SideBar/SideBar'
import NavItem from '../components/NavItem/NavItem'

const Layout = () => {
  const navigate = useNavigate()

  const handleRedirect = (url: string) => () => {
    navigate(url)
  }

  return (
    <>
      <div>
        <Header>
          <img src={reactLogo} alt=""/>
        </Header>
        <div className={styles.wrapper}>
          <SideBar>
            <NavItem id='Home' name='Home' onClick={handleRedirect(HOME)} navKey='Home'/>
            <NavItem id='Users' name='Users' onClick={handleRedirect(USERS)} navKey='Users'/>
          </SideBar>
          <div className={styles.content}>
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
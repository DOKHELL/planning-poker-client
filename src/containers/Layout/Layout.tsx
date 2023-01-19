import React from 'react'
import reactLogo from '@/assets/react.svg'
import { Outlet } from 'react-router-dom'
import { HOME, USERS } from '@/constants/routes'
import styles from './Layout.module.scss'
import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'
import NavItem from '@/components/NavItem/NavItem'
import { utilsStore, setIsMobileOpen } from '@/store/utils.store'
import { useSnapshot } from 'valtio'
import useMediaQuery from '@/hooks/useMediaQuery'

const Layout = () => {
  const { isMobileOpen } = useSnapshot(utilsStore)
  const isMobile = useMediaQuery('(max-width: 1024px)')

  const handleOpen = () => {
    if(!isMobile){
      return
    }

    setIsMobileOpen(true)
  }

  const handleClose = () => {
    setIsMobileOpen(false)
  }

  const handleNavLink = () => {
    if(!isMobileOpen){
      return
    }

    setIsMobileOpen(false)
  }

  return (
    <div className={styles.app}>
      <Header>
        <img src={reactLogo} alt="" onClick={handleOpen}/>
      </Header>
      <div className={styles.wrapper}>
        <SideBar
          open={isMobileOpen}
          onClose={handleClose}
        >
          <NavItem id='home' name='Home' url={HOME} navKey='home' onClick={handleNavLink}/>
          <NavItem id='users' name='Users' url={USERS} navKey='users' onClick={handleNavLink}/>
        </SideBar>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout

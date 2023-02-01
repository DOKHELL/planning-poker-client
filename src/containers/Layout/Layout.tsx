import reactLogo from '@/assets/react.svg'
import { Outlet } from 'react-router-dom'
import { HOME, USERS } from '@/constants/routes'
import styles from './Layout.module.scss'
import Header from '@/components/Header/Header'
import SideBar from '@/components/SideBar/SideBar'
import NavItem from '@/components/NavItem/NavItem'
import { useUtilsStore, setIsMobileOpen } from '@/store/utils.store'
import useMediaQuery from '@/hooks/useMediaQuery'
import ChangeLanguage from '@/containers/ChangeLanguage/ChangeLanguage'
import { useTranslation } from 'react-i18next'

const Layout = () => {
  const { t } = useTranslation()
  const { isMobileOpen } = useUtilsStore()
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
        <ChangeLanguage/>
      </Header>
      <div className={styles.wrapper}>
        <SideBar
          open={isMobileOpen}
          onClose={handleClose}
        >
          <NavItem id='home' name={t('sidebar.home')} url={HOME} navKey='home' onClick={handleNavLink}/>
          <NavItem id='users' name={t('sidebar.users')} url={USERS} navKey='users' onClick={handleNavLink}/>
        </SideBar>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout

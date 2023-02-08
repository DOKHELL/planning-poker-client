import { Outlet } from 'react-router-dom'
import Header from '@/components/Header/Header'
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Layout

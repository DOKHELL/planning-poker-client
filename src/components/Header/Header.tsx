import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { logout, observerAction, useGameStore } from '@/store/game.store'
import Button from '@/components/Button/Button'
import LogoSvg from '@/assets/icons/logo'
import db from '@/services/firebase'
import styles from './Header.module.scss'
import useNavigation from '@/hooks/useNavigation'
import { NEW_GAME } from '@/constants/routes'

const Header = () => {
  // get current route path
  const [ user, loading ] = useAuthState(db.auth)
  const { id } = useParams<{ id: string }>()
  const { userData } = useGameStore()
  const { handlePushAutoCall } = useNavigation()

  const onClick = () => {
    logout(id, user?.uid)
    db.auth.signOut()
  }

  const setObserver = () => {
    observerAction(id, user?.uid)
  }

  const getButtonText = () => {
    return userData?.observer ? 'Normal mode' : 'Spectator mode'
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo} onClick={handlePushAutoCall(NEW_GAME)}>
          <LogoSvg width={40} viewBox="0 0 40 40"/>
          <span>{id ? id : 'Planning Poker'}</span>
        </div>
        {
          !loading && user && id
            ? <div className={styles.headerButtons}>
              <Button className={styles.logoutBtn} onClick={onClick} text="Log Out"/>
              <Button className={styles.observerActionBtn} onClick={setObserver} text={getButtonText()}/>
            </div>
            : null
        }
      </header>
    </>
  )
}

export default Header

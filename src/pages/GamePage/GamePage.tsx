import { useAuthState } from 'react-firebase-hooks/auth'
import PageLoader from '@/components/PageLoader/PageLoader'
import GamePageInner from '@/pages/GamePage/GamePageInner'
import styles from './GamePage.module.scss'
import db from '../../services/firebase'

const GamePage = () => {
  const [ , loading ] = useAuthState(db.auth)

  if (loading) return <PageLoader/>

  return (
    <div className={styles.gamePage}>
      <GamePageInner />
    </div>
  )
}

export default GamePage

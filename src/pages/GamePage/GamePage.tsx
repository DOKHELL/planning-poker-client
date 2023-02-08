import { memo } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import PageLoader from '@/components/PageLoader/PageLoader'
import db from '../../services/firebase'
import styles from './GamePage.module.scss'
import GamePageInner from '@/pages/GamePage/GamePageInner'

const GamePage = () => {
  const [ , loading ] = useAuthState(db.auth)

  if (loading) return <PageLoader/>

  return (
    <div className={styles.gamePage}>
      <GamePageInner />
    </div>
  )
}

export default memo(GamePage)

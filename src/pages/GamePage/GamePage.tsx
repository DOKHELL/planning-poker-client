import { memo, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { disconnectFromSoket } from '@/store/game.store'
import PageLoader from '@/components/PageLoader/PageLoader'
import GamePageInner from '@/pages/GamePage/GamePageInner'
import styles from './GamePage.module.scss'
import db from '../../services/firebase'

const GamePage = () => {
  const [ , loading ] = useAuthState(db.auth)

  useEffect(() => {
    return () => {
      console.log('Disconnected')
      disconnectFromSoket('leave')
    }
  }, [])

  if (loading) return <PageLoader/>

  return (
    <div className={styles.gamePage}>
      <GamePageInner />
    </div>
  )
}

export default memo(GamePage)

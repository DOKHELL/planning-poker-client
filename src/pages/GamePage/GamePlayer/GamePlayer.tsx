import { memo } from 'react'
import classNames from 'classnames'
import { useGameStore, User } from '@/store/game.store'
import styles from './GamePlayer.module.scss'

type GamePlayerProps = {
  user: User
}

const GamePlayer = ({ user }: GamePlayerProps) => {
  const { showResult } = useGameStore()
  const stylesList = classNames(
    styles.gamePlayer,
    user.observer ? styles.observer : '',
    user.card ? styles.active : '',
    showResult ? styles.showResult : ''
  )
  return (
    <div className={stylesList}>
      <div className={styles.gamePlayerWrapper}>
        <div className={styles.gamePlayerImg}>
          {user.photo ? <img className={styles.gamePlayerPhoto} src={user.photo} alt="photo"/> : ''}
          {showResult && user.card ? <span>{user.card}</span> : ''}
        </div>
        <div className={styles.gamePlayerName}>{user.username}</div>
      </div>
    </div>
  )
}

export default memo(GamePlayer)

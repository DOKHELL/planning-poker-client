import { memo } from 'react'
import classNames from 'classnames'
import { useAuthState } from 'react-firebase-hooks/auth'
import { chooseCard, useGameStore } from '@/store/game.store'
import { useParams } from 'react-router-dom'
import db from '@/services/firebase'
import styles from './GameCards.module.scss'

const GameCards = () => {
  const { id } = useParams<{ id: string }>()
  const [ user ] = useAuthState(db.auth)
  const { users = [], userData } = useGameStore()

  const cards = [ '1', '2', '3', '5', '8', '13', '21', '34', '55', '89','?' ]

  const handleClick = (card: string) => {
    chooseCard(id, card, user?.uid)
  }

  const userCardStyle = (card: string) => {
    const userCard = users.find((u) => u.userId === user?.uid)?.card || ''
    return userCard === card ? styles.active : ''
  }

  return (
    <div className={styles.gameCardsList}>
      {
        userData?.observer ?
          null :
          cards.map((card, index) => {
            return (
              <div
                key={index}
                className={styles.gameCardsCard}
                onClick={() => handleClick(card)}
              >
                <button className={classNames(styles.gameCardsButton, userCardStyle(card))}>
                  <span>{card}</span>
                </button>
              </div>
            )
          })
      }
    </div>
  )
}

export default memo(GameCards)

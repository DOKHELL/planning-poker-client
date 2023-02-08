import { memo } from 'react'
import { useGameStore } from '@/store/game.store'
import styles from './GameStatistic.module.scss'

const GameStatistic = () => {
  const { users = [] } = useGameStore()
  const allPickedCard = users?.map((user) => user.card)?.filter((card) => Number(card))
  const statistic = allPickedCard?.reduce((acc: {[key: string]: number}, c: string): {[key: string]: number} => {
    acc[c] = (acc[c] || 0) + 1
    return acc
  }, {}) || {}
  // @ts-ignore
  const max = Math.max(...Object.values(statistic)) || 0
  const votes = Object.keys(statistic)

  const calcHeight = (vote: string) => {
    return statistic[vote] * 100 / max
  }

  return (
    <div className={styles.gameStatistic}>
      <ul className={styles.gameStatisticList}>
        {
          votes.map((vote) => (
            <li className={calcHeight(vote) === 100 ? styles.mostVoted : ''} key={vote}>
              <div className={styles.gameStatisticItem}>
                <div className={styles.gameStatisticBarContainer}>
                  <div className={styles.gameStatisticBar}>
                    <div className={styles.gameStatisticBarFill} style={{ height: `${calcHeight(vote)}%` }}/>
                  </div>
                </div>
                <div className={styles.gameStatisticCardContainer}>
                  <div className={styles.gameStatisticCardSpacer}/>
                  <div className={styles.gameStatisticValue}>{vote}</div>
                  <div className={styles.gameStatisticVotes}>{statistic[vote]} {statistic[vote] < 2 ? 'Vote' : 'Votes'}</div>
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default memo(GameStatistic)

import { memo } from 'react'
import classNames from 'classnames'
import { useGameStore } from '@/store/game.store'
import GamePlayer from '@/pages/GamePage/GamePlayer/GamePlayer'
import GameCenterBox from '@/pages/GamePage/GameCenterBox/GameCenterBox'
import styles from './GameTable.module.scss'

const GameTable = () => {
  const { users = [] } = useGameStore()
  const filterUsers = users?.filter((user) => user.active) || []
  const startBottom = 0
  const endBottom = Math.ceil(filterUsers?.length * 0.3)
  const startTop = endBottom
  const endTop = endBottom + endBottom
  const startLeft = endTop
  const endLeft = Math.ceil(((filterUsers?.length - (endTop + 1)) / 2)) + endTop
  const startRight = endLeft
  const endRight = (filterUsers?.length - endLeft) + endLeft
  return (
    <div className={styles.gameTable}>
      <div/>
      <div className={classNames(styles.gameTableTop, styles.gameTableSide)}>
        {
          filterUsers.slice(startTop, endTop).map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div/>
      <div className={classNames(styles.gameTableLeft, styles.gameTableSide)}>
        {
          filterUsers.slice(startLeft, endLeft).map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div className={classNames(styles.gameTableCenter, styles.gameTableSide)}>
        <GameCenterBox/>
      </div>
      <div className={classNames(styles.gameTableRight, styles.gameTableSide)}>
        {
          filterUsers.slice(startRight, endRight).map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div/>
      <div className={classNames(styles.gameTableBottom, styles.gameTableSide)}>
        {
          filterUsers.slice(startBottom, endBottom).map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div/>
    </div>
  )
}

export default memo(GameTable)

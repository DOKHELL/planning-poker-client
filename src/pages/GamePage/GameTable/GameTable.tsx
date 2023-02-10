import classNames from 'classnames'
import GamePlayer from '@/pages/GamePage/GamePlayer/GamePlayer'
import GameCenterBox from '@/pages/GamePage/GameCenterBox/GameCenterBox'
import styles from './GameTable.module.scss'
import useTableData from '@/hooks/useTableData'

const GameTable = () => {
  const { bottomUsers, topUsers, leftUsers, rightUsers } = useTableData()

  return (
    <div className={styles.gameTable}>
      <div/>
      <div className={classNames(styles.gameTableTop, styles.gameTableSide)}>
        {
          topUsers?.map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div/>
      <div className={classNames(styles.gameTableLeft, styles.gameTableSide)}>
        {
          leftUsers?.map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div className={classNames(styles.gameTableCenter, styles.gameTableSide)}>
        <GameCenterBox/>
      </div>
      <div className={classNames(styles.gameTableRight, styles.gameTableSide)}>
        {
          rightUsers?.map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div/>
      <div className={classNames(styles.gameTableBottom, styles.gameTableSide)}>
        {
          bottomUsers?.map((user) => {
            return <GamePlayer user={user} key={user.userId} />
          })
        }
      </div>
      <div/>
    </div>
  )
}

export default GameTable

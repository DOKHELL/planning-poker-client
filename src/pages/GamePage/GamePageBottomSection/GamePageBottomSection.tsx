import { memo } from 'react'
import { useGameStore } from '@/store/game.store'
import GameStatistic from '@/pages/GamePage/GameStatistic/GameStatistic'
import GameCards from '@/pages/GamePage/GameCards/GameCards'

const GamePageBottomSection = () => {
  const { showResult } = useGameStore()
  return (
    <>
      {
        showResult
          ? <GameStatistic/>
          : <GameCards/>
      }
    </>
  )
}

export default memo(GamePageBottomSection)

import React from 'react'
import { isAnyoneChooseCard, useGameStore, resultAction } from '@/store/game.store'
import Button from '@/components/Button/Button'
import { useParams } from 'react-router-dom'

const GameCenterBox = () => {
  const { id } = useParams<{ id: string }>()
  const { showResult } = useGameStore()

  const handleClick = () => {
    resultAction(id)
  }

  if (isAnyoneChooseCard() && !showResult) {
    return <Button text="Reveal cards" onClick={handleClick} />
  }
  if (showResult) {
    return <Button text="Start new voting" onClick={handleClick} />
  }
  return (
    <>
      {
        'Pick your cards!'
      }
    </>
  )
}

export default GameCenterBox

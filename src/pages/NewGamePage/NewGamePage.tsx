import React, { useState } from 'react'
import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import styles from './NewGamePage.module.scss'
import useNavigation from '@/hooks/useNavigation'
import { START_GAME } from '@/constants/routes'

const NewGamePage = () => {
  const [ name, setName ] = useState<string>('')
  const { handlePushAutoCall } = useNavigation()

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <div className={styles.newGamePage}>
      <div className={styles.newGamePageContainer}>
        <div className={styles.newGamePageHead}>Choose a name for your game.</div>
        <Input maxLength={14} onChange={handleNameChange} value={name} className={styles.newGamePageInput} id="game-name" name="name" placeholder="Game's name"/>
        <Button disabled={name.length < 3} text="Create game" onClick={handlePushAutoCall(START_GAME(name))}/>
      </div>
    </div>
  )
}

export default NewGamePage

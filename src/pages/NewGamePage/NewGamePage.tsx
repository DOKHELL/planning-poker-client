import Input from '@/components/Input/Input'
import Button from '@/components/Button/Button'
import styles from './NewGamePage.module.scss'

const NewGamePage = () => {
  return (
    <div className={styles.newGamePage}>
      <div className={styles.newGamePageContainer}>
        <div className={styles.newGamePageHead}>Choose a name for your game.</div>
        <Input className={styles.newGamePageInput} id="game-name" name="name" placeholder="Game's name"/>
        <Button text="Create game"/>
      </div>
    </div>
  )
}

export default NewGamePage

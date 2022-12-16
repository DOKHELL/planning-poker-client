import React from 'react'
import BackArr from '../../assets/icons/back-arr.svg'
import styles from './BackButton.module.scss'

interface BackButtonProps {
  onBack: () => void
  text?: string
}

const BackButton = (props: BackButtonProps) => {
  const { text, onBack } = props
  return (
    <button id='back-button' onClick={onBack} className={styles.backButton}>
      <img className={styles.icon} src={BackArr} alt="arr"/>
      <h4>{text || 'Go back to previous page'}</h4>
    </button>
  )
}

export default BackButton
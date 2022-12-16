import React from 'react'
import styles from './Warning.module.scss'

interface WarningProps {
  title: string
  text?: string
  buttonText: string
  onClick?: () => void
}

const Warning = (props: WarningProps) => {
  const { title, text, buttonText,  onClick } = props

  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {text && <h3 className={styles.text}>{text}</h3>}
      </div>
      <button className={styles.button} onClick={onClick}>
        <h5>{buttonText}</h5>
      </button>
    </div>
  )
}

export default Warning
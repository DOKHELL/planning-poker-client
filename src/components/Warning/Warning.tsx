import styles from './Warning.module.scss'
import Button from '@/components/Button/Button'

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
      <div className={styles.button}>
        <Button text={buttonText} onClick={onClick}/>
      </div>
    </div>
  )
}

export default Warning
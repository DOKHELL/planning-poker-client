import styles from './Button.module.scss'

interface ButtonProps {
  type?: 'submit'
  text?: string
  onClick?: () => void
}
const Button = (props: ButtonProps) => {
  const { type, text, onClick } = props

  return (
    <button className={styles.button} type={type} onClick={onClick}>
      <h5>{text}</h5>
    </button>
  )
}

export default Button
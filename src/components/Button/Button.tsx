import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps {
  type?: 'submit'
  text?: string | null | undefined
  className?: string
  disabled?: boolean
  onClick?: () => void
}
const Button = (props: ButtonProps) => {
  const { type, text, onClick } = props

  return (
    <button disabled={props.disabled} className={classNames(styles.button, props.className)} type={type} onClick={onClick}>
      <h5>{text}</h5>
    </button>
  )
}

export default Button

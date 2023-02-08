import React from 'react'
import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'
import styles from './Input.module.scss'

export interface InputProps {
  id: string
  type?: string
  name: string
  placeholder: string
  className?: string
  value?: string | number
  label?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  formRegister?: UseFormRegisterReturn
}

const Input = (props: InputProps) => {
  const {
    id,
    name,
    value,
    className,
    formRegister,
    onChange = () => undefined,
    type = 'text',
    placeholder = 'Enter Text',
    disabled = false
  } = props

  return (
    <div className={classNames(styles.textField, styles.textFieldFloating, className)}>
      <input
        className={styles.textFieldInput}
        name={name}
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...formRegister}
      />
    </div>
  )
}

export default Input

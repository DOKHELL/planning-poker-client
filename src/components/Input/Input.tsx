import React from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps {
  id: string
  type?: string
  name: string
  placeholder: string
  value?: string | number
  label: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  formRegister?: UseFormRegisterReturn
}

const Input = (props: InputProps) => {
  const {
    id,
    name,
    value,
    formRegister,
    onChange = () => undefined,
    type = 'text',
    label = 'Input',
    placeholder = 'Enter Text',
    disabled = false
  } = props

  return (
    <div className={classNames(styles.textField, styles.textFieldFloating)}>
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
      <label className={styles.textFieldLabel} htmlFor={id}>{label}</label>
    </div>
  )
}

export default Input
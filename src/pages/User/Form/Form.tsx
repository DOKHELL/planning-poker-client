import React from 'react'
import { useFormContext } from 'react-hook-form'
import Input from '@/components/Input/Input'
import styles from './Form.module.scss'

type FormProps = {
  children?: React.ReactNode
}

const Form = (props: FormProps) => {
  const { children } = props
  const methods = useFormContext()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Input
            id='name'
            name='name'
            placeholder='Enter Name'
            label='Name'
            formRegister={methods.register('name', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='email'
            name='email'
            placeholder='Enter Email'
            label='Email'
            formRegister={methods.register('email', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='phone'
            name='phone'
            placeholder='Enter Phone'
            label='Phone'
            formRegister={methods.register('phone', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='username'
            name='username'
            placeholder='Enter Username'
            label='Username'
            formRegister={methods.register('username', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='website'
            name='website'
            placeholder='Enter Website'
            label='Website'
            formRegister={methods.register('website', { required: true })}
          />
        </div>
      </div>
      {children}
    </>
  )
}

export default Form
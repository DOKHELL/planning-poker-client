import React from 'react'
import { useForm } from 'react-hook-form'
import Input from '../../../components/Input/Input'
import styles from './Form.module.scss'
import { useCreateUser } from '../../../hooks/mutations/user.mutation'
import useNavigation from '../../../hooks/useNavigation'
import { USERS } from '../../../constants/routes'
import { useQueryClient } from '@tanstack/react-query'

type FormValues = {
  name: string
  email: string
  phone: string
  username: string
  website: string
}
const defaultValues = {
  name: '',
  email: '',
  phone: '',
  username: '',
  website: ''
}

const Form = () => {
  const { handlePush } = useNavigation()
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: defaultValues
  })
  const queryClient = useQueryClient()
  const onSuccess = async () => {
    await queryClient.invalidateQueries({ queryKey: [ 'listUser' ] })
    handlePush(USERS)
  }

  const { mutate } = useCreateUser({ onSuccess })

  const handleCreate = (data: FormValues) => {
    mutate(data as unknown as void)
  }

  return (
    <form onSubmit={handleSubmit(handleCreate)}>
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <Input
            id='name'
            name='name'
            placeholder='Enter Name'
            label='Name'
            formRegister={register('name', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='email'
            name='email'
            placeholder='Enter Email'
            label='Email'
            formRegister={register('email', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='phone'
            name='phone'
            placeholder='Enter Phone'
            label='Phone'
            formRegister={register('phone', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='username'
            name='username'
            placeholder='Enter Username'
            label='Username'
            formRegister={register('username', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <Input
            id='website'
            name='website'
            placeholder='Enter Website'
            label='Website'
            formRegister={register('website', { required: true })}
          />
        </div>
        <div className={styles.item}>
          <button className={styles.button} type='submit'>
            <h5>Create</h5>
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form
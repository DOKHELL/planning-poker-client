import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import useNavigation from '@/hooks/useNavigation'
import { useQueryClient } from '@tanstack/react-query'
import { USERS } from '@/constants/routes'
import { useCreateUser } from '@/hooks/mutations/user.mutation'
import PageLoader from '@/components/PageLoader/PageLoader'
import Form from '../../Form/Form'
import styles from './UserCreateForm.module.scss'
import { showModal } from '@/store/modal.store'
import Button from '@/components/Button/Button'

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
const UserCreateForm = () => {
  const { handlePushAutoCall } = useNavigation()
  const methods = useForm<FormValues>({
    defaultValues: defaultValues
  })
  const { handleSubmit } = methods
  const queryClient = useQueryClient()
  const onSuccess = async () => {
    await queryClient.resetQueries({ queryKey: [ 'listUser' ] })
    showModal({
      variant: 'success',
      title: 'Success',
      text: 'You successfully created user',
      onConfirm: handlePushAutoCall(USERS),
      onClose: handlePushAutoCall(USERS)
    })
  }

  const { mutate, isLoading } = useCreateUser({ onSuccess })

  const handleCreate = (data: FormValues) => {
    mutate(data)
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleCreate)} >
        {isLoading && <PageLoader opacity={0.7}/>}
        <Form>
          <div className={styles.wrapper}>
            <Button type='submit' text='Create'/>
          </div>
        </Form>
      </form>
    </FormProvider>
  )
}

export default UserCreateForm
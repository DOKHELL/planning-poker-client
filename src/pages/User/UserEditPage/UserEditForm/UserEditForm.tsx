import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useQueryClient } from '@tanstack/react-query'
import { USER_DETAILS } from '@/constants/routes'
import { useUpdateUser } from '@/hooks/mutations/user.mutation'
import PageLoader from '@/components/PageLoader/PageLoader'
import Form from '../../Form/Form'
import styles from './UserEditForm.module.scss'
import useHandlePush from '@/hooks/useNavigation'
import { User } from '@/api/user.api'
import { showModal } from '@/store/modal.store'
import Button from '@/components/Button/Button'

type FormValues = {
  name: string
  email: string
  phone: string
  username: string
  website: string
}

type UserEditFormProps = {
  id: string
  name: string,
  email: string,
  phone: string,
  username: string,
  website: string
}

const UserEditForm = (props: UserEditFormProps) => {
  const { id, name, email, phone, username, website } = props
  const { handlePushAutoCall } = useHandlePush()

  const methods = useForm<FormValues>({
    defaultValues: {
      name,
      email,
      phone,
      username,
      website
    }
  })
  const { handleSubmit } = methods
  const queryClient = useQueryClient()
  const onSuccess = async (data: User) => {
    await queryClient.resetQueries({ queryKey: [ 'listUser' ] })
    queryClient.setQueriesData({ queryKey: [ 'findUser', String(data.id) ] }, data)
    showModal({
      variant: 'success',
      title: 'Success',
      text: 'You successfully edited user',
      onConfirm: handlePushAutoCall(USER_DETAILS(id)),
      onClose: handlePushAutoCall(USER_DETAILS(id))
    })
  }

  const { mutate, isLoading } = useUpdateUser({ onSuccess })

  const handleModal = (data: FormValues) => {
    showModal({
      variant: 'confirm',
      title: 'Confirm',
      text: 'Are you sure want ot edit this user?',
      onConfirm: handleUpdate(data)
    })
  }

  const handleUpdate = (data: FormValues) => () => {
    mutate({
      id,
      ...data
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleModal)} >
        {isLoading && <PageLoader opacity={0.7}/>}
        <Form>
          <div className={styles.wrapper}>
            <Button text='Confirm' type='submit'/>
            <Button text='Cancel' onClick={handlePushAutoCall(USER_DETAILS(String(id)))}/>
          </div>
        </Form>
      </form>
    </FormProvider>
  )
}

export default UserEditForm
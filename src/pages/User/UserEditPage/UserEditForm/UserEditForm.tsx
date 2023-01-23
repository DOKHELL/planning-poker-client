import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { USER_DETAILS } from '@/constants/routes'
import { useUpdateUser } from '@/hooks/mutations/user.mutation'
import PageLoader from '@/components/PageLoader/PageLoader'
import Form from '../../Form/Form'
import styles from './UserEditForm.module.scss'
import useHandlePush from '@/hooks/useNavigation'
import { showModal } from '@/store/modal.store'
import Button from '@/components/Button/Button'
import { useFindUser } from '@/hooks/queries/user.query'
import { useParams } from 'react-router-dom'

type FormValues = {
  name: string
  email: string
  phone: string
  username: string
  website: string
}

const UserEditForm = () => {
  const { id = '' } = useParams<{ id: string }>()
  const { data } = useFindUser(id)
  const { handlePushAutoCall } = useHandlePush()

  const methods = useForm<FormValues>({
    defaultValues: {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      username: data?.username,
      website: data?.website
    }
  })
  const { handleSubmit } = methods

  const { mutate, isLoading } = useUpdateUser()

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
    }, {
      onSuccess: () => {
        showModal({
          variant: 'success',
          title: 'Success',
          text: 'You successfully edited user',
          onConfirm: handlePushAutoCall(USER_DETAILS(id)),
          onClose: handlePushAutoCall(USER_DETAILS(id))
        })
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleModal)} >
        {isLoading && <PageLoader opacity={0.7}/>}
        <Form>
          <div className={styles.wrapper}>
            <Button text='Confirm' type='submit'/>
            <Button text='Cancel' onClick={handlePushAutoCall(USER_DETAILS(id))}/>
          </div>
        </Form>
      </form>
    </FormProvider>
  )
}

export default UserEditForm

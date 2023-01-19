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
  const { handlePush, handlePushAutoCall } = useHandlePush()

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
    queryClient.setQueriesData([ 'findUser' ], data)
    handlePush(USER_DETAILS(id))
  }

  const { mutate, isLoading } = useUpdateUser({ onSuccess })

  const handleUpdate = (data: FormValues) => {
    mutate({
      id,
      ...data
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleUpdate)} >
        {isLoading && <PageLoader opacity={0.7}/>}
        <Form>
          <div className={styles.wrapper}>
            <button className={styles.button} type='submit'>
              <h5>Confirm</h5>
            </button>
            <button className={styles.button} onClick={handlePushAutoCall(USER_DETAILS(id as string))}>
              <h5>Cancel</h5>
            </button>
          </div>
        </Form>
      </form>
    </FormProvider>
  )
}

export default UserEditForm
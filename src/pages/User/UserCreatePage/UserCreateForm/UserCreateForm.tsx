import { FormProvider, useForm } from 'react-hook-form'
import useNavigation from '@/hooks/useNavigation'
import { USERS } from '@/constants/routes'
import { useCreateUser } from '@/hooks/mutations/user.mutation'
import PageLoader from '@/components/PageLoader/PageLoader'
import Form from '../../Form/Form'
import styles from './UserCreateForm.module.scss'
import { showModal } from '@/store/modal.store'
import Button from '@/components/Button/Button'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  const { handlePushAutoCall } = useNavigation()
  const methods = useForm<FormValues>({
    defaultValues: defaultValues
  })
  const { handleSubmit } = methods
  const { mutate, isLoading } = useCreateUser()

  const handleCreate = (data: FormValues) => {
    mutate(data, {
      onSuccess: () => {
        showModal({
          variant: 'success',
          title: t('users.modal.success'),
          text: t('users.modal.successCreateText'),
          onConfirm: handlePushAutoCall(USERS),
          onClose: handlePushAutoCall(USERS)
        })
      }
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleCreate)} >
        {isLoading && <PageLoader opacity={0.7}/>}
        <Form>
          <div className={styles.wrapper}>
            <Button type='submit' text={t('users.form.create')}/>
          </div>
        </Form>
      </form>
    </FormProvider>
  )
}

export default UserCreateForm

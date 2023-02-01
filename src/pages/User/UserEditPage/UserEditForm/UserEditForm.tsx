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
  website: '',
}

const UserEditForm = () => {
  const { t } = useTranslation()
  const { id = '' } = useParams<{ id: string }>()
  const { data = defaultValues } = useFindUser(id)
  const { name, email, phone, username, website } = data
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

  const { mutate, isLoading } = useUpdateUser()

  const handleModal = (data: FormValues) => {
    showModal({
      variant: 'confirm',
      title: t('users.modal.confirm'),
      text: t('users.modal.sureEdit'),
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
          title: t('users.modal.success'),
          text: t('users.modal.successEditText'),
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
        <Form isCreate={false}>
          <div className={styles.wrapper}>
            <Button text={t('users.form.confirm')} type='submit'/>
            <Button text={t('users.form.cancel')} onClick={handlePushAutoCall(USER_DETAILS(id))}/>
          </div>
        </Form>
      </form>
    </FormProvider>
  )
}

export default UserEditForm

import Block from '@/components/Block/Block'
import Title from '@/components/Title/Title'
import BackButton from '@/components/BackButton/BackButton'
import useHandlePush from '@/hooks/useNavigation'
import { USER_DETAILS } from '@/constants/routes'
import UserEditForm from './UserEditForm/UserEditForm'
import { useParams } from 'react-router-dom'
import { useFindUser } from '@/hooks/queries/user.query'
import PageLoader from '@/components/PageLoader/PageLoader'
import { useTranslation } from 'react-i18next'

const UserEditPage = () => {
  const { t } = useTranslation()
  const { handlePushAutoCall } = useHandlePush()
  const { id = '' } = useParams<{ id: string }>()
  const { isLoading, isError, error } = useFindUser(id)

  if(isLoading) return <PageLoader/>
  if(isError) return <div>{t('common.error', { message: error.message })}</div>

  return (
    <>
      <BackButton text={t('common.back')} onBack={handlePushAutoCall(USER_DETAILS(id))}/>
      <Block>
        <Title title={t('users.form.editTitle')}/>
        <UserEditForm/>
      </Block>
    </>
  )
}

export default UserEditPage

import Block from '@/components/Block/Block'
import Title from '@/components/Title/Title'
import BackButton from '@/components/BackButton/BackButton'
import useHandlePush from '@/hooks/useNavigation'
import { USERS } from '@/constants/routes'
import UserCreateForm from './UserCreateForm/UserCreateForm'
import { useTranslation } from 'react-i18next'

const UserCreatePage = () => {
  const { t } = useTranslation()
  const { handlePushAutoCall } = useHandlePush()

  return (
    <>
      <BackButton text={t('common.back')} onBack={handlePushAutoCall(USERS)}/>
      <Block>
        <Title title={t('users.form.createTitle')}/>
        <UserCreateForm/>
      </Block>
    </>
  )
}

export default UserCreatePage

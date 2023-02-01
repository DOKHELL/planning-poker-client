import Filters from './Filters/Filters'
import List from './List/List'
import Pagination from './Pagination/Pagination'
import Title from '@/components/Title/Title'
import Block from '@/components/Block/Block'
import { USER_CREATE } from '@/constants/routes'
import useHandlePush from '@/hooks/useNavigation'
import Warning from '@/components/Warning/Warning'
import { useTranslation } from 'react-i18next'

const UserListPage = () => {
  const { t } = useTranslation()
  const { handlePushAutoCall } = useHandlePush()

  return (
    <>
      <Warning
        title={t('users.list.warningTitle')}
        buttonText={t('users.list.warningBtn')}
        onClick={handlePushAutoCall(USER_CREATE)}
      />
      <Block>
        <Title title={t('users.list.title')}/>
        <Filters/>
        <List/>
        <Pagination/>
      </Block>
    </>

  )
}

export default UserListPage
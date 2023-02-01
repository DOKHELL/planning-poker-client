import { useParams } from 'react-router-dom'
import { useFindUser } from '@/hooks/queries/user.query'
import styles from './UserDetailsPage.module.scss'
import Title from '@/components/Title/Title'
import Block from '@/components/Block/Block'
import BackButton from '@/components/BackButton/BackButton'
import { USERS, USER_EDIT } from '@/constants/routes'
import useHandlePush from '@/hooks/useNavigation'
import PageLoader from '@/components/PageLoader/PageLoader'
import editIcon from '@/assets/icons/edit.svg'
import { useTranslation } from 'react-i18next'

const UserDetailsPage = () => {
  const { t } = useTranslation()
  const { handlePushAutoCall } = useHandlePush()
  const { id } = useParams<{ id: string }>()
  const { data: user, isLoading, isError, error } = useFindUser(id || '')
  if(isLoading) return <PageLoader/>
  if(isError) return <div>{t('common.error', { message: error.message })}</div>

  return (
    <>
      <BackButton text={t('common.back')} onBack={handlePushAutoCall(USERS)}/>
      <Block>
        <Title title={t('users.details.title')}>
          <img className={styles.icon} src={editIcon} alt="edit" onClick={handlePushAutoCall(USER_EDIT(user.id))}/>
        </Title>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>{t('users.details.id')}</h3>
            <p className={styles.itemText}>{user.id}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>{t('users.details.name')}</h3>
            <p className={styles.itemText}>{user.name}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>{t('users.details.email')}</h3>
            <p className={styles.itemText}>{user.email}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>{t('users.details.phone')}</h3>
            <p className={styles.itemText}>{user.phone}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>{t('users.details.username')}</h3>
            <p className={styles.itemText}>{user.username}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>{t('users.details.website')}</h3>
            <p className={styles.itemText}>{user.website}</p>
          </div>
        </div>
      </Block>
    </>

  )
}

export default UserDetailsPage
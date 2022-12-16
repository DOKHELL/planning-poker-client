import React from 'react'
import { useParams } from 'react-router-dom'
import { useFindUser } from '../../hooks/queries/user.query'
import styles from './UserDetailsPage.module.scss'
import Title from '../../components/Title/Title'
import Block from '../../components/Block/Block'
import BackButton from '../../components/BackButton/BackButton'
import { USERS } from '../../constants/routes'
import useHandlePush from '../../hooks/useNavigation'

const UserDetailsPage = () => {
  const { handlePushAutoCall } = useHandlePush()
  const { id } = useParams<{ id: string }>()
  const { data: user, isLoading, isError, error } = useFindUser(id || '')
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <>
      <BackButton onBack={handlePushAutoCall(USERS)}/>
      <Block>
        <Title title='User Details'/>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>ID</h3>
            <p className={styles.itemText}>{user.id}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Name</h3>
            <p className={styles.itemText}>{user.name}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Email</h3>
            <p className={styles.itemText}>{user.email}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Phone</h3>
            <p className={styles.itemText}>{user.phone}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Username</h3>
            <p className={styles.itemText}>{user.username}</p>
          </div>
          <div className={styles.item}>
            <h3 className={styles.itemTitle}>Website</h3>
            <p className={styles.itemText}>{user.website}</p>
          </div>
        </div>
      </Block>
    </>

  )
}

export default UserDetailsPage
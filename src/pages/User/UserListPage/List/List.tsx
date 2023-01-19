import React from 'react'
import styles from './List.module.scss'
import { useListUser } from '@/hooks/queries/user.query'
import BlockLoader from '@/components/BlockLoader/BlockLoader'
import { USER_DETAILS } from '@/constants/routes'
import useNavigation from '@/hooks/useNavigation'

const List = () => {
  const { handlePushAutoCall } = useNavigation()
  const { data, isFetching, error } = useListUser()

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <>
            {isFetching && <tr><td className={styles.loader}><BlockLoader/></td></tr>}
            {data && !!data?.users.length ? data?.users.map(obj => (
              <tr key={obj.id} onClick={handlePushAutoCall(USER_DETAILS(obj.id))}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.phone}</td>
                <td>{obj.username}</td>
                <td>{obj.website}</td>
              </tr>
            )) : <tr><td className={styles.noFound}>No Found</td></tr>}
          </>
        </tbody>
      </table>
    </div>
  )
}

export default List

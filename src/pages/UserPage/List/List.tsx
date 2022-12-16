import React from 'react'
import styles from './List.module.scss'
import { useListUser } from '../../../hooks/queries/user.query'
import BlockLoader from '../../../components/BlockLoader/BlockLoader'
import { USER_DETAILS } from '../../../constants/routes'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const navigate = useNavigate()
  const { data, isFetching, error } = useListUser()
  const keys = Object.keys(data?.users?.length ? data.users[0] : [])

  const handleRedirect = (id: string) => () => {
    navigate(USER_DETAILS(id))
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.trHead}>
          {keys.length ? keys.map((item, index) => (
            <th className={styles.th} key={index}>
              {item}
            </th>
          )): <th className={styles.th}>No Found</th>}
        </tr>
      </thead>
      <tbody className={styles.tbody}>
        <>
          {isFetching && <tr><td><BlockLoader/></td></tr>}
          {data && !!data?.users.length ? data?.users.map((obj, index) => (
            <tr className={styles.trBody} key={index}>
              {!!keys?.length && keys.map((item: string, index: number) => {
                // @ts-ignore
                const value = obj[item]
                return (
                  <td className={styles.td} key={index} onClick={handleRedirect(obj.id)}>
                    {value}
                  </td>
                )
              })}
            </tr>
          )) : <tr><td className={styles.td}>No Found</td></tr>}
        </>
      </tbody>
    </table>
  )
}

export default List

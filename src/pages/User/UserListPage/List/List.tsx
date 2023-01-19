import React from 'react'
import styles from './List.module.scss'
import { useListUser } from '@/hooks/queries/user.query'
import BlockLoader from '@/components/BlockLoader/BlockLoader'
import { USER_DETAILS } from '@/constants/routes'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const navigate = useNavigate()
  const { data, isFetching, error } = useListUser()

  const handleRedirect = (id: string) => () => {
    navigate(USER_DETAILS(id))
  }

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
              <tr key={obj.id} onClick={handleRedirect(obj.id)}>
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
    // <table className={styles.table}>
    //   <thead className={styles.thead}>
    //     <tr className={styles.trHead}>
    //       {keys.length ? keys.map((item, index) => (
    //         <th className={styles.th} key={index}>
    //           {item}
    //         </th>
    //       )): <th className={styles.th}>No Found</th>}
    //     </tr>
    //   </thead>
    //   <tbody className={styles.tbody}>
    //     <>
    //       {isFetching && <tr><td><BlockLoader/></td></tr>}
    //       {data && !!data?.users.length ? data?.users.map((obj, index) => (
    //         <tr className={styles.trBody} key={index}>
    //           {!!keys?.length && keys.map((item: string, index: number) => {
    //             // @ts-ignore
    //             const value = obj[item]
    //             return (
    //               <td className={styles.td} key={index} onClick={handleRedirect(obj.id)}>
    //                 {value}
    //               </td>
    //             )
    //           })}
    //         </tr>
    //       )) : <tr><td className={styles.td}>No Found</td></tr>}
    //     </>
    //   </tbody>
    // </table>
  )
}

export default List

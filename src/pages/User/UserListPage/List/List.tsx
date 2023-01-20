import React from 'react'
import styles from './List.module.scss'
import { useListUser } from '@/hooks/queries/user.query'
import BlockLoader from '@/components/BlockLoader/BlockLoader'
import { USER_DETAILS } from '@/constants/routes'
import useNavigation from '@/hooks/useNavigation'
import viewIcon from '@/assets/icons/view.svg'
import deleteIcon from '@/assets/icons/delete.svg'
import { showModal } from '@/store/modal.store'
import { useDeleteUser } from '@/hooks/mutations/user.mutation'
import { useQueryClient } from '@tanstack/react-query'
import PageLoader from '@/components/PageLoader/PageLoader'

const List = () => {
  const { handlePushAutoCall } = useNavigation()
  const { data, isFetching, error } = useListUser()
  const queryClient = useQueryClient()

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const onSuccess = () => {
    showModal({
      variant: 'success',
      title: 'Success',
      text: 'You successfully deleted user',
      onConfirm: async () => {
        await queryClient.resetQueries({ queryKey: [ 'listUser' ] })
      }
    })
  }

  const { mutate, isLoading } = useDeleteUser({ onSuccess })

  const handleModal = (name: string, id: string) => () => {
    showModal({
      variant: 'confirm',
      title: 'Confirm',
      text: `Are sure want to delete ${name}?`,
      onConfirm: () => mutate({ id })
    })
  }

  return (
    <div className={styles.wrapper}>
      {isLoading && <PageLoader opacity={0.7}/>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <>
            {isFetching && <tr><td className={styles.loader}><BlockLoader/></td></tr>}
            {data && !!data?.users.length ? data?.users.map(obj => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.phone}</td>
                <td>{obj.username}</td>
                <td>{obj.website}</td>
                <td><div className={styles.action}>
                  <img src={viewIcon} alt="edit" onClick={handlePushAutoCall(USER_DETAILS(obj.id))}/>
                  <img src={deleteIcon} alt="delete" onClick={handleModal(obj.name, obj.id)}/>
                </div></td>
              </tr>
            )) : <tr><td className={styles.noFound}>No Found</td></tr>}
          </>
        </tbody>
      </table>
    </div>
  )
}

export default List

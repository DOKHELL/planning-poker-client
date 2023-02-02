import styles from './List.module.scss'
import { useListUser } from '@/hooks/queries/user.query'
import BlockLoader from '@/components/BlockLoader/BlockLoader'
import { USER_DETAILS } from '@/constants/routes'
import useNavigation from '@/hooks/useNavigation'
import viewIcon from '@/assets/icons/view.svg'
import deleteIcon from '@/assets/icons/delete.svg'
import { showModal } from '@/store/modal.store'
import { useDeleteUser } from '@/hooks/mutations/user.mutation'
import PageLoader from '@/components/PageLoader/PageLoader'
import { useTranslation } from 'react-i18next'

const List = () => {
  const { t } = useTranslation()
  const { handlePushAutoCall } = useNavigation()
  const { data, isFetching, error } = useListUser()

  const { mutate, isLoading } = useDeleteUser()

  const handleModal = (name: string, id: string) => () => {
    showModal({
      variant: 'confirm',
      title: t('users.modal.confirm'),
      text: t('users.modal.sureDelete', { name }),
      onConfirm: () => mutate({ id }, {
        onSuccess: () => {
          showModal({
            variant: 'success',
            title: t('users.modal.success'),
            text: t('users.modal.successDeleteText'),
          })
        }
      })
    })
  }

  if (error) {
    return <div>{t('common.error', { message: error.message })}</div>
  }

  return (
    <div className={styles.wrapper}>
      {isLoading && <PageLoader opacity={0.7}/>}
      <table className={styles.table}>
        <thead>
          <tr>
            <th>{t('users.list.grid.id')}</th>
            <th>{t('users.list.grid.name')}</th>
            <th>{t('users.list.grid.email')}</th>
            <th>{t('users.list.grid.phone')}</th>
            <th>{t('users.list.grid.username')}</th>
            <th>{t('users.list.grid.website')}</th>
            <th>{t('common.action')}</th>
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
            )) : <tr><td className={styles.noFound}>{t('common.noFound')}</td></tr>}
          </>
        </tbody>
      </table>
    </div>
  )
}

export default List

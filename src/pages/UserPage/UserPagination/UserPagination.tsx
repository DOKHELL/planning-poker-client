import React from 'react'
import Pagination from '../../../components/Pagination/Pagination'
import { useUsers } from '../../../store/users.store'
import styles from './UserPagination.module.scss'

const UserPagination = () => {
  const { pageSize, setPageSize, currentPage, setCurrentPage, totalCount } = useUsers()

  const handlePagination = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={styles.wrapper}>
      <select name="pageSize" id="pageSize" value={pageSize} onChange={handlePagination} className={styles.pageSize}>
        <option value='10'>10</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
      </select>
      {totalCount > pageSize && <Pagination
        className={styles.userPagination}
        currentPage={currentPage}
        totalCount={totalCount}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />}
    </div>
  )
}

export default UserPagination
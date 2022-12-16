import React from 'react'
import ShaderPagination from '../../../components/Pagination/Pagination'
import styles from './Pagination.module.scss'
import { useListUser } from '../../../hooks/queries/user.query'
import { setPageSize, setCurrentPage, userStore } from '../../../store/user.store'
import { useSnapshot } from 'valtio'

const Pagination = () => {
  const { pageSize, currentPage } = useSnapshot(userStore)
  const { data } = useListUser()
  const total = data?.meta?.totalCount

  const handlePagination = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageSize(Number(e.target.value))
    setCurrentPage(1)
  }

  return (
    <div className={styles.wrapper}>
      <select name="pageSize" id="pageSize" value={pageSize} onChange={handlePagination} className={styles.pageSize}>
        <option value='9'>9</option>
        <option value='15'>15</option>
        <option value='30'>30</option>
      </select>
      {!!total && total > pageSize && <ShaderPagination
        className={styles.userPagination}
        currentPage={currentPage}
        totalCount={total}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />}
    </div>
  )
}

export default Pagination
import React from 'react'
import Pagination from '../../../components/Pagination/Pagination'
import styles from './UserPagination.module.scss'
import { useListUser } from '../../../hooks/queries/user.query'
import { filtersSerializer } from '../../../utils/filtersSerializer'
import { useSnapshot } from 'valtio'
import { userStore, setPageSize, setCurrentPage } from '../../../store/user.store'
import useDebounce from '../../../hooks/useDebounce'

const UserPagination = () => {
  const { pageSize, currentPage, filters } = useSnapshot(userStore)
  const debouncedFilters = useDebounce(filters, 700)
  const { data } = useListUser({
    pageSize,
    currentPage,
    filters: filtersSerializer(debouncedFilters)
  })

  const total = data?.meta?.totalCount

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
      {!!total && total > pageSize && <Pagination
        className={styles.userPagination}
        currentPage={currentPage}
        totalCount={total}
        pageSize={pageSize}
        onPageChange={page => setCurrentPage(page)}
      />}
    </div>
  )
}

export default UserPagination
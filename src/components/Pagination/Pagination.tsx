import React from 'react'
import classnames from 'classnames'
import usePagination, { DOTS } from '@/hooks/usePagination'
import styles from './Pagination.module.scss'

interface IPaginationProps {
  onPageChange: (page: number) => void
  totalCount: number
  siblingCount?: number
  currentPage: number
  pageSize: number
  className: string
}

const Pagination = (props: IPaginationProps) => {
  const {
    onPageChange,
    totalCount,
    currentPage,
    pageSize,
    className,
    siblingCount = 1
  } = props

  const { paginationRange } = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  })

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  }

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  }

  const lastPage = paginationRange && paginationRange[paginationRange.length - 1]
  return (
    <ul
      className={classnames(styles.paginationContainer, { [className]: className })}
    >
      <li
        className={classnames(styles.paginationItem, {
          [styles.disabled]: currentPage === 1
        })}
        onClick={onPrevious}
      >
        <div className={classnames(styles.arrow, styles.left)} />
      </li>
      {paginationRange && paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className={classnames(styles.paginationItem, styles.dots)} key={pageNumber}>&#8230;</li>
        }

        return (
          <li
            key={pageNumber}
            className={classnames(styles.paginationItem, {
              [styles.selected]: pageNumber === currentPage
            })}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        )
      })}
      <li
        className={classnames(styles.paginationItem, {
          [styles.disabled]: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className={classnames(styles.arrow, styles.right)} />
      </li>
    </ul>
  )
}

export default Pagination
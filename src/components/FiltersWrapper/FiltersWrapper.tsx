import React from 'react'
import styles from './FiltersWrapper.module.scss'
import Button from '@/components/Button/Button'

export interface FiltersWrapperProps {
  children?: React.ReactNode
  showClearBtn?: boolean
  clearBtnText?: string
  onClear?: () => void
}

const FiltersWrapper = (props: FiltersWrapperProps) => {
  const { children, onClear, showClearBtn, clearBtnText } = props

  return (
    <div className={styles.filterWrapper}>
      {
        Array.isArray(children)
          ? children.map((item, index) => (
            <div key={index} className={styles.filter}>
              {item}
            </div>
          ))
          : <div className={styles.filter}>{children}</div>
      }
      {showClearBtn &&
        <div className={styles.filter}>
          <div className={styles.clearWrapper}>
            <Button text={clearBtnText} onClick={onClear}/>
          </div>
        </div>}
    </div>
  )
}

export default FiltersWrapper
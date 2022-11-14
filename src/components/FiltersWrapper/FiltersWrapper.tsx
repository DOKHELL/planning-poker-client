import React from 'react'
import styles from './FiltersWrapper.module.scss'

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
            <button className={styles.clearBtn} onClick={onClear}>
              <h5>
                {clearBtnText}
              </h5>
            </button>
          </div>
        </div>}
    </div>
  )
}

export default FiltersWrapper
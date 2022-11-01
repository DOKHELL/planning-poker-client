import React from 'react'
import Loader from '../Loader/Loader'
import styles from './PageLoader.module.scss'

const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader/>
    </div>
  )
}

export default PageLoader
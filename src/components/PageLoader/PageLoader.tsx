import React from 'react'
import Loader from '../Loader/Loader'
import styles from './PageLoader.module.scss'

const PageLoader = ({ opacity = 1 }: { opacity?: number }) => {
  return (
    <div style={{ opacity }} className={styles.pageLoader}>
      <Loader/>
    </div>
  )
}

export default PageLoader
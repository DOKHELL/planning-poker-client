import React from 'react'
import styles from './Title.module.scss'

type TitleProps = {
  title: string
  children?: React.ReactNode
}

const Title = (props: TitleProps) => {
  const { title, children } = props
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}

export default Title
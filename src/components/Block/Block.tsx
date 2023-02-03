import styles from './Block.module.scss'

type BlockProps = {
  children?: React.ReactNode
}

const Block = (props: BlockProps) => {
  const { children } = props
  return (
    <div className={styles.block}>
      {children}
    </div>
  )
}

export default Block

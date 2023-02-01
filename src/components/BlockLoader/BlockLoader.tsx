import Loader from '../Loader/Loader'
import styles from './BlockLoader.module.scss'

const BlockLoader = () => {
  return (
    <div className={styles.blockLoader}>
      <Loader/>
    </div>
  )
}

export default BlockLoader
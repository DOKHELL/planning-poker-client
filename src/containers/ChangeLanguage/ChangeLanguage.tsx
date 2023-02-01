import styles from './ChangeLanguage.module.scss'
import { useTranslation } from 'react-i18next'
import en from '@/assets/icons/en.png'
import ua from '@/assets/icons/ua.png'

const ChangeLanguage = () => {
  const { i18n: { language , changeLanguage } } = useTranslation()

  return (
    <>
      <button
        onClick={() => changeLanguage(language === 'en' ? 'ua' : 'en')}
        className={styles.button}
      >
        {language === 'en'
          ? <img src={en} alt="en"/>
          : <img src={ua} alt="ua"/>}
      </button>
    </>
  )
}

export default ChangeLanguage
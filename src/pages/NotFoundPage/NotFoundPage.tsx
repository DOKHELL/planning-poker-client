import { useTranslation } from 'react-i18next'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <h1>{t('404 Not Found')}</h1>
    </>
  )
}

export default NotFoundPage

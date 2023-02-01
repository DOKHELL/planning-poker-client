import { useTranslation } from 'react-i18next'

const DashboardPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1>{t('dashboard.title')}</h1>
    </>
  )
}

export default DashboardPage
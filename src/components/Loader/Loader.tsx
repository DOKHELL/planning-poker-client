import { useTranslation } from 'react-i18next'

const Loader = () => {
  const { t } = useTranslation()

  return (
    <div>{t('common.loading')}</div>
  )
}

export default Loader
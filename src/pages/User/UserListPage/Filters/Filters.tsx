import React from 'react'
import FiltersWrapper from '@/components/FiltersWrapper/FiltersWrapper'
import Input from '../../../../components/Input/Input'
import { useUserStore, resetUserFilters, setUserFilters } from '@/store/user.store'
import { useTranslation } from 'react-i18next'


const Filters = () => {
  const { t } = useTranslation()
  const { filters } = useUserStore()

  const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserFilters(name, value)
  }

  const handleResetFilters = () => {
    resetUserFilters()
  }

  return (
    <FiltersWrapper
      showClearBtn
      clearBtnText={t('common.clear')}
      onClear={handleResetFilters}
    >
      <Input
        id='name'
        name='name'
        label={t('users.list.filters.name')}
        placeholder={t('users.list.filters.namePlaceholder')}
        value={filters.name.value || ''}
        onChange={handleFilters}
      />
      <Input
        id='username'
        name='username'
        label={t('users.list.filters.username')}
        placeholder={t('users.list.filters.usernamePlaceholder')}
        value={filters.username.value || ''}
        onChange={handleFilters}
      />
    </FiltersWrapper>
  )
}

export default Filters

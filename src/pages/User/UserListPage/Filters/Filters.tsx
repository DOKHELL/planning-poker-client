import React  from 'react'
import FiltersWrapper from '../../../../components/FiltersWrapper/FiltersWrapper'
import Input from '../../../../components/Input/Input'
import { userStore, resetUserFilters, setUserFilters } from '../../../../store/user.store'
import { useSnapshot } from 'valtio'


const Filters = () => {
  const { filters } = useSnapshot(userStore)

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
      clearBtnText='Clear'
      onClear={handleResetFilters}
    >
      <Input
        id='name'
        name='name'
        label='Name'
        placeholder='Enter Name'
        value={filters.name.value || ''}
        onChange={handleFilters}
      />
      <Input
        id='username'
        name='username'
        label='Username'
        placeholder='Enter Username'
        value={filters.username.value || ''}
        onChange={handleFilters}
      />
    </FiltersWrapper>
  )
}

export default Filters

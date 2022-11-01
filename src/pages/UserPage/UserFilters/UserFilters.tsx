import React  from 'react'
import FiltersWrapper from '../../../components/FiltersWrapper/FiltersWrapper'
import Input from '../../../components/Input/Input'
import { useUsers, initialFilters } from '../../../store/users.store'


const UserFilters = () => {
  const { filters, setFilters } = useUsers()

  const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: {
        ...filters[name],
        value,
      }
    })
  }

  const handleResetFilters = () => {
    setFilters(initialFilters)
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

export default UserFilters
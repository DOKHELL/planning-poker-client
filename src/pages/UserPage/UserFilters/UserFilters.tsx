import React  from 'react'
import shallow from 'zustand/shallow'
import FiltersWrapper from '../../../components/FiltersWrapper/FiltersWrapper'
import Input from '../../../components/Input/Input'
import { useUsers, initialFilters } from '../../../store/users.store'


const UserFilters = () => {
  const { filters, setFilters } = useUsers((state => ({ filters: state.filters, setFilters: state.setFilters })), shallow)

  const handleFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    // TODO: move to store
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

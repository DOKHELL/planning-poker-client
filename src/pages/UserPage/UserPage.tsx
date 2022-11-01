import React  from 'react'
import UserFilters from './UserFilters/UserFilters'
import UserList from './UserList/UserList'
import UserPagination from './UserPagination/UserPagination'

const UserPage = () => {
  return (
    <>
      <UserFilters/>
      <UserList/>
      <UserPagination/>
    </>
  )
}

export default UserPage
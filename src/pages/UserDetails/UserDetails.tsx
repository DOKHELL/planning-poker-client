import React from 'react'
import { useParams } from 'react-router-dom'
import { useFindUser } from '../../hooks/queries/user.query'

const UserDetails = () => {
  const { id } = useParams<{ id: string }>()
  const { data: user, isLoading, isError, error } = useFindUser(id || '')
  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <>
      <div>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.username}</p>
        <p>{user.website}</p>
      </div>
    </>
  )
}

export default UserDetails
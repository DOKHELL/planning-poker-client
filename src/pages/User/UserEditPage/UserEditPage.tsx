import React from 'react'
import Block from '@/components/Block/Block'
import Title from '@/components/Title/Title'
import BackButton from '@/components/BackButton/BackButton'
import useHandlePush from '@/hooks/useNavigation'
import { USER_DETAILS } from '@/constants/routes'
import UserEditForm from './UserEditForm/UserEditForm'
import { useParams } from 'react-router-dom'
import { useFindUser } from '@/hooks/queries/user.query'
import PageLoader from '@/components/PageLoader/PageLoader'

const UserEditPage = () => {
  const { handlePushAutoCall } = useHandlePush()
  const { id } = useParams<'id'>()
  const { data: user, isLoading: isFindLoading, isError, error } = useFindUser(id as string)

  if(isFindLoading) return <PageLoader/>
  if(isError) return <div>Error: {error.message}</div>

  return (
    <>
      <BackButton onBack={handlePushAutoCall(USER_DETAILS(id as string))}/>
      <Block>
        <Title title='Edit User'/>
        <UserEditForm {...user}/>
      </Block>
    </>
  )
}

export default UserEditPage
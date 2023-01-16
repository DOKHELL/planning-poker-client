import React from 'react'
import Block from '../../../components/Block/Block'
import Title from '../../../components/Title/Title'
import BackButton from '../../../components/BackButton/BackButton'
import useHandlePush from '../../../hooks/useNavigation'
import { USERS } from '../../../constants/routes'
import UserCreateForm from './UserCreateForm/UserCreateForm'

const UserCreatePage = () => {
  const { handlePushAutoCall } = useHandlePush()

  return (
    <>
      <BackButton onBack={handlePushAutoCall(USERS)}/>
      <Block>
        <Title title='Create new User'/>
        <UserCreateForm/>
      </Block>
    </>
  )
}

export default UserCreatePage
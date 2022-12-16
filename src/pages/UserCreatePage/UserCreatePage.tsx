import React from 'react'
import Block from '../../components/Block/Block'
import Title from '../../components/Title/Title'
import BackButton from '../../components/BackButton/BackButton'
import useHandlePush from '../../hooks/useNavigation'
import { USERS } from '../../constants/routes'
import Form from './Form/Form'

const UserCreatePage = () => {
  const { handlePushAutoCall } = useHandlePush()

  return (
    <>
      <BackButton onBack={handlePushAutoCall(USERS)}/>
      <Block>
        <Title title='Create new User'/>
        <Form/>
      </Block>
    </>
  )
}

export default UserCreatePage
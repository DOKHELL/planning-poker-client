import React  from 'react'
import Filters from './Filters/Filters'
import List from './List/List'
import Pagination from './Pagination/Pagination'
import Title from '@/components/Title/Title'
import Block from '@/components/Block/Block'
import { USER_CREATE } from '@/constants/routes'
import useHandlePush from '@/hooks/useNavigation'
import Warning from '@/components/Warning/Warning'

const UserListPage = () => {
  const { handlePushAutoCall } = useHandlePush()

  return (
    <>
      <Warning title='Create User' buttonText='Create' onClick={handlePushAutoCall(USER_CREATE)}/>
      <Block>
        <Title title='User list'/>
        <Filters/>
        <List/>
        <Pagination/>
      </Block>
    </>

  )
}

export default UserListPage
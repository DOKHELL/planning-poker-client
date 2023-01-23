import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  User,
  CreateUserArgs,
  UpdateUserArgs,
  DeleteUserArgs,
  createUser,
  updateUser,
  deleteUser
} from '@/api/user.api'
import { ErrorResponse } from '@/@types/error'

export const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation<User, ErrorResponse, CreateUserArgs>(
    [ 'createUser' ],
    (data) => createUser(data),
    {
      onSuccess: () => {
        queryClient.resetQueries({ queryKey: [ 'listUser' ] })
      }
    }
  )
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation<User, ErrorResponse, UpdateUserArgs>(
    [ 'updateUser' ],
    (data) => updateUser(data),
    {
      onSuccess: (data) => {
        queryClient.resetQueries({ queryKey: [ 'listUser' ] })
        queryClient.setQueriesData({ queryKey: [ 'findUser', String(data.id) ] }, data)
      },
    }
  )
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation<void, ErrorResponse, DeleteUserArgs>(
    [ 'deleteUser' ],
    (data) => deleteUser(data),
    {
      onSuccess: () => {
        queryClient.resetQueries({ queryKey: [ 'listUser' ] })
      },
    }
  )
}


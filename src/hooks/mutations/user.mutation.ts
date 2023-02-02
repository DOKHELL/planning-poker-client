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
import { userQueryKeys } from '@/constants/queryKeyFactory'

export const useCreateUser = () => {
  const queryClient = useQueryClient()
  return useMutation<User, ErrorResponse, CreateUserArgs>(
    userQueryKeys.create,
    (data) => createUser(data),
    {
      onSuccess: () => {
        queryClient.resetQueries({ queryKey: userQueryKeys.all })
      }
    }
  )
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()
  return useMutation<User, ErrorResponse, UpdateUserArgs>(
    userQueryKeys.update,
    (data) => updateUser(data),
    {
      onSuccess: (data) => {
        queryClient.resetQueries({ queryKey: userQueryKeys.all })
        queryClient.setQueriesData({ queryKey: userQueryKeys.find(String(data.id)) }, data)
      },
    }
  )
}

export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation<void, ErrorResponse, DeleteUserArgs>(
    userQueryKeys.delete,
    (data) => deleteUser(data),
    {
      onSuccess: () => {
        queryClient.resetQueries({ queryKey: userQueryKeys.all })
      },
    }
  )
}


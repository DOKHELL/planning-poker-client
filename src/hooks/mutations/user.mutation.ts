import { useMutation } from '@tanstack/react-query'
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

interface UserProps {
  onSuccess?: (data: User) => void
  onError?: () => void
  onSettled?: () => void
}
export const useCreateUser = ({ onSuccess, onError, onSettled }: UserProps) => {
  return useMutation<User, ErrorResponse, CreateUserArgs>(
    [ 'createUser' ],
    (data) => createUser(data),
    {
      onSuccess: onSuccess,
      onError: onError,
      onSettled: onSettled
    }
  )
}

export const useUpdateUser = ({ onSuccess, onError, onSettled }: UserProps) => {
  return useMutation<User, ErrorResponse, UpdateUserArgs>(
    [ 'updateUser' ],
    (data) => updateUser(data),
    {
      onSuccess: onSuccess,
      onError: onError,
      onSettled: onSettled
    }
  )
}

interface UserDeleteProps {
  onSuccess?: () => void
  onError?: () => void
  onSettled?: () => void
}

export const useDeleteUser = ({ onSuccess, onError, onSettled }: UserDeleteProps) => {
  return useMutation<void, ErrorResponse, DeleteUserArgs>(
    [ 'deleteUser' ],
    (data) => deleteUser(data),
    {
      onSuccess: onSuccess,
      onError: onError,
      onSettled: onSettled
    }
  )
}


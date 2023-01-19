import { useMutation } from '@tanstack/react-query'
import { User, createUser, CreateUserArgs, UpdateUserArgs, updateUser } from '@/api/user.api'
import { ErrorResponse } from '@/@types/error'

type CreateUserProps = {
  onSuccess?: (data: User) => void
  onError?: () => void
  onSettled?: () => void
}
export const useCreateUser = ({ onSuccess, onError, onSettled }: CreateUserProps) => {
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

type UpdateUserProps = CreateUserProps

export const useUpdateUser = ({ onSuccess, onError, onSettled }: UpdateUserProps) => {
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


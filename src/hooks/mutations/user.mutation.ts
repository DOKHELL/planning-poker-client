import { useMutation } from '@tanstack/react-query'
import { User, createUser, CreateUserArgs } from '../../api/user.api'
import { ErrorResponse } from '../../@types/error'

type CreateUserProps = {
  onSuccess?: () => void
  onError?: () => void
  onSettled?: () => void
}
export const useCreateUser = ({ onSuccess, onError, onSettled }: CreateUserProps) => {
  return useMutation<User, ErrorResponse>(
    [ 'create-user' ],
    (data) => createUser(data as unknown as CreateUserArgs),
    {
      onSuccess: onSuccess,
      onError: onError,
      onSettled: onSettled
    }
  )
}


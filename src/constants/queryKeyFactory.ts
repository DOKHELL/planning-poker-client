export const userQueryKeys = {
  all: [ 'listUser' ] as const,
  list: (filters: string, currentPage: number, pageSize: number) => [ ...userQueryKeys.all , { filters, currentPage, pageSize } ] as const,
  find: (id: string) => [ 'findUser', id ] as const,
  create: [ 'createUser' ] as const,
  update: [ 'updateUser' ] as const,
  delete: [ 'deleteUser' ] as const,
}
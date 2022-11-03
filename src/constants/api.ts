// Users
// TODO: remove file
export const GET_USERS = (currentPage: number, pageSize: number, filters: string | undefined) => `/users?_page=${currentPage}&_limit=${pageSize}${filters}`
export const GET_USER = (id: string) => `/users/${id}`

import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import { DASHBOARD, HOME, NOT_FOUND, USER_CREATE, USERS } from './constants/routes'
import PageLoader from './components/PageLoader/PageLoader'
import setupAxiosInterceptors from './services/interceptors'

const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const UserListPage = lazy(() => import('./pages/User/UserListPage/UserListPage'))
const UserDetailsPage = lazy(() => import('./pages/User/UserDetailsPage/UserDetailsPage'))
const UserCreatePage = lazy(() => import('./pages/User/UserCreatePage/UserCreatePage'))
const UserEditPage = lazy(() => import('./pages/User/UserEditPage/UserEditPage'))

export const App = () => {
  setupAxiosInterceptors()
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path={HOME} element={<Layout/>}>
          <Route path={DASHBOARD} element={<DashboardPage/>}/>
          <Route path={NOT_FOUND} element={<NotFoundPage/>}/>
          <Route path={USERS} element={<UserListPage/>}/>
          <Route path={USER_CREATE} element={<UserCreatePage/>}/>
          <Route path={`${USERS}/:id`} element={<UserDetailsPage/>}/>
          <Route path={`${USERS}/:id/edit`} element={<UserEditPage/>}/>
          <Route path={HOME} element={<Navigate to={DASHBOARD}/>}/>
          <Route path='*' element={<Navigate to={NOT_FOUND}/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

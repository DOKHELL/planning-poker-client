import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import { DASHBOARD, HOME, NOT_FOUND, USERS } from './constants/routes'
import PageLoader from './components/PageLoader/PageLoader'
import setupAxiosInterceptors from './services/interceptors'

const DashboardPage = lazy(() => import('./pages/DashboardPage/DashboardPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const UserPage = lazy(() => import('./pages/UserPage/UserPage'))
const UserDetails = lazy(() => import('./pages/UserDetails/UserDetails'))

export const App = () => {
  setupAxiosInterceptors()
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path={HOME} element={<Layout/>}>
          <Route path={DASHBOARD} element={<DashboardPage/>}/>
          <Route path={NOT_FOUND} element={<NotFoundPage/>}/>
          <Route path={USERS} element={<UserPage/>}/>
          <Route path={`${USERS}/:id`} element={<UserDetails/>}/>
          <Route path={HOME} element={<Navigate to={DASHBOARD}/>}/>
          <Route path='*' element={<Navigate to={NOT_FOUND}/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './containers/Layout/Layout'
import PageLoader from './components/PageLoader/PageLoader'
import setupAxiosInterceptors from './services/interceptors'
import { NEW_GAME, HOME, NOT_FOUND, GAME } from './constants/routes'

const NewGamePage = lazy(() => import('./pages/NewGamePage/NewGamePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'))
const GamePage = lazy(() => import('./pages/GamePage/GamePage'))

export const App = () => {
  setupAxiosInterceptors()
  return (
    <Suspense fallback={<PageLoader/>}>
      <Routes>
        <Route path={HOME} element={<Layout/>}>
          <Route path={NEW_GAME} element={<NewGamePage/>}/>
          <Route path={NOT_FOUND} element={<NotFoundPage/>}/>
          <Route path={`${GAME}/:id`} element={<GamePage/>}/>
          <Route path={HOME} element={<Navigate to={NEW_GAME}/>}/>
          <Route path='*' element={<Navigate to={NOT_FOUND}/>}/>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App

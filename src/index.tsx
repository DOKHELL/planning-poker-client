import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import Modal from '@/containers/Modal/Modal'
import App from './App'
import './assets/styles/index.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <App/>
    <Modal/>
  </HashRouter >
)

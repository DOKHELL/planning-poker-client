import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Modal from '@/containers/Modal/Modal'
import App from './App'
import './assets/styles/index.scss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App/>
    <Modal/>
  </BrowserRouter>
)

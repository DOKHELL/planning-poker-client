import ReactDOM from 'react-dom/client'
import './assets/styles/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import getEnvVar from './utils/getEnvVar'
import Modal from '@/containers/Modal/Modal'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/localization/i18n'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: getEnvVar('VITE_ENV') === 'production',
      refetchOnMount: false,
      retry: false,
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <App/>
        <Modal/>
        <ReactQueryDevtools initialIsOpen={false} />
      </I18nextProvider>
    </BrowserRouter>
  </QueryClientProvider>
)

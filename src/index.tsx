import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/styles/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import getEnvVar from './utils/getEnvVar'
import Modal from '@/components/Modal/Modal'


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
      <App />
      <Modal/>
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  </QueryClientProvider>
)

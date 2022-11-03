import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './containers/App'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // TODO: disable for dev env
      refetchOnMount: false,
      retry: false,
      // retry: (failureCount, error) => {
      //   const err = error as ServerError
      //   if (err.status && err.status >= 500) return true
      // },
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={client}>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  </QueryClientProvider>
)

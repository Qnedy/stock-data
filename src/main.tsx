import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { queryClient, QueryClientProvider } from './services/queryClient.ts';

import Router from './routes/index.tsx';

import './globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </QueryClientProvider>,
)

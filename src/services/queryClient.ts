import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const tenMinutes = 600000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: tenMinutes
    }
  }
});

export { queryClient, QueryClientProvider };

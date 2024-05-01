import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const oneHour = 3600000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: oneHour
    }
  }
});

export { queryClient, QueryClientProvider };

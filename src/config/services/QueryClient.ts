import { QueryClient } from "react-query";

/**
 * source : https://tanstack.com/query/v4/docs/reference/QueryClient
 */
export const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

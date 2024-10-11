"use client"
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'

export default function QueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
      {/*  initialIsOpen={false}  */}
    </QueryClientProvider>

  )
}

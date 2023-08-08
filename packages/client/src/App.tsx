import { useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getFetch, httpBatchLink, loggerLink } from "@trpc/client";
import { trpc } from "./trpc";

function AppContent() {
  const hello = trpc.sayHello.useQuery();
  return (
    <main className="flex flex-col justify-center items-center gap-2 h-screen w-screen">
      <>
        <h1 className='text-blue-500 font-bold leading-loose tracking-widest'>START</h1>
        <h2 className='text-cyan-500/80 font-semibold p-2 animate-bounce transition-all ease-linear bg-gradient-to-t from-cyan-600 to-blue-300 text-cyan-950'>
          [ NPM WORKSPACES MONOREPO ]
        </h2>
      </>
      <>
        <h3 className='text-gray-400'>we have</h3>
        <p className='text-lime-400 bg-gray-900 p-2 px-5 rounded-full'>Vite + React + Tailwind</p>
        <p className='text-purple-400 bg-gray-950 p-2 px-5 rounded-full'>TS-NODE + Express + TRPC</p>
        <p className='text-emerald-400 bg-black/90 p-2 px-5 rounded-full'>Mongo + Redis</p>
      </>
      {JSON.stringify(hello.data, null, 2)}
    </main>
  )
}

function App() {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink(),
        httpBatchLink({
          url: "http://localhost:8080/api/trpc",
          fetch: async (input, init?) => {
            const fetch = getFetch();
            return fetch(input, {
              ...init,
              credentials: "include",
            });
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
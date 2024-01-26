import GetTodo from "./components/GetTodo"
import CreateTodo from "./components/CreateTodo";
import SpaceHeader from "./components/SpaceHeader";
import SpaceFooter from "./components/SpaceFooter";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      }
    }
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <SpaceHeader/>
      <CreateTodo/>
      <GetTodo/>
      <SpaceFooter/>

    </QueryClientProvider>
  )
}

export default App

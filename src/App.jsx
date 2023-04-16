import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './component/MainLayout';
import Show from './pages/Show';
import { GlobalTheme } from './Theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/starred" element={<Starred />}></Route>
            </Route>
            <Route path="/show/:showId" element={<Show></Show>}></Route>
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;

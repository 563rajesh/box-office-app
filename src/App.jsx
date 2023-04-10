import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './component/MainLayout';
import Show from './pages/Show';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/starred" element={<Starred />}></Route>
          </Route>
          <Route path="/show/:showId" element={<Show></Show>}></Route>
          <Route path="*" element={<div>Page not found</div>} />
          {/* <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="teams" element={<Teams />}>
        <Route path=":teamId" element={<Team />} />
        <Route path="new" element={<NewTeamForm />} />
        <Route index element={<LeagueStandings />} />
      </Route>
    </Route>
    <Route element={<PageLayout />}>
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/tos" element={<Tos />} />
    </Route>
    <Route path="contact-us" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

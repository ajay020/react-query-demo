import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import RQHomework from "./components/RQHomework";
import RQSuperHero from "./components/RQSuperHero.page";
import ParallesQuery from "./components/ParallesQuery.page";
import DynamicParallel from "./components/DynamicParallel.page";
import DependentQueries from "./components/DependentQueries.pagae";
import PaginatedQuries from "./components/PaginatedQuries.page";
import InfiniteQuerypage from "./components/InfiniteQuery.page";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/rq-colors" element={<PaginatedQuries />} />
          <Route path="/rq-infinite" element={<InfiniteQuerypage />} />
          <Route
            exact
            path="/rq-depended"
            element={<DependentQueries email="ajay@gmail.com" />}
          />
          <Route
            path="/rq-dynamic-parallel"
            element={<DynamicParallel heroIds={[1, 3]} />}
          />
          <Route exact path="/rq-parallel" element={<ParallesQuery />} />
          <Route path="/rq-super-heroes/:heroId" element={<RQSuperHero />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
          <Route path="/rq-home-work" element={<RQHomework />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;

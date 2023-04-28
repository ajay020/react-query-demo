import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/Home.page";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";
import { SuperHeroesPage } from "./components/SuperHeroes.page";
import "./App.css";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />} />
          <Route path="/super-heroes" element={<SuperHeroesPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;

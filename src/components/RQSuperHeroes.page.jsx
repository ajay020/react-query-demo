import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchSuperHeroes);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data?.data.map((hero) => {
        return <div key={hero.name}> {hero.name} </div>;
      })}
    </div>
  );
};

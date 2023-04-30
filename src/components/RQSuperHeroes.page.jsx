import { Link } from "react-router-dom";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

export const RQSuperHeroesPage = () => {
  // this method is called when data is fetched successfully.
  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };

  const onError = (err) => {
    console.log("Perform side effect after encountering error", err);
  };
  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHerosData(onSuccess, onError, true);

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  console.log({ isLoading, isFetching });

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <button onClick={refetch}>Fetch Heroes</button>
      <h2>RQSuper Heroes Page</h2>

      {data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
        );
      })}

      {/* {data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </div>
  );
};

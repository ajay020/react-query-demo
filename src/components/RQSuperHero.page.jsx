import React from "react";
import { useSuperHeroData } from "../hooks/useSuperHeroData";
import { useParams } from "react-router-dom";

function RQSuperHero() {
  const { heroId } = useParams();
  const { data, error, isLoading, isError } = useSuperHeroData(heroId);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <h1>
        {data?.data.name} - {data?.data.alterEgo}
      </h1>
    </>
  );
}

export default RQSuperHero;

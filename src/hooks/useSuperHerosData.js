import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHerosData = (onSuccess, onError, setEnable = true) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    //   cacheTime: 5000,
    //   staleTime: 5000,
    //   refetchOnMount: true,
    //   refetchOnWindowFocus: true,
    //   refetchInterval: 2000,
    //   refetchIntervalInBackground: false,
    enabled: setEnable, // control data fetching on mount and on focus

    onSuccess,
    onError,
    // select: (data) => {
    //   // in this function you can transform api data according you requirments. you can filter, map,
    //   // sort.
    //   const superHeroNames = data.data.map((hero) => {
    //     return hero;
    //   });
    //   return superHeroNames;
    // },
  });
};

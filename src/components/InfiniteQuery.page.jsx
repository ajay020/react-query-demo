import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

const fetchColors = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`);
};

function InfiniteQuerypage() {
  const {
    data,
    isError,
    error,
    isLoading,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery(["colors"], fetchColors, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div>
        {data?.pages.map((group, i) => {
          return (
            <Fragment key={i}>
              {group?.data.map((color) => (
                <h2 key={color.id}>
                  {color.id}. {color.label}
                </h2>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
    </>
  );
}

export default InfiniteQuerypage;

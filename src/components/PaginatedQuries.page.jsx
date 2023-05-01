import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const fetchColors = (pageNumber) => {
  return axios.get(
    "http://localhost:4000/colors/?_limit=2&_page=" + pageNumber
  );
};

function PaginatedQuries() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isError, error, isLoading, isFetching } = useQuery(
    ["colors", pageNumber],
    () => fetchColors(pageNumber),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <div>
        <h1>Paginated queries</h1>
        {data?.data?.map((color) => {
          return <h4 key={color.id}>{color.label}</h4>;
        })}
      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}
        >
          Pre
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}
        >
          Next
        </button>
      </div>
      {isFetching && "Loading.."}
    </>
  );
}

export default PaginatedQuries;

import { useState } from "react";
import { useSuperHerosData } from "../hooks/useSuperHerosData";

function RQHomework() {
  const [enabled, setEnabled] = useState(false);
  const onSuccess = (data) => {
    console.log("perform side effects");
    setEnabled(true);
  };

  const onError = (err) => {
    console.log("perform side effects");
  };
  const { data, error, isLoading, isFetching, refetch } = useSuperHerosData(
    onSuccess,
    onError,
    enabled
  );

  if (isLoading || isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1> RQ Home work</h1>
      <button onClick={refetch}>Fetch Heroes</button>
      <div>
        {data?.map((heroName) => {
          return <div key={heroName}>{heroName}</div>;
        })}
      </div>
    </div>
  );
}

export default RQHomework;

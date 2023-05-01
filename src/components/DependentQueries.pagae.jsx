import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const fetchUserByEmail = (email) => {
  return axios.get("http://localhost:4000/users/" + email);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get("http://localhost:4000/channels/" + channelId);
};

function DependentQueries({ email }) {
  const { data: user } = useQuery(["users", email], () =>
    fetchUserByEmail(email)
  );
  const channelId = user?.data.channelId;

  const { data: channels, isLoading } = useQuery(
    ["channels", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div>
        <h3>User is {user?.data?.id}</h3>
      </div>
      {channels?.data?.courses?.map((c) => {
        return <p key={c}>{c}</p>;
      })}
    </div>
  );
}

export default DependentQueries;

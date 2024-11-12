import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api/github.com/users/afaqraza16")
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className="   flex items-center justify-center flex-col text-white text-3xl text-center font-semibold m-6 px-10">
      <div className=" h-full bg-slate-700 p-10">
        Github Followers : {data.followers}
      </div>
      <div className="im bg-slate-700 p-6">
        <img src={data.avatar_url} alt="Github Profile" width={300} />
      </div>
    </div>
  );
};

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/afaqraza16");
  return response.json();
};

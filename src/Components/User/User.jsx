import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="flex items-center justify-center ">
      <h1 className="text-3xl px-16 py-7 bg-gray-600 text-white">
        Userid id : ${userId}
      </h1>
    </div>
  );
};

export default User;

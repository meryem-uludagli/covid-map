import React from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { code } = useParams();
  return (
    <div>
      <h1>{code}</h1>
    </div>
  );
};

export default Detail;

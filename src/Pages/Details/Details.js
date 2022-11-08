import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const serviceDetails = useLoaderData();
  return (
    <div>
      <h2>this is details</h2>
      <h2>{serviceDetails.name}</h2>
    </div>
  );
};

export default Details;

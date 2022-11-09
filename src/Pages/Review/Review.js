import React from "react";
import { FaUser } from "react-icons/fa";

const Review = ({ review }) => {
  const { email, message, name, photoUrl, serviceId } = review;
  return (
    <div className="my-6">
      <div className="flex items-center">
        <img
          src={photoUrl ? photoUrl : <FaUser></FaUser>}
          alt=""
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-6">
          <p>{name}</p>
          <p>Service Id : {serviceId}</p>
        </div>
      </div>
      <div className="my-8">{message}</div>
    </div>
  );
};

export default Review;

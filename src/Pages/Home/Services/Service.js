import React from "react";
import { FaStar, FaClock } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, img, description, name, price, rating, Delivery_time } = service;
  return (
    <div className="flex flex-col md:flex-row border-2 border-gray-400 p-4 rounded-lg my-6">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img src={img} alt={name} className="h-72 w-96 rounded-lg" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <p>
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <div className="card-actions justify-between">
          <div className="flex justify-center items-center">
            <FaStar className="text-orange-600"></FaStar> {rating}
          </div>
          <div className="flex justify-center items-center">
            <FaClock /> {Delivery_time}
          </div>
        </div>
        <div className="w-1/3 mx-auto my-4">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-outline btn-error ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;

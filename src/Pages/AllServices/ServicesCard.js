import React from "react";
import { FaClock, FaStar } from "react-icons/fa";
import { PhotoView, PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, img, description, name, price, rating, Delivery_time } = service;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure className="px-10 pt-10">
            <img src={img} alt={name} className="h-72 w-96 rounded-lg" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price : ${price}</p>
        <div className="flex justify-between">
          <div className="flex justify-center items-center">
            <FaStar className="text-orange-600"></FaStar> {rating}
          </div>
          <div className="flex justify-center items-center">
            <FaClock /> {Delivery_time}
          </div>
        </div>
        <p>
          {description.length > 200
            ? description.slice(0, 200) + "..."
            : description}
        </p>
        <div className="card-actions">
          <Link to={`/services/${_id}`} className="w-full">
            <button className="btn btn-outline btn-success w-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

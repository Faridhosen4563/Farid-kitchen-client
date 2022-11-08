import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services?limit=3")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-green-600 mb-8">
        My Popular Food
      </h1>
      <div className=" border-2 border-orange-500 p-4 rounded-lg">
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-500 mb-4">
            Food Delivery
          </p>
          <h1 className="text-4xl font-bold mb-4">
            TESTY <span className="font-thin">||</span> FRESH{" "}
            <span className="font-thin">||</span> TIME
          </h1>
        </div>
        <div className="my-12">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <div className="text-center my-6">
          <Link>
            <button className="btn btn-outline btn-success font-bold">
              See All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

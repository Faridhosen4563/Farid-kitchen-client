import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServicesCard from "./ServicesCard";

const AllServices = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(6);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`http://localhost:5000/services?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setServices(data.services);
        console.log(data);
      });
  }, [page, size]);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
      <div className=" my-8">
        <p className="font-semibold text-2xl mb-6">Current page : {page + 1}</p>
        {[...Array(pages).keys()].map((number) => (
          <button
            className={
              page === number ? "btn btn-active ml-2" : `btn btn-outline ml-2 `
            }
            onClick={() => setPage(number)}
            key={number}
          >
            {number + 1}
          </button>
        ))}
        <select
          className="ml-2"
          onChange={(event) => setSize(event.target.value)}
        >
          <option value="6">6</option>
          <option value="9">9</option>
        </select>
      </div>
    </div>
  );
};

export default AllServices;

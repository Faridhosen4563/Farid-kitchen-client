import React from "react";
import "./CarouselItem.css";

const CarouselItem = ({ carousel }) => {
  const { img, id, prev, next } = carousel;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full text-white">
      <div className="img-gradient w-full">
        <img src={img} className="w-full h-[80vh] rounded-xl" alt="" />
      </div>

      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/4">
        <p className="text-xl font-light md:pl-32">
          EXCLUSIVE OFFER{" "}
          <span className="bg-emerald-100 text-black font-thin rounded-2xl ml-2 px-4">
            - 40% OFF
          </span>
        </p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h2 className="text-5xl font-bold md:ml-32">
          Quality and Freshness <br />
          Testy
        </h2>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-2/3">
        <p className="md:ml-32">Only this week. Do not miss...</p>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-3/4">
        <button className="btn btn-outline btn-info md:ml-32">Order Now</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarouselItem;

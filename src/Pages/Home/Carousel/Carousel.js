import React from "react";
import img1 from "../../../assets/image/img1.jpg";
import img2 from "../../../assets/image/im2.jpg";
import img3 from "../../../assets/image/im3.jpg";
import img4 from "../../../assets/image/img4.jpg";
import img5 from "../../../assets/image/img5.jpg";
import img6 from "../../../assets/image/img6.jpg";
import CarouselItem from "./CarouselItem";

const carouselData = [
  {
    img: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    img: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    img: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    img: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    img: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    img: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Carousel = () => {
  return (
    <div className="carousel w-full my-20">
      {carouselData.map((carousel) => (
        <CarouselItem key={carousel.id} carousel={carousel}></CarouselItem>
      ))}
    </div>
  );
};

export default Carousel;

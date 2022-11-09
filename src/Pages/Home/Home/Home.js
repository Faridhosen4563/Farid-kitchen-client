import React from "react";
import useTitle from "../../../hooks/useTitle";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
    </div>
  );
};

export default Home;

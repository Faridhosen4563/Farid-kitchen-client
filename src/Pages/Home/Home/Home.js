import React from "react";
import useTitle from "../../../hooks/useTitle";
import Carousel from "../Carousel/Carousel";
import Choose from "../Choose/Choose";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Carousel></Carousel>
      <Services></Services>
      <Choose></Choose>
      <Contact></Contact>
    </div>
  );
};

export default Home;

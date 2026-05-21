import React from "react";
import Hero from "../components/Hero";
import Services from "./Services";
import Portfolio from "./Portfolio";

const Home = ({ addToCart }) => {
  return (
    <>
      <Hero />
      <Services addToCart={addToCart} />
      <Portfolio />
    </>
  );
};

export default Home;
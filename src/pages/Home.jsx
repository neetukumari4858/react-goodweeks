import React from "react";
import { About, HeroSlider, Navbar } from "../components";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSlider />
      <About />
    </div>
  );
};

export default Home;

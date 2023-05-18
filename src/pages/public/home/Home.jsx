import React from "react";
import Headline from "./Headline";
import MainContent from "./MainContent";
import HomePackages from "./HomePackages";
import Testimonial from "./Testimonial";
import HomeLinks from "./HomeLinks";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden pt-8">
      <Headline />
      <MainContent />
      <HomePackages />
      <Testimonial />
      <HomeLinks />
    </div>
  );
};

export default Home;

import React from "react";
import Headline from "./Headline";
import MainContent from "./MainContent";

const Home = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center overflow-x-hidden">
      <Headline />
      <MainContent />
    </div>
  );
};

export default Home;

import React from "react";
import AboutIntro from "./AboutIntro";
import Team from "./Team";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutIntro />
      <Team />
    </div>
  );
};

export default AboutUs;

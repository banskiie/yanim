import React from "react";
import AboutIntro from "./AboutIntro";
import Team from "./Team";
import Owner from "./Owner";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center">
      <AboutIntro />
      <Team />
      <Owner />
    </div>
  );
};

export default AboutUs;

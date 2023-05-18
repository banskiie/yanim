import React from "react";
import AboutIntro from "./AboutIntro";
import Team from "./Team";
import AboutClosing from "./AboutClosing";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center mt-6 md:mt-0">
      <AboutIntro />
      <Team />
      <AboutClosing />
    </div>
  );
};

export default AboutUs;

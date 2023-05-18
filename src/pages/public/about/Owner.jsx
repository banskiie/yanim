import React from "react";
import abtplanner from "../../../assets/img/aboutplanner/planner-pic.png";
import abtplannerinfo from "../../../assets/img/aboutplanner/about-the-planner.png";

const Owner = () => {
  return (
    <div className="flex flex-col md:flex-row w-screen items-center justify-center md:pt-16 gap-4 md:gap-0">
      <img
        src={abtplanner}
        alt="A picture of the owners"
        className="w-4/5 md:w-[45rem] object-cover rounded-lg -z-10 md:mb-[40rem] shadow-xl md:border-4 md:border-primary md:engraved"
      />
      <img
        src={abtplannerinfo}
        alt="About the planner information"
        className="w-4/5 md:w-[45rem] object-cover rounded-lg md:-ml-72 shadow-2xl md:engraved"
      />
    </div>
  );
};

export default Owner;

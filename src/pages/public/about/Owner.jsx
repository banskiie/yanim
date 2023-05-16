import React from "react";
import abtplanner from "../../../assets/img/aboutplanner/planner-pic.png";
import abtplannerinfo from "../../../assets/img/aboutplanner/about-the-planner.png";

const Owner = () => {
  return (
    <div className="flex flex-row w-screen items-center justify-center pt-16">
      <img
        src={abtplanner}
        alt="A picture of the owners"
        className="w-[45rem] object-cover rounded-lg -z-10 mb-[40rem] shadow-xl border-4 border-primary engraved"
      />
      <img
        src={abtplannerinfo}
        alt="About the planner information"
        className="w-[45rem] object-cover rounded-lg -ml-72 shadow-2xl engraved"
      />
    </div>
  );
};

export default Owner;

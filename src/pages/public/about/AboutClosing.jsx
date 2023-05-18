import React from "react";

import yanimlogo from "../../../assets/svg/yanimlogo.svg";

const AboutClosing = () => {
  return (
    <div className="bg-neutral w-full -mt-6 h-48 md:h-36 shadow-2xl rounded-t-3xl border-2">
      {/* <div className="bg-neutral w-full flex py-1 items-center before:mt-3 before:flex-1 before:border-t-[3px]  before:border-darker before:border-opacity-40 after:mt-3 after:flex-1 after:border-t-[3px] after:border-darker after:border-opacity-40">
        <div className="w-20 h-20 bg-darker grid place-items-center rounded-full mx-3 engraved ">
          <img src={yanimlogo} />
        </div>
      </div> */}
      <div className="w-full grid place-items-center">
        <div className="w-20 h-20 absolute bg-darker grid place-items-center rounded-full mx-3 engraved ">
          <img src={yanimlogo} />
        </div>
      </div>
      <div className="grid place-items-center pb-8 pt-14 md:pt-12 px-10 text-center md:text-left">
        <p className="text-primary font-display text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
        <p className="text-primary font-display text-xl">
          Dolore dolorum eaque quo dolor saepe quisquam?
        </p>
      </div>
    </div>
  );
};

export default AboutClosing;

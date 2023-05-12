import React from "react";
import yanimlogo from "../../../assets/svg/yanimlogodarker.svg";

const AboutIntro = () => {
  return (
    <div className="w-full h-96 flex flex-col items-center justify-start bg-neutral ">
      <div className="absolute w-full flex flex-col items-center">
        <div className="w-full flex py-1 pt-28 items-center before:mt-0 before:flex-1 before:border-t-[3px]  before:border-darker before:border-opacity-40 after:mt-0 after:flex-1 after:border-t-[3px] after:border-darker after:border-opacity-40">
          <h1 className="text-7xl mx-3 font-alex text-darker engraved-text">
            About Us
          </h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-x-5 divide-x">
          <img src={yanimlogo} className="w-48" alt="" />
          <p className="text-xl text-left py-4 font-display w-3/5 text-darker">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            <b> Necessitatibus doloremque</b>, nesciunt earum aspernatur
            delectus reprehenderit <b>nisi, deserunt, quos omnis</b> similique
            excepturi beatae exercitationem at sapiente magnam qui incidunt
            eligendi dolores!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;

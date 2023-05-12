import React from "react";
import WallOfText from "./WallOfText";
import headcoor from "../../../assets/img/staff/1ayana.jpg";
import oic1 from "../../../assets/img/staff/2ferle.jpg";
import oic2 from "../../../assets/img/staff/3gillian.jpg";
import oic3 from "../../../assets/img/staff/4heddy.jpg";

const Team = () => {
  return (
    <>
      <WallOfText />
      <div className="absolute mt-[27rem] flex flex-col justify-center items-center">
        <h1 className=" text-8xl text-darker font-alex engraved-text">
          Meet The Team!
        </h1>
        <div>
          <div className="grid place-items-center">
            <img
              className="w-96 h-96 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
              src={headcoor}
              alt="Head Coordinator"
            />
            <p className="text-lighter font-primary font-bold text-4xl py-2">
              Ayana Manriquez
            </p>
            <h2 className="text-darker font-alex text-3xl font-bold engraved-text">
              Head Coordinator
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-28 py-10">
            <div className="grid place-items-center h-72 -mt-32">
              <img
                className="w-56 h-56 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic1}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Ferle Busano
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
            <div className="grid place-items-center">
              <img
                className="w-56 h-56 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic2}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Gillian Mugot
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
            <div className="grid place-items-center h-72 -mt-32">
              <img
                className="w-56 h-56 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic3}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Hedda Gulmatico
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

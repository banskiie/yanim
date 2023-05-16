import React from "react";
import WallOfText from "./WallOfText";
import headcoor from "../../../assets/img/staff/1ayana.jpg";
import oic1 from "../../../assets/img/staff/2ferle.jpg";
import oic2 from "../../../assets/img/staff/3gillian.jpg";
import oic3 from "../../../assets/img/staff/4heddy.jpg";
import otd1 from "../../../assets/img/staff/5patricia.jpg";
import otd2 from "../../../assets/img/staff/6glenny.jpg";
import otd3 from "../../../assets/img/staff/7shimmay.jpg";
import otd4 from "../../../assets/img/staff/8donna.jpg";
import otd5 from "../../../assets/img/staff/9frenzcel.jpg";
import otd6 from "../../../assets/img/staff/10mehzi.jpg";
import otd7 from "../../../assets/img/staff/11erika.jpg";
import otd8 from "../../../assets/img/staff/12mich.jpg";
import otd9 from "../../../assets/img/staff/13alexxa.jpg";
import Owner from "./Owner";

const Team = () => {
  return (
    <>
      <WallOfText />
      <div className="absolute mt-[34rem] md:mt-[26rem] flex flex-col justify-center items-center">
        <h1 className="text-5xl md:text-8xl text-darker font-alex engraved-text select-none">
          Meet The Team!
        </h1>
        <div className="w-screen">
          {/* OWNER */}
          <div className="flex flex-col justify-center items-center">
            <img
              className="w-56 h-56 md:w-[28rem] md:h-[28rem] object-cover rounded-full border-[7px] border-opacity-75 border-secondary drop-shadow-2xl"
              src={headcoor}
              alt="Head Coordinator"
            />
            <p className="text-lighter font-primary font-bold text-2xl md:text-4xl py-2">
              {"Ayana Manriquez"}
            </p>
            <h2 className="text-darker font-alex text-xl md:text-3xl font-bold engraved-text">
              {"Head Coordinator"}
            </h2>
          </div>
          {/* OIC */}
          <div className="grid grid-cols-3 md:py-10 md:w-4/5 mx-auto">
            <div className="flex flex-col items-center justify-center h-72 -mt-12 md:-mt-32">
              <img
                className="w-28 h-28 md:w-72 md:h-72 object-cover rounded-full border-[5.5px] border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic1}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md md:text-2xl">
                {"Ferle Busano"}
              </p>
              <h2 className="text-darker font-alex text-md md:text-2xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center h-72">
              <img
                className="w-28 h-28 md:w-72 md:h-72 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic2}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md md:text-2xl">
                Gillian Mugot
              </p>
              <h2 className="text-darker font-alex text-md md:text-2xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center h-72 -mt-12 md:-mt-32">
              <img
                className="w-28 h-28 md:w-72 md:h-72 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic3}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md md:text-2xl">
                Heds Gulmatico
              </p>
              <h2 className="text-darker font-alex text-md md:text-2xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
          </div>
          {/* OTD */}
          <div className="grid grid-cols-2 md:grid-cols-4 md:w-8/12 mx-auto md:py-4">
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd1}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Patricia Ong San Soy
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd2}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Glenny Melendres
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd3}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Shimmay Balagtas
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd4}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Donna Rodrigo
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 md:w-10/12 mx-auto">
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd5}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Frenzcel Felias
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd6}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Mehzi Navarro
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd7}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Erika Manego
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd8}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Mich Ong San Soy
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center pb-6">
              <img
                className="w-28 h-28 md:w-48 md:h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd9}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-md text-center md:text-xl">
                Alexxa Janeo
              </p>
              <h2 className="text-darker font-alex md:text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
          </div>
        </div>
        <Owner />
      </div>
    </>
  );
};

export default Team;

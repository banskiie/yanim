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

const Team = () => {
  return (
    <>
      <WallOfText />
      <div className="absolute mt-[26rem] flex flex-col justify-center items-center">
        <h1 className=" text-8xl text-darker font-alex engraved-text">
          Meet The Team!
        </h1>
        <div className="w-screen">
          {/* OWNER */}
          <div className="grid place-items-center">
            <img
              className="w-[28rem] h-[28rem] object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
              src={headcoor}
              alt="Head Coordinator"
            />
            <p className="text-lighter font-primary font-bold text-4xl py-2">
              {"Ayana Manriquez"}
            </p>
            <h2 className="text-darker font-alex text-3xl font-bold engraved-text">
              {"Head Coordinator"}
            </h2>
          </div>
          {/* OIC */}
          <div className="grid grid-cols-3 py-10 w-4/5 mx-auto">
            <div className="grid place-items-center h-72 -mt-32">
              <img
                className="w-72 h-72 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic1}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-2xl">
                {"Ferle Busano"}
              </p>
              <h2 className="text-darker font-alex text-2xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
            <div className="grid place-items-center">
              <img
                className="w-72 h-72 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic2}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-2xl">
                Gillian Mugot
              </p>
              <h2 className="text-darker font-alex text-2xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
            <div className="grid place-items-center h-72 -mt-32">
              <img
                className="w-72 h-72 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={oic3}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-2xl">
                Hedda Gulmatico
              </p>
              <h2 className="text-darker font-alex text-2xl font-bold engraved-text">
                Office-In-Charge
              </h2>
            </div>
          </div>
          {/* OTD */}
          <div className="grid grid-cols-4 gap-20 w-8/12 mx-auto">
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd1}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Patricia Ong San Soy
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd2}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Glenny Melendres
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd3}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Shimmay Balagtas
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd4}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Donna Rodrigo
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-20 w-10/12 mx-auto">
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd5}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Frenzcel Felias
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd6}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Mehzi Navarro
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd7}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Erika Manego
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd8}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Mich Ong San Soy
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
            <div className="grid place-items-center h-72">
              <img
                className="w-48 h-48 object-cover rounded-full border-4 border-opacity-75 border-secondary drop-shadow-2xl"
                src={otd9}
                alt="Head Coordinator"
              />
              <p className="text-lighter font-primary font-bold text-xl">
                Alexxa Janeo
              </p>
              <h2 className="text-darker font-alex text-xl font-bold engraved-text">
                On-The-Day Coordinator
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;

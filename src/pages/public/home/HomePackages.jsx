import React, { useState } from "react";
import granboda from "../../../assets/img/homepackages/granboda.jpg";
import granbodaotd from "../../../assets/img/homepackages/granbodaotd.jpg";
import intimaboda from "../../../assets/img/homepackages/intimaboda.jpg";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";

const HomePackages = () => {
  const [showGB, setShowGB] = useState(false);
  const [showGBO, setShowGBO] = useState(false);
  const [showIB, setShowIB] = useState(false);
  return (
    <>
      <div className=" bg-neutral w-full flex pb-6 items-center before:mt-0.5 before:flex-1 before:border-t-4 before:border-lighter before:border-opacity-40 after:mt-0.5 after:flex-1 after:border-t-4 after:border-lighter after:border-opacity-40">
        <p className="mx-4 text-center text-7xl lg:text-8xl font-alex dark:text-primary">
          Packages
        </p>
      </div>
      <div className="w-full flex flex-col items-center bg-neutral pb-24 gap-y-8">
        <Fade
          triggerOnce
          cascade
          direction="right"
          className="w-full flex flex-col items-center bg-neutral"
        >
          <div className="h-44 w-10/12 bg-black">
            {showGB && (
              <AnimatePresence>
                <div className="absolute h-44 w-10/12 grid place-items-center cursor-pointer">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.99, transition: { duration: 0.7 } }}
                    className="z-10 text-7xl lg:text-8xl font-thin text-accent font-alex"
                    onMouseEnter={() => {
                      setShowGB(true);
                    }}
                    onMouseLeave={() => {
                      setShowGB(false);
                    }}
                  >
                    Gran Boda
                  </motion.span>
                </div>
              </AnimatePresence>
            )}
            <img
              className={`w-full h-full object-cover grayscale ${
                showGB && "grayscale-0 opacity-70"
              } cursor-pointer ease-in-out duration-700`}
              src={granboda}
              alt="Gran Boda image"
              onMouseEnter={() => {
                setShowGB(true);
              }}
              onMouseLeave={() => {
                setShowGB(false);
              }}
            />
          </div>
          <div className="h-44 w-10/12 bg-black">
            {showGBO && (
              <AnimatePresence>
                <div className="absolute h-44 w-10/12 grid place-items-center cursor-pointer">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.7 } }}
                    className="z-10 text-7xl lg:text-8xl font-thin text-white font-alex"
                    onMouseEnter={() => {
                      setShowGBO(true);
                    }}
                    onMouseLeave={() => {
                      setShowGBO(false);
                    }}
                  >
                    Gran Boda On-The-Day
                  </motion.span>
                </div>
              </AnimatePresence>
            )}
            <img
              className={`w-full h-full object-cover grayscale ${
                showGBO && "grayscale-0 opacity-70"
              } cursor-pointer ease-in-out duration-700`}
              src={granbodaotd}
              alt="Gran Boda on-the-day image"
              onMouseEnter={() => {
                setShowGBO(true);
              }}
              onMouseLeave={() => {
                setShowGBO(false);
              }}
            />
          </div>
          <div className="h-44 w-10/12 bg-black">
            {showIB && (
              <AnimatePresence>
                <div className="absolute h-44 w-10/12 grid place-items-center cursor-pointer">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.7 } }}
                    className="z-10 inset-0 text-7xl lg:text-8xl font-thin text-secondary font-alex"
                    onMouseEnter={() => {
                      setShowIB(true);
                    }}
                    onMouseLeave={() => {
                      setShowIB(false);
                    }}
                  >
                    Intima Boda
                  </motion.span>
                </div>
              </AnimatePresence>
            )}
            <img
              className={`w-full h-full object-cover grayscale ${
                showIB && "grayscale-0 opacity-70"
              } cursor-pointer ease-in-out duration-700`}
              src={intimaboda}
              alt="Intima Boda image"
              onMouseEnter={() => {
                setShowIB(true);
              }}
              onMouseLeave={() => {
                setShowIB(false);
              }}
            />
          </div>
        </Fade>
      </div>
    </>
  );
};

export default HomePackages;

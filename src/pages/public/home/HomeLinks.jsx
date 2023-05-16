import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Fade } from "react-awesome-reveal";
import yanimlogo from "../../../assets/svg/yanimlogo.svg";
import { motion } from "framer-motion";
import c1 from "../../../assets/img/homecarousel/c1.jpg";
import c2 from "../../../assets/img/homecarousel/c2.jpg";
import c3 from "../../../assets/img/homecarousel/c3.jpg";
import c4 from "../../../assets/img/homecarousel/c4.jpg";
import c5 from "../../../assets/img/homecarousel/c5.jpg";
import c6 from "../../../assets/img/homecarousel/c6.jpg";
import c7 from "../../../assets/img/homecarousel/c7.jpg";
import c8 from "../../../assets/img/homecarousel/c8.jpg";
import c9 from "../../../assets/img/homecarousel/c9.jpg";
import c10 from "../../../assets/img/homecarousel/c10.jpg";
import c11 from "../../../assets/img/homecarousel/c11.jpg";
import c12 from "../../../assets/img/homecarousel/c12.jpg";
import c13 from "../../../assets/img/homecarousel/c13.jpg";

const HomeLinks = () => {
  return (
    <div className="w-screen flex flex-col items-center justify-center bg-neutral">
      <div className=" bg-neutral w-full pb-6 pt-10 flex items-center before:mt-3 before:flex-1 before:border-t-[3px]  before:border-darker before:border-opacity-40 after:mt-3 after:flex-1 after:border-t-[3px] after:border-darker after:border-opacity-40">
        <Fade triggerOnce>
          <p className="engraved-text mx-4 text-center text-7xl lg:text-8xl font-alex dark:text-darker">
            Gallery
          </p>
        </Fade>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={3000}
        dynamicHeight
        className="px-4 md:px-32 w-screen"
      >
        <div>
          <img className="object-cover" src={c1} />
        </div>
        <div>
          <img className="object-cover" src={c2} />
        </div>
        <div>
          <img className="object-cover" src={c3} />
        </div>
        <div>
          <img className="object-cover" src={c4} />
        </div>
        <div>
          <img className="object-cover" src={c5} />
        </div>
        <div>
          <img className="object-cover" src={c6} />
        </div>
        <div>
          <img className="object-cover" src={c7} />
        </div>
        <div>
          <img className="object-cover" src={c8} />
        </div>
        <div>
          <img className="object-cover" src={c9} />
        </div>
        <div>
          <img className="object-cover" src={c10} />
        </div>
        <div>
          <img className="object-cover" src={c11} />
        </div>
        <div>
          <img className="object-cover" src={c12} />
        </div>
        <div>
          <img className="object-cover" src={c13} />
        </div>
      </Carousel>
      <div className=" bg-neutral w-full flex py-1 items-center before:mt-3 before:flex-1 before:border-t-[3px]  before:border-darker before:border-opacity-40 after:mt-3 after:flex-1 after:border-t-[3px] after:border-darker after:border-opacity-40">
        <div className="w-20 h-20 bg-darker grid place-items-center rounded-full mx-3 engraved ">
          <img src={yanimlogo} />
        </div>
      </div>
      <div className="grid place-items-center pb-8 pt-2 px-10 text-center md:text-left">
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

export default HomeLinks;

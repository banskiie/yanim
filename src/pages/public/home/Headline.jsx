import React from "react";
import homeImage from "../../../assets/img/mainpic3.jpg";
import { Fade } from "react-awesome-reveal";

const Headline = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-black">
      <img
        className="w-full h-screen object-cover opacity-50"
        src={homeImage}
        alt=""
      />
      <div className="absolute z-10 grid place-items-center m-auto">
        <Fade cascade triggerOnce duration={2000}>
          <h1 className="w-full md:w-[42rem] lg:w-[70rem] select-none px-5 text-center font-display text-6xl lg:text-9xl text-secondary">
            Making Your Dream Wedding A Reality.
          </h1>
          <button className="btn flex flex-row scale-90 md:scale-100 items-center justify-center gap-x-2 text-secondary bg-primary border-none h-16 w-80 font-primary text-2xl lg:text-3xl bg-opacity-80 mt-12 rounded-xl hover:text-lighter hover:bg-darker ease-in-out duration-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 lg:w-8 lg:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <span>Book Now!</span>
          </button>
        </Fade>
      </div>
    </section>
  );
};

export default Headline;

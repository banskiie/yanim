import React from "react";
import { Fade } from "react-awesome-reveal";
import maincontentimg from "../../../assets/img/homeportrait.png";
import { NavLink } from "react-router-dom";

const MainContent = () => {
  return (
    <main className="bg-neutral w-full h-screen flex flex-row items-center justify-center text-primary gap-x-12 lg:gap-x-24 m-auto ">
      <section className="flex flex-col gap-y-4">
        <Fade direction="left" cascade triggerOnce duration={1000}>
          <h1 className="font-display text-2xl lg:text-6xl">
            Welcome to Yani M.
          </h1>
          <div className="w-56 lg:w-[30rem] text-[0.7rem] lg:text-xl">
            <p>
              We are a team that consists of young professionals from all walks
              of life. We are gathered by our passion to serve and anything
              related to love and tying the knot!
            </p>
            <p>
              We consider the details, preparation, and the coming together of
              everything envisioned as an art to be done precisely,
              systematically, and heartfully. The countless learnings we
              experienced humbled our brand to always strive for growth,
              improvements, and continuous genuine work.
            </p>
          </div>
          <div className="font-display text-md lg:text-3xl">
            <h2>Every union is worth celebrating!</h2>
            <h2>We’d love to celebrate with you!</h2>
          </div>
          <div className="w-full flex justify-center">
            <NavLink
              className="btn w-60 text-xl flex flex-row items-center justify-center gap-x-2"
              to="/about"
            >
              <span>Meet Our Team!</span>
              <svg
                fill="none"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                className="w-6 h-6"
              >
                <path
                  fill="currentColor"
                  d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"
                />
              </svg>
            </NavLink>
          </div>
        </Fade>
      </section>
      <Fade triggerOnce delay={1800}>
        <div className="border-[1px] border-primary p-4 lg:p-8">
          <img
            className="border-[1px] border-primary w-72 h-72 lg:w-[28rem] lg:h-[28rem] object-cover"
            src={maincontentimg}
            alt="A picture of a bride."
          />
        </div>
      </Fade>
    </main>
  );
};

export default MainContent;

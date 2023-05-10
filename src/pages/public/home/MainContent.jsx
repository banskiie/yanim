import React from "react";
import { Fade } from "react-awesome-reveal";
import maincontentimg from "../../../assets/img/homeportrait.png";

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

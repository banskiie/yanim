import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import yaniLogo from "../../assets/svg/yanimlogo.svg";
import yaniLogoDarker from "../../assets/svg/yanimlogodarker.svg";
import { Fade } from "react-awesome-reveal";
import LoginDropDown from "./Dropdown/LoginDropDown";
import { MobileContext } from "../../context/MobileContext";
import MobileDropDown from "./Dropdown/MobileDropDown";

const Navbar = () => {
  const mobileCtx = useContext(MobileContext);

  return (
    <div className="sticky md:absolute bg-neutral md:bg-transparent navbar w-full -mb-32 flex flex-col top-0 left-0 z-50 overflow-x-hidden">
      <a
        href="mailto:yanimevents@gmail.com"
        target="_blank"
        className="w-full bg-darker text-accent hover:text-neutral top-0 absolute h-8 hover:bg-primary cursor-pointer z-50 ease-linear duration-200"
      >
        <p className="text-center mx-auto font-display uppercase text-[0.7rem] md:text-base">
          For more inquiries, email: yanimevents@gmail.com
        </p>
      </a>
      <div className="w-screen bg-transparent mt-6 right-0 h-16 md:h-20 px-4 flex flex-row justify-between items-center z-20">
        <Fade triggerOnce direction="left" cascade duration={750}>
          <div>
            <NavLink to="/">
              <img
                className="h-10 md:h-12"
                src={mobileCtx.darkNav ? yaniLogoDarker : yaniLogo}
                alt="Yani M. Logo"
              />
            </NavLink>
          </div>
        </Fade>
        {!mobileCtx.isMobile ? (
          <>
            <div
              className={`flex flex-row ${
                mobileCtx.darkNav ? "text-darker" : "text-secondary"
              }  font-display text-2xl lg:text-3xl gap-x-6`}
            >
              <Fade
                triggerOnce
                direction="down"
                cascade
                delay={750}
                duration={400}
              >
                <NavLink
                  className={`${
                    mobileCtx.darkNav
                      ? "hover:text-lighter"
                      : "hover:text-primary"
                  } ease-in-out duration-200`}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={`${
                    mobileCtx.darkNav
                      ? "hover:text-lighter"
                      : "hover:text-primary"
                  } ease-in-out duration-200`}
                  to="/about"
                >
                  About Us
                </NavLink>
                <NavLink
                  className={`${
                    mobileCtx.darkNav
                      ? "hover:text-lighter"
                      : "hover:text-primary"
                  } ease-in-out duration-200`}
                  to="/services"
                >
                  Services
                </NavLink>
                <NavLink
                  className={`${
                    mobileCtx.darkNav
                      ? "hover:text-lighter"
                      : "hover:text-primary"
                  } ease-in-out duration-200`}
                  to="/portfolio"
                >
                  Portfolio
                </NavLink>
                <NavLink
                  className={`${
                    mobileCtx.darkNav
                      ? "hover:text-lighter"
                      : "hover:text-primary"
                  } ease-in-out duration-200`}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </Fade>
            </div>
            <Fade triggerOnce direction="right" cascade duration={750}>
              <LoginDropDown darkNav={mobileCtx.darkNav} />
            </Fade>
          </>
        ) : (
          <Fade triggerOnce direction="right" cascade duration={750}>
            <MobileDropDown darkNav={mobileCtx.darkNav} />
          </Fade>
        )}
      </div>
    </div>
  );
};

export default Navbar;

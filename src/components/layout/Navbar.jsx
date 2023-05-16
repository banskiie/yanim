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
    <div className="absolute navbar bg-transparent w-full h-20 px-4 flex flex-row justify-between items-center z-50 top-0 left-0">
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
        <MobileDropDown darkNav={mobileCtx.darkNav} />
      )}
    </div>
  );
};

export default Navbar;

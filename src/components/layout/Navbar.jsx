import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import yaniLogo from "../../assets/svg/yanimlogo.svg";
import yaniLogoDarker from "../../assets/svg/yanimlogodarker.svg";
import { Fade } from "react-awesome-reveal";
import LoginDropDown from "./Dropdown/LoginDropDown";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [darkNav, setDarkNav] = useState(false);

  useEffect(() => {
    if (location.pathname == "/about") {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
  }, [location]);

  return (
    <div className="absolute navbar bg-transparent w-full h-20 px-4 flex flex-row justify-between items-center z-50">
      <Fade triggerOnce direction="left" cascade duration={750}>
        <div>
          <NavLink to="/">
            <img
              className="h-12"
              src={darkNav ? yaniLogoDarker : yaniLogo}
              alt="Yani M. Logo"
            />
          </NavLink>
        </div>
      </Fade>
      <div
        className={`flex flex-row ${
          darkNav ? "text-darker" : "text-secondary"
        }  font-display text-2xl lg:text-3xl gap-x-6`}
      >
        <Fade triggerOnce direction="down" cascade delay={750} duration={400}>
          <NavLink
            className={`${
              darkNav ? "hover:text-lighter" : "hover:text-primary"
            } ease-in-out duration-200`}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={`${
              darkNav ? "hover:text-lighter" : "hover:text-primary"
            } ease-in-out duration-200`}
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className={`${
              darkNav ? "hover:text-lighter" : "hover:text-primary"
            } ease-in-out duration-200`}
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className={`${
              darkNav ? "hover:text-lighter" : "hover:text-primary"
            } ease-in-out duration-200`}
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            className={`${
              darkNav ? "hover:text-lighter" : "hover:text-primary"
            } ease-in-out duration-200`}
            to="/contact"
          >
            Contact
          </NavLink>
        </Fade>
      </div>
      <Fade triggerOnce direction="right" cascade duration={750}>
        <LoginDropDown darkNav={darkNav} />
      </Fade>
    </div>
  );
};

export default Navbar;

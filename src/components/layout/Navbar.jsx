import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import yaniLogo from "../../assets/svg/yanimlogo.svg";
import { Fade } from "react-awesome-reveal";
import LoginDropDown from "./Dropdown/LoginDropDown";

const Navbar = () => {
  return (
    <div className="absolute navbar overflow-x-hidden bg-gradient-to-b from-darker to-transparent w-full h-52 pb-28 px-4 md:px-16 flex flex-row justify-between items-center z-10">
      <Fade triggerOnce direction="left" cascade duration={750}>
        <div>
          <NavLink to="/">
            <img className="h-12" src={yaniLogo} alt="Yani M. Logo" />
          </NavLink>
        </div>
      </Fade>
      <div className="flex flex-row text-secondary font-display text-2xl lg:text-3xl gap-x-6">
        <Fade triggerOnce direction="down" cascade delay={750} duration={400}>
          <NavLink
            className="hover:text-primary ease-in-out duration-500"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:text-primary ease-in-out duration-200"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            className="hover:text-primary ease-in-out duration-200"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            className="hover:text-primary ease-in-out duration-200"
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink
            className="hover:text-primary ease-in-out duration-200"
            to="/contact"
          >
            Contact
          </NavLink>
        </Fade>
      </div>
      <Fade triggerOnce direction="right" cascade duration={750}>
        <LoginDropDown />
      </Fade>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import yaniLogo from "../../assets/svg/yanimlogo.svg";
import { Fade } from "react-awesome-reveal";
import LoginDropDown from "./Dropdown/LoginDropDown";

const Navbar = () => {
  const [loginDropDown, setLoginDropDown] = useState(false);

  const dropdownContent = <LoginDropDown />;

  return (
    <div className="absolute overflow-x-hidden bg-gradient-to-b from-darker to-transparent w-full h-52 pb-28 px-4 md:px-16 flex flex-row justify-between items-center z-10">
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
        <button
          type="button"
          onClick={() => {
            setLoginDropDown((prevState) => !prevState);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 mx-4 stroke-secondary hover:stroke-primary ease-in-out duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      </Fade>
      {loginDropDown && dropdownContent}
    </div>
  );
};

export default Navbar;

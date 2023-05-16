import React from "react";
import { NavLink } from "react-router-dom";

const MobileDropDown = () => {
  const handleClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn">
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className="h-8 w-8 fill-primary"
        >
          <path d="M21 15.61L19.59 17l-5.01-5 5.01-5L21 8.39 17.44 12 21 15.61M3 6h13v2H3V6m0 7v-2h10v2H3m0 5v-2h13v2H3z" />
        </svg>
      </label>

      <div
        tabIndex={0}
        className="dropdown-content z-10 absolute top-0 right-0 menu bg-opacity-95 font-display -m-4 text-darker bg-neutral text-4xl uppercase "
      >
        <div className="btn absolute top-4 right-2" onClick={handleClick}>
          <svg
            viewBox="0 0 1024 1024"
            fill="currentColor"
            height="1em"
            width="1em"
            className="fill-darker h-10 w-10"
          >
            <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z" />
            <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
          </svg>
        </div>
        <div className="flex flex-col justify-center items-center h-screen w-screen divide-y-[1px] divide-darker">
          <NavLink
            onClick={handleClick}
            className="hover:text-lighter w-48 text-center py-4"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={handleClick}
            className="hover:text-lighter w-48 text-center py-4"
            to="/about"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={handleClick}
            className="hover:text-lighter w-48 text-center py-4"
            to="/services"
          >
            Services
          </NavLink>
          <NavLink
            onClick={handleClick}
            className="hover:text-lighter w-48 text-center py-4"
            to="/portfolio"
          >
            Portfolio
          </NavLink>
          <NavLink
            onClick={handleClick}
            className="hover:text-lighter w-48 text-center py-4"
            to="/contact"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default MobileDropDown;

import React from "react";
import yanimLogo from "../../assets/svg/yanimlogodarker.svg";
import gmailicon from "../../assets/svg/footer-icons/gmail.svg";
import contnoicon from "../../assets/svg/footer-icons/contno.svg";
import fbicon from "../../assets/svg/footer-icons/fb.svg";
import igicon from "../../assets/svg/footer-icons/ig.svg";

const Footer = () => {
  return (
    <div className="w-full z-10">
      <div className="bg-accent grid place-items-center text-darker py-4 md:py-8 gap-y-4">
        <div className="flex flex-row gap-x-3 items-center justify-center">
          <div className="flex flex-row gap-x-2 items-center justify-start">
            <img className="w-4" src={contnoicon} alt="" />
            <span className="hidden md:block">09123457678</span>
          </div>
          <span className="hidden md:block">|</span>
          <div className="flex flex-row gap-x-2 items-center justify-start">
            <img className="w-4" src={gmailicon} alt="" />
            <span className="hidden md:block">yanimevents@gmail.com</span>
          </div>
          <span className="hidden md:block">|</span>
          <div>
            <a
              className="link-darker flex flex-row gap-x-2 items-center justify-start"
              href="https://www.facebook.com/yanimevents/"
            >
              <img className="w-4" src={fbicon} alt="" />
              <span className="hidden md:block">yanimevents</span>
            </a>
          </div>
          <span className="hidden md:block">|</span>
          <div>
            <a
              className="flex flex-row gap-x-2 items-center justify-start"
              href="https://www.instagram.com/yanimweddings/"
            >
              <img className="w-4" src={igicon} alt="" />
              <span className="hidden md:block">@yanimweddings</span>
            </a>
          </div>
        </div>
      </div>
      <div className="md:px-6 py-2 bg-darker text-center text-white font-thin flex flex-col md:flex-row justify-between items-center text-sm md:text-md">
        <span className="">
          All Rights Reserved | Yani M. Wedding and Events 2023
        </span>
        <a href="https://shand-dev.vercel.app">Designed by Ivan Sinohon</a>
      </div>
    </div>
  );
};

export default Footer;

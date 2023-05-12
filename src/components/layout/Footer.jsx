import React from "react";
import yanimLogo from "../../assets/svg/yanimlogodarker.svg";
import gmailicon from "../../assets/svg/footer-icons/gmail.svg";
import contnoicon from "../../assets/svg/footer-icons/contno.svg";
import fbicon from "../../assets/svg/footer-icons/fb.svg";
import igicon from "../../assets/svg/footer-icons/ig.svg";

const Footer = () => {
  return (
    <div className="w-full z-10">
      <div className=" bg-accent flex flex-col justify-center items-center text-darker py-8 gap-y-4">
        {/* <div>
          <span className="text-5xl font-thin">Yani M. Wedding & Events</span>
        </div> */}
        <div className="flex flex-row gap-x-3">
          <div className="flex flex-row gap-x-2 items-center justify-start">
            <img className="w-4" src={contnoicon} alt="" />
            <span>09123457678</span>
          </div>
          <span>|</span>
          <div className="flex flex-row gap-x-2 items-center justify-start">
            <img className="w-4" src={gmailicon} alt="" />
            <span>yanimevents@gmail.com</span>
          </div>
          <span>|</span>
          <div className="flex flex-row gap-x-2 items-center justify-start">
            <img className="w-4" src={fbicon} alt="" />
            <a
              className="link-darker"
              href="https://www.facebook.com/yanimevents/"
            >
              yanimevents
            </a>
          </div>
          <span>|</span>
          <div className="flex flex-row gap-x-2 items-center justify-start">
            <img className="w-4" src={igicon} alt="" />
            <a href="https://www.instagram.com/yanimweddings/">
              @yanimweddings
            </a>
          </div>
        </div>
      </div>
      <div className="h-10 px-12 bg-darker text-white font-thin flex flex-row justify-between items-center">
        <span>All Rights Reserved | Yani M. Wedding and Events 2023</span>
        <a href="https://shand-dev.vercel.app">Designed by Ivan Sinohon</a>
      </div>
    </div>
  );
};

export default Footer;

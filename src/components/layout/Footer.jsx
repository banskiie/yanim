import React from "react";
import yanimLogo from "../../assets/svg/yanimlogodarker.svg";
import gmailicon from "../../assets/svg/footer-icons/gmail.svg";
import contnoicon from "../../assets/svg/footer-icons/contno.svg";
import fbicon from "../../assets/svg/footer-icons/fb.svg";
import igicon from "../../assets/svg/footer-icons/ig.svg";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="h-48 bg-secondary flex justify-center items-center">
        <div className="w-9/12 h-4/5 flex flex-row justify-around items-center">
          <div className="w-1/3 h-full grid place-items-center border-r-2 border-darker border-opacity-50">
            <img
              className="w-1/2"
              src={yanimLogo}
              alt="Yani M Logo for footer"
            />
          </div>
          <div className="w-1/3 h-full grid place-items-center border-r-2 border-darker border-opacity-50">
            <p>Contact</p>
          </div>
          <div className="w-1/3 h-full grid place-items-center text-darker">
            <div className="flex flex-col">
              <div className="flex flex-row gap-x-2 items-center justify-start">
                <img className="w-4" src={gmailicon} alt="" />
                <span>yanimevents@gmail.com</span>
              </div>
              <div className="flex flex-row gap-x-2 items-center justify-start">
                <img className="w-4" src={contnoicon} alt="" />
                <span>09123457678</span>
              </div>
              <div className="flex flex-row gap-x-2 items-center justify-start">
                <img className="w-4" src={fbicon} alt="" />
                <a href="https://www.facebook.com/yanimevents/">yanimevents</a>
              </div>
              <div className="flex flex-row gap-x-2 items-center justify-start">
                <img className="w-4" src={igicon} alt="" />
                <a href="https://www.instagram.com/yanimweddings/">
                  @yanimweddings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 px-12 bg-darker text-white font-thin flex flex-row justify-between items-center">
        <span>All Rights Reserved | Yani M. Wedding and Events</span>
        <a href="https://shand-dev.vercel.app">Designed by Ivan Sinohon</a>
      </div>
    </div>
  );
};

export default Footer;

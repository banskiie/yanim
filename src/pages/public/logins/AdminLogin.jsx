import React, { useContext } from "react";
import adminbg from "../../../assets/img/adminloginbg.jpg";
import { NavLink } from "react-router-dom";

const ClientLogin = () => {
  return (
    <div className="grid place-items-center">
      <div className="bg-slate-100 bg-opacity-95 absolute z-10 p-8 flex flex-col items-start justify-center rounded-lg drop-shadow-2xl mt-16">
        <div className="text-4xl font-semibold w-full pb-8 flex flex-row items-center justify-center gap-x-2 text-darker select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 stroke-darker"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
            />
          </svg>
          <span>Admin</span>
        </div>

        <label
          htmlFor="email-input"
          className="text-xl text-slate-500 font-sans font-semibold"
        >
          EMAIL
        </label>
        <input
          id="email-input"
          name="email-input"
          className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none text-primary font-semibold focus:text-darker"
          type="email"
          maxLength={50}
          placeholder="email@test.com"
          aria-required
        />

        <label
          htmlFor="password-input"
          className="text-xl text-slate-500 font-sans font-semibold"
        >
          PASSWORD
        </label>
        <input
          id="password-input"
          name="password-input"
          className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 py-1 outline-none  text-primary font-semibold focus:text-darker"
          type="password"
          maxLength={50}
          placeholder="••••••••••"
          aria-required
        />
        
        <button className="btn w-full bg-gradient-to-r text-md from-primary to-lighter text-neutral font-sans font-semibold text-xl mt-6 py-2 rounded-2xl hover:from-darker hover:to-primary hover:text-accent hover:drop-shadow-md">
          LOGIN
        </button>
      </div>
      <section className="bg-black">
        <img
          className="w-screen h-screen object-cover opacity-60"
          src={adminbg}
          alt=""
        />
      </section>
    </div>
  );
};

export default ClientLogin;

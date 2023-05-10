import React from "react";
import loginbg from "../../../assets/img/loginbg.jpg";
import { NavLink } from "react-router-dom";

const ClientRegister = () => {
  return (
    <div className="grid place-items-center">
      <div className="bg-slate-100 bg-opacity-95 absolute z-10 p-8 flex flex-col items-start justify-center rounded-lg drop-shadow-2xl mt-16">
        <div className="text-4xl font-semibold w-full pb-8 flex flex-row items-center justify-center gap-x-2 text-darker select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10 stroke-darker"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
            />
          </svg>
          <span>Registration</span>
        </div>
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col">
            <label
              htmlFor="client-first-name"
              className="text-xl text-slate-500 font-sans font-semibold"
            >
              FIRST NAME
            </label>
            <input
              id="client-first-name"
              name="client-first-name"
              className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none text-primary font-semibold focus:text-darker"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="client-last-name"
              className="text-xl text-slate-500 font-sans font-semibold"
            >
              LAST NAME
            </label>
            <input
              id="client-last-name"
              name="client-last-name"
              className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none text-primary font-semibold focus:text-darker"
              type="text"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="client-email"
              className="text-xl text-slate-500 font-sans font-semibold"
            >
              EMAIL
            </label>
            <input
              id="client-email"
              name="client-email"
              className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none text-primary font-semibold focus:text-darker"
              type="email"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="client-contact-no"
              className="text-xl text-slate-500 font-sans font-semibold"
            >
              CONTACT NUMBER
            </label>
            <input
              id="client-contact-no"
              name="client-contact-no"
              className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none text-primary font-semibold focus:text-darker"
              type="tel"
              pattern="[0-9]{11}"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="client-password"
              className="text-xl text-slate-500 font-sans font-semibold"
            >
              PASSWORD
            </label>
            <input
              id="client-password"
              name="client-password"
              className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none  text-primary font-semibold focus:text-darker"
              type="password"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="confirm-password"
              className="text-xl text-slate-500 font-sans font-semibold"
            >
              CONFIRM PASSWORD
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              className="w-96 text-xl font-sans bg-transparent border-b-[3px] border-darker mt-2 mb-3 py-1 outline-none  text-primary font-semibold focus:text-darker"
              type="password"
            />
          </div>
        </div>

        <button className="btn w-full bg-gradient-to-r text-md from-primary to-lighter text-neutral font-sans font-semibold text-xl mt-8 py-2 rounded-2xl hover:from-darker hover:to-primary hover:text-accent ">
          REGISTER
        </button>
        <span className="w-full text-center text-xl pt-3 select-none font-display text-lighter">
          Already have an account?{" "}
          <NavLink
            to="/client_login"
            className="text-primary hover:text-darker ease-in-out duration-150"
          >
            Sign In.
          </NavLink>
        </span>
      </div>
      <section className="bg-black">
        <img
          className="w-screen h-screen object-cover opacity-60"
          src={loginbg}
          alt=""
        />
      </section>
    </div>
  );
};

export default ClientRegister;

import React, { useContext } from "react";
import loginbg from "../../../assets/img/loginbg.jpg";
import { NavLink } from "react-router-dom";
import googleicon from "../../../assets/svg/login-icons/google.svg";
import fbicon from "../../../assets/svg/login-icons/facebook.svg";
import twittericon from "../../../assets/svg/login-icons/twitter.svg";
import { AuthContext } from "../../../context/AuthContext";
import { auth } from "../../../config/firebase";

const ClientLogin = () => {
  const authCtx = useContext(AuthContext);

  return (
    <div className="grid place-items-center">
      <div className="bg-slate-100 bg-opacity-95 absolute z-10 p-8 flex flex-col items-start justify-center rounded-lg drop-shadow-2xl mb-16">
        <div className="text-4xl font-semibold w-full pb-8 flex flex-row items-center justify-center gap-x-2 text-darker select-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 stroke-darker ease-in-out duration-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
          <span>Client</span>
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
          placeholder="••••••••"
          aria-required
        />

        <button className="w-full bg-gradient-to-r text-md from-primary to-lighter text-neutral font-sans font-semibold text-xl mt-6 py-2 rounded-2xl hover:from-darker hover:to-primary hover:text-accent">
          LOGIN
        </button>

        <div className="my-4 w-full flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-400 after:mt-0.5 after:flex-1 after:border-t after:border-slate-400">
          <p className="mx-4 mb-0 text-center font-semibold dark:text-slate-400">
            OR
          </p>
        </div>

        <div className="w-full flex flex-row items-center justify-center gap-x-4">
          <button onClick={authCtx.signInWithGoogle}>
            <img className="h-8" src={googleicon} alt="Google icon for login" />
          </button>
          <button>
            <img className="h-8" src={fbicon} alt="Facebook icon for login" />
          </button>
          <button>
            <img
              className="h-8"
              src={twittericon}
              alt="Twitter icon for login"
            />
          </button>
        </div>
        <span className="w-full text-center text-xl pt-6 select-none font-display">
          Don't have an account?{" "}
          <NavLink
            to="/register"
            className="text-primary hover:text-darker ease-in-out duration-150"
          >
            Sign Up.
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

export default ClientLogin;

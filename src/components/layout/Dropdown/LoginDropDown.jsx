import React from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const LoginDropDown = () => {
  return (
    <div className="absolute right-0 top-20 pr-20 flex flex-col items-center justify-center gap-y-4">
      <NavLink
        className="flex flex-col items-center justify-center"
        to="/client_login"
        data-tooltip-id="client-login-tooltip"
        data-tooltip-content="Client"
      >
        <Tooltip id="client-login-tooltip" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 stroke-secondary hover:stroke-primary ease-in-out duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      </NavLink>
      <NavLink
        className="flex flex-col items-center justify-center"
        to="/admin_login"
        data-tooltip-id="admin-login-tooltip"
        data-tooltip-content="Admin"
      >
        <Tooltip id="admin-login-tooltip" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 stroke-secondary hover:stroke-primary ease-in-out duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
          />
        </svg>
      </NavLink>
    </div>
  );
};

export default LoginDropDown;

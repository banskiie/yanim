import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/home/Home";
import AboutUs from "../pages/public/about/AboutUs";
import Services from "../pages/public/services/Services";
import Portfolio from "../pages/public/portfolio/Portfolio";
import Contact from "../pages/public/contact/Contact";
import ClientLogin from "../pages/public/logins/ClientLogin";
import ClientRegister from "../pages/public/logins/ClientRegister";
import AdminLogin from "../pages/public/logins/AdminLogin";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" index Component={Home} />
      <Route path="/about" Component={AboutUs} />
      <Route path="/services" Component={Services} />
      <Route path="/portfolio" Component={Portfolio} />
      <Route path="/contact" Component={Contact} />
      <Route path="/client_login" Component={ClientLogin} />
      <Route path="/register" Component={ClientRegister} />
      <Route path="/admin_login" Component={AdminLogin} />
    </Routes>
  );
};

export const ClientRoutes = () => {
  return <div>routes</div>;
};

export const AdminRoutes = () => {
  return <div>routes</div>;
};

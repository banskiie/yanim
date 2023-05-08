import React from "react";
import Navbar from "./components/layout/Navbar";
import { PublicRoutes } from "./routes/routes";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <PublicRoutes />
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./styles/effects.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext.jsx";
import MobileContextProvider from "./context/MobileContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MobileContextProvider>
          <App />
        </MobileContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

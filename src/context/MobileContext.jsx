import React, { createContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const MobileContext = createContext({ isMobile: false, darkNav: false });

const MobileContextProvider = (props) => {
  const location = useLocation();
  const [darkNav, setDarkNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    if (location.pathname == "/about") {
      setDarkNav(true);
    } else {
      setDarkNav(false);
    }
  }, [location]);

  useEffect(() => {
    const resizeW = () => setWindowSize(window.innerWidth);

    window.addEventListener("resize", resizeW);

    if (windowSize <= 768) {
      setIsMobile(true);
      setDarkNav(true);
    } else {
      setIsMobile(false);
      if (location.pathname == "/about") {
        return;
      }
      setDarkNav(false);
    }

    return () => window.removeEventListener("resize", resizeW);
  }, [windowSize, location]);

  return (
    <MobileContext.Provider value={{ isMobile, darkNav }}>
      {props.children}
    </MobileContext.Provider>
  );
};

export default MobileContextProvider;

import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const useDarkMode = () => useContext(DarkModeContext);

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);

    // Toggle body color here
    if (darkMode) {
      document.body.classList.remove("bg-dark");
      document.body.classList.add("bg-light");
    } else {
      document.body.classList.remove("bg-light");
      document.body.classList.add("bg-dark");
    }

    console.log("lol");
    console.log(darkMode);
  };

  return <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

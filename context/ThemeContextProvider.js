import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <ThemeContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

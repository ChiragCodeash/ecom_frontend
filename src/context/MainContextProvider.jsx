import React from "react";
import ThemeState from "./state/ThemeState";
import GlobalState from "./state/GlobalState";

const MainContextProvider = ({ children }) => {
  return (
    <GlobalState>
      <ThemeState>{children}</ThemeState>
    </GlobalState>
  );
};

export default MainContextProvider;

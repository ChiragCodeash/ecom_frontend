import React from "react";
import ThemeState from "./state/ThemeState";
import GlobalState from "./state/GlobalState";
import AuthState from "./state/AuthState";

const MainContextProvider = ({ children }) => {
  return (
    <AuthState>
      <GlobalState>
        <ThemeState>{children}</ThemeState>
      </GlobalState>
    </AuthState>
  );
};

export default MainContextProvider;

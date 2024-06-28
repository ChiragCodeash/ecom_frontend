import React from "react";
import { AuthContext } from "../CreateContext";

const AuthState = ({ children }) => {
  const defaultValue = {
    name: "Chirag",
  };
  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

export default AuthState;

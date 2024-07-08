import React from "react";
import ThemeState from "./state/ThemeState";
import GlobalState from "./state/GlobalState";
import AuthState from "./state/AuthState";
import ProfileState from "./state/ProfileState";
import ProductState from "./state/ProductState";

const MainContextProvider = ({ children }) => {
  return (
    <AuthState>
      <GlobalState>
        <ThemeState>
          <ProfileState>
            <ProductState>

            {children}
            </ProductState>
            </ProfileState>
        </ThemeState>
      </GlobalState>
    </AuthState>
  );
};

export default MainContextProvider;

import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./componets/Layout";
import { ThemeProvider } from "styled-components";
import routes from "./routes";
import Page404 from "./componets/pages/Page404";
import GotoTop from "./componets/common/GotoTop";
import { GlobalContext, ThemeContext } from "./context/CreateContext";
import Loading from "./componets/common/Loading";
import SimpleMap from "./componets/common/SimpleMap";
import GlobalStyle from "./GlobalStyle";
import GlobalState from "./context/state/GlobalState";
const App = () => {
  const { getTheme, themePallete } = useContext(ThemeContext);
  const { showGlobalLoading } = useContext(GlobalContext);

  useEffect(() => {
    getTheme();
  }, []);

  const themeObj = {
    text: "#283618",
    body: "#fefae0",
    primary: "#bc6c25",
    secondary: "#dda15e",
    light: "#fefae0",
    dark: "#606c38",
  };
  return (
    <>
      <GotoTop />
      <Loading status={showGlobalLoading} />
      {themePallete && (
        <ThemeProvider theme={themePallete}>
          {/* <GlobalStyle /> */}
          <Routes>
            {routes.map((route, index) => {
              if (route.NestedRoutes) {
                return (
                  <Route
                    key={index}
                    path="/profile"
                    element={
                      <Layout Componets={route.component} title={route.title} />
                    }
                  >
                    {route.NestedRoutes.map((item, key) => {
                      return (
                        <Route
                          path={item.path}
                          key={key}
                          element={<item.component />}
                        />
                      );
                    })}
                  </Route>
                );
              } else {
                return (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    element={
                      <Layout Componets={route.component} title={route.title} />
                    }
                  />
                );
              }
            })}
            <Route exact path="*" element={<Page404 />} />
            <Route exact path="/test" element={<SimpleMap />} />
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;

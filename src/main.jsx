import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainContextProvider from "./context/MainContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <MainContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MainContextProvider>
  // </React.StrictMode>,
);

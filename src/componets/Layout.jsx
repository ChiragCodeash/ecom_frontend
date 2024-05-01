import React from "react";
import Header from "./common/header";
import Footer from "./common/Footer";

const Layout = ({ Componets, title }) => {
  return (
    <>
      <Header />
      <Componets title={title} />
      <Footer />
    </>
  );
};

export default Layout;

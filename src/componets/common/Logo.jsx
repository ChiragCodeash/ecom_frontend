import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img
            src="/assets/images/logo.png"
            alt="Uomo"
            className="logo__image d-block"
          />
        </Link>
      </div>
    </>
  );
};

export default Logo;

import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";

const Authentication = () => {
  const [Opration, setOpration] = useState("login");
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="login-register container">
          <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link nav-link_underscore cursor_pointer gclass-text ${
                  Opration == "login" && "active"
                }`}
                id="login-tab"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-item-login"
                aria-selected="false"
                onClick={() => {
                  setOpration("login");
                }}
                
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link nav-link_underscore cursor_pointer gclass-text ${
                  Opration == "reg" && "active"
                }`}
                id="register-tab"
                data-bs-toggle="tab"
                // href="#tab-item-register"
                role="tab"
                aria-controls="tab-item-register"
                aria-selected="true"
                onClick={() => {
                  setOpration("reg");
                }}
              >
                Register
              </a>
            </li>
          </ul>
          <div className="pt-2" id="login_register_tab_content">
            {Opration == "login" && <Login setOpration={setOpration} />}
            {Opration == "reg" && <Registration setOpration={setOpration} />}
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
    </>
  );
};

export default Authentication;

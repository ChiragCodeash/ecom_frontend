import React from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

const Login = ({ setOpration }) => {
  return (
    <>
      <Fade>
        <div
          className="tab-pane fade"
          id="tab-item-login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <div className="login-form gclass-form">
            <form name="login-form" className="needs-validation" noValidate="">
              <div className="form-floating mb-3">
                <input
                  name="login_email"
                  type="email"
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email address *"
                  required=""
                />
                <label htmlFor="customerNameEmailInput">Email address *</label>
              </div>
              <div className="pb-3" />
              <div className="form-floating mb-3">
                <input
                  name="login_password"
                  type="password"
                  className="form-control form-control_gray"
                  id="customerPasswodInput"
                  placeholder="Password *"
                  required=""
                />
                <label htmlFor="customerPasswodInput">Password *</label>
              </div>
              <div className="d-flex align-items-center mb-3 pb-2">
                <div className="form-check mb-0">
                  <input
                    name="remember"
                    className="form-check-input form-check-input_fill cursor_pointer"
                    type="checkbox"
                    defaultValue=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label text-secondary cursor_pointer"
                    htmlFor="flexCheckDefault"
                  >
                    Remember me
                  </label>
                </div>
            <Link to={"/reset"} className="btn-text ms-auto gclass-text">
                  Lost password?
                </Link>
              </div>
              <button
                className="btn btn-primary  w-100 text-uppercase gclass-button"
                type="submit"
              >
                Log In
              </button>
              <div className="customer-option mt-4 text-center">
                <span className="text-secondary gclass-text">No account yet? </span>
                <a
                  onClick={() => {
                    setOpration("reg");
                  }}
                  className="btn-text js-show-register cursor_pointer gclass-text"
                >
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Login;

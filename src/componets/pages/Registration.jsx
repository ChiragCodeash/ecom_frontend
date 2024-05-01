import React from "react";
import { Fade } from "react-reveal";

const Registration = () => {
  return (
    <>
      <Fade>
        <div
          className="tab-pane fade active show"
          id="tab-item-register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <div className="register-form">
            <form
              name="register-form"
              className="needs-validation gclass-form"
              noValidate=""
            >
              <div className="form-floating mb-3">
                <input
                  name="register_username"
                  type="text"
                  className="form-control form-control_gray"
                  id="customerNameRegisterInput"
                  placeholder="Username"
                  required=""
                />
                <label htmlFor="customerNameRegisterInput">Username</label>
              </div>
              <div className="pb-3" />
              <div className="form-floating mb-3">
                <input
                  name="register_email"
                  type="email"
                  className="form-control form-control_gray"
                  id="customerEmailRegisterInput"
                  placeholder="Email address *"
                  required=""
                />
                <label htmlFor="customerEmailRegisterInput">
                  Email address *
                </label>
              </div>
              <div className="pb-3" />
              <div className="form-floating mb-3">
                <input
                  name="register_password"
                  type="password"
                  className="form-control form-control_gray"
                  id="customerPasswodRegisterInput"
                  placeholder="Password *"
                  required=""
                />
                <label htmlFor="customerPasswodRegisterInput">Password *</label>
              </div>
              <div className="d-flex align-items-center mb-3 pb-2">
                <p className="m-0 gclass-text">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>
              <button
                className="btn btn-primary w-100 text-uppercase gclass-button"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default Registration;

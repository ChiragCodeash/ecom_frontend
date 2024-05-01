import React from "react";
import { Link } from "react-router-dom";

const ResPass = () => {
  return (
    <div>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="login-register container">
          <h2 className="section-title text-center fs-3 mb-xl-5">
            Reset Your Password
          </h2>
          <p>We will send you an email to reset your password</p>
          <div className="reset-form">
            <form name="reset-form" className="needs-validation" noValidate="">
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
              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Submit
              </button>
              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">Back to</span>
                <Link
                  to="/auth"
                  className="btn-text js-show-register"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
    </div>
  );
};

export default ResPass;

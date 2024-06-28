import { useFormik } from "formik";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { LoginSchema } from "../../Schema/AuthSchemas";

const Login = ({ setOpration }) => {
  const [regiData, setRegiData] = useState({
    email: "",
    password: "",
  });

  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: regiData,
      validationSchema: LoginSchema,
      onSubmit: () => {
        console.log("values----->", values);
      },
    });
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
            <form >
            <div
              className={`form-floating mb-3 ${
                touched.email && errors.email && "input-error"
              }`}
            >
              <input
                name="email"
                type="email"
                className={`form-control form-control_gray`}
                id="email"
                placeholder="Email address *"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label htmlFor="email">Email address *</label>
              {touched.email && errors.email && (
                <span className="fw-semi-bold">{errors.email}</span>
              )}
            </div>
            <div className="pb-3" />
            <div
              className={`form-floating mb-3 ${
                touched.password && errors.password && "input-error"
              }`}
            >
              <input
                name="password"
                autoComplete={"password"}
                type="password"
                className={`form-control form-control_gray`}
                id="password"
                placeholder="Password *"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <label htmlFor="password">Password *</label>
              {touched.password && errors.password && (
                <span className="fw-semi-bold">{errors.password}</span>
              )}
            </div>
            {/* <div className="d-flex align-items-center mb-3 pb-2">
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
              </div> */}
            <button
              className="btn btn-primary  w-100 text-uppercase gclass-button"
              type="button"
              onClick={handleSubmit}
            >
              Log In
            </button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary gclass-text">
                No account yet?{" "}
              </span>
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

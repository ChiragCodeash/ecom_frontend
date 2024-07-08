import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LoginSchema } from "../../Schema/AuthSchemas";
import { AuthContext } from "../../context/CreateContext";
import { Fade } from "react-awesome-reveal";

const Login = ({ setOpration }) => {
  const location = useLocation();
  const navigate = useNavigate();


  const {Login , GetToken} = useContext(AuthContext)
  const [regiData, setRegiData] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    GetToken() && navigate("/")
  },[])

  const { values, handleBlur, handleChange, errors, touched, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: regiData,
      validationSchema: LoginSchema,
      onSubmit: () => {
        Login(values)
      },
    });
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="login-register container">
          <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link nav-link_underscore cursor_pointer gclass-text ${
                  location.pathname == "/login" && "active"
                }`}
                id="login-tab"
                data-bs-toggle="tab"
                role="tab"
                aria-controls="tab-item-login"
                aria-selected="false"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className={`nav-link nav-link_underscore cursor_pointer gclass-text ${
                  location.pathname == "/registration" && "active"
                }`}
                id="register-tab"
                data-bs-toggle="tab"
                // href="#tab-item-register"
                role="tab"
                aria-controls="tab-item-register"
                aria-selected="true"
                onClick={() => {
                  navigate("/registration");
                }}
              >
                Register
              </a>
            </li>
          </ul>
          
          <div className="pt-2" id="login_register_tab_content">
            {/* <Fade> */}
              {/* <div
                className="tab-pane"
                id="tab-item-login"
                role="tabpanel"
                aria-labelledby="login-tab"
                > */}
                
                
                <div className="login-form gclass-form">
                  <form>
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
                          navigate("/registration");
                        }}
                        className="btn-text js-show-register cursor_pointer gclass-text"
                      >
                        Create Account
                      </a>
                    </div>
                  </form>
                </div>
              {/* </div> */}
            {/* </Fade> */}
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
    </>
  );
};

export default Login;

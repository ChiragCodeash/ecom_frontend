import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { RegistrationSchema } from "../../Schema/AuthSchemas";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/CreateContext";

const Registration = () => {
  const { GetToken , Registration} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const [regiData, setRegiData] = useState({
    name: "",
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
      validationSchema: RegistrationSchema,
      onSubmit: () => {
        console.log(values)
        Registration(values)
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
            <Fade>
              <div
                className="tab-pane fade active show"
                id="tab-item-register"
                role="tabpanel"
                aria-labelledby="register-tab"
              >
                <div className="register-form gclass-form">
                  <form>
                    <div
                      className={`form-floating mb-3 ${
                        touched.name && errors.name && "input-error"
                      }`}
                    >
                      <input
                        name="name"
                        type="text"
                        className={`form-control form-control_gray`}
                        id="name"
                        placeholder="Name *"
                        value={values.name}
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <label htmlFor="name">Name *</label>
                      {touched.name && errors.name && (
                        <span className="fw-semi-bold">{errors.name}</span>
                      )}
                    </div>
                    <div className="pb-3" />
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
                        type="password"
                        autoComplete={"password"}
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
                    <div className="d-flex align-items-center mb-3 pb-2">
                      <p className="m-0 gclass-text">
                        Your personal data will be used to support your
                        experience throughout this website, to manage access to
                        your account, and for other purposes described in our
                        privacy policy.
                      </p>
                    </div>
                    <button
                      className="btn btn-primary w-100 text-uppercase gclass-button"
                      type="button"
                      onClick={handleSubmit}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </Fade>
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"></div>
    </>
  );
};

export default Registration;

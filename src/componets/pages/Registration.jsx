
import { useFormik } from "formik";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import {RegistrationSchema} from "../../Schema/AuthSchemas";

const Registration = () => {
  const [regiData, setRegiData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
    handleSubmit,
  } = useFormik({
    enableReinitialize: true,
    initialValues: regiData,
    validationSchema: RegistrationSchema,
    onSubmit: () => {
      console.log("values----->" , values);
    },
  });
  return (
    <>
      <Fade>
        <div
          className="tab-pane fade active show"
          id="tab-item-register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <div className="register-form gclass-form">
            <form
              >
            <div className={`form-floating mb-3 ${
                  touched.name && errors.name && "input-error"
                }`}>
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
            <div className={`form-floating mb-3 ${
                  touched.email && errors.email && "input-error"
                }`}>
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
            <div className={`form-floating mb-3 ${
                  touched.password && errors.password && "input-error"
                }`}>
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
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our privacy policy.
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
    </>
  );
};

export default Registration;

import { useFormik } from "formik";
import React, { useContext } from "react";
import { GlobalContext, ProfileContext } from "../../context/CreateContext";
import { UpdateAddressSchema, UpdateProfileSchema } from "../../Schema/ProfileSchemas";

const AccountDetails = () => {
  const { user ,GetState , GetCity} = useContext(GlobalContext);
  const { UpdateProfile , UpdateAddress } = useContext(ProfileContext);

  // console.log(GetState())
  // console.log(GetCity("Gujarat"))
  const UpdateProfileForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: user && user.name,
      mno: user &&  user.mno,
    },
    validationSchema: UpdateProfileSchema,
    onSubmit: (val) => {
      // console.log(first)
      UpdateProfile(val);
    },
  });

  const UpdateaddressForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      line1: user &&  user.address?.line1 || "",
      line2:user &&   user.address?.line2 || "",
      area: user &&  user.address?.area || "",
      city: user &&  user.address?.city || "",
      state: user &&  user.address?.state || "",
      pincode: user &&  user.address?.pincode || "",
    },
    validationSchema: UpdateAddressSchema,
    onSubmit: (val) => {
      console.log(val)
      UpdateAddress(val)
    },
  });

  return (
    <>
      <div className="page-content my-account__edit">
        <div className="my-account__edit-form">

          {/* Update Profile Form */}
          <div className="row">
            <div className="my-3">
              <h5 className="text-uppercase mb-0">Update Details</h5>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateProfileForm.touched.name &&
                  UpdateProfileForm.errors.name &&
                  "input-error"
                }`}
              >
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={UpdateProfileForm.values.name}
                  onChange={UpdateProfileForm.handleChange}
                  onBlur={UpdateProfileForm.handleBlur}
                />
                <label htmlFor="account_first_name">Name : </label>
                {UpdateProfileForm.touched.name &&
                  UpdateProfileForm.errors.name && (
                    <span className="fw-semi-bold">
                      {UpdateProfileForm.errors.name}
                    </span>
                  )}
              </div>
            </div>

            {/* <div className="col-md-6">
              <div className={`form-floating my-3 ${UpdateProfileForm.touched.email && UpdateProfileForm.errors.email && "input-error"}`}>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email :"
                  value={UpdateProfileForm.values.email}
                  onChange={UpdateProfileForm.handleChange}
                  onBlur={UpdateProfileForm.handleBlur}
                />
                <label htmlFor="account_display_name">Email :</label>
                {UpdateProfileForm.touched.email && UpdateProfileForm.errors.email && (
                        <span className="fw-semi-bold">{UpdateProfileForm.errors.email}</span>
                      )}
              </div>
            </div> */}
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateProfileForm.touched.mno &&
                  UpdateProfileForm.errors.mno &&
                  "input-error"
                }`}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile number"
                  name="mno"
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1")
                      .slice(0, 10))
                  }
                  value={UpdateProfileForm.values.mno || ""}
                  onChange={UpdateProfileForm.handleChange}
                  onBlur={UpdateProfileForm.handleBlur}
                />
                <label htmlFor="account_email">Mobile number</label>
                {UpdateProfileForm.touched.mno &&
                  UpdateProfileForm.errors.mno && (
                    <span className="fw-semi-bold">
                      {UpdateProfileForm.errors.mno}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-3">
                <button
                  className="btn btn-primary gclass-button"
                  type="button"
                  onClick={UpdateProfileForm.handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="my-3">
              <h5 className="text-uppercase mb-0">Address Details</h5>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateaddressForm.touched.line1 &&
                  UpdateaddressForm.errors.line1 &&
                  "input-error"
                }`}
              >
                <input
                  type="text"
                  name="line1"
                  className="form-control"
                  placeholder="Address Line1"
                  value={UpdateaddressForm.values.line1}
                  onChange={UpdateaddressForm.handleChange}
                  onBlur={UpdateaddressForm.handleBlur}
                />
                <label htmlFor="account_first_name">Line 1 : </label>
                {UpdateaddressForm.touched.line1 &&
                  UpdateaddressForm.errors.line1 && (
                    <span className="fw-semi-bold">
                      {UpdateaddressForm.errors.line1}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateaddressForm.touched.line2 &&
                  UpdateaddressForm.errors.line2 &&
                  "input-error"
                }`}
              >
                <input
                  type="text"
                  name="line2"
                  className="form-control"
                  placeholder="Address Line1"
                  value={UpdateaddressForm.values.line2}
                  onChange={UpdateaddressForm.handleChange}
                  onBlur={UpdateaddressForm.handleBlur}
                />
                <label htmlFor="account_first_name">Line 2 : </label>
                {UpdateaddressForm.touched.line2 &&
                  UpdateaddressForm.errors.line2 && (
                    <span className="fw-semi-bold">
                      {UpdateaddressForm.errors.line2}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateaddressForm.touched.area &&
                  UpdateaddressForm.errors.area &&
                  "input-error"
                }`}
              >
                <input
                  type="text"
                  name="area"
                  className="form-control"
                  placeholder=" area"
                  value={UpdateaddressForm.values.area}
                  onChange={UpdateaddressForm.handleChange}
                  onBlur={UpdateaddressForm.handleBlur}
                />
                <label htmlFor="account_first_name">Area : </label>
                {UpdateaddressForm.touched.area &&
                  UpdateaddressForm.errors.area && (
                    <span className="fw-semi-bold">
                      {UpdateaddressForm.errors.area}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateaddressForm.touched.pincode &&
                  UpdateaddressForm.errors.pincode &&
                  "input-error"
                }`}
              >
                <input
                  type="text"
                  name="pincode"
                  className="form-control"
                  placeholder="pincode"
                  value={UpdateaddressForm.values.pincode}
                  onChange={UpdateaddressForm.handleChange}
                  onBlur={UpdateaddressForm.handleBlur}
                  onInput={(e) =>
                    (e.target.value = e.target.value
                      .replace(/[^0-9.]/g, "")
                      .replace(/(\..*?)\..*/g, "$1")
                      .slice(0, 6))
                  }
                />
                <label htmlFor="account_first_name">Pincode : </label>
                {UpdateaddressForm.touched.pincode &&
                  UpdateaddressForm.errors.pincode && (
                    <span className="fw-semi-bold">
                      {UpdateaddressForm.errors.pincode}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateaddressForm.touched.state &&
                  UpdateaddressForm.errors.state &&
                  "input-error"
                }`}
              >
                <select
                  name="state"
                  className="form-select "

                  defaultValue={UpdateaddressForm.values.state}
                  onChange={(e)=>{
                    UpdateaddressForm.handleChange(e)
                   UpdateaddressForm.setFieldValue("city" , "")

                  }}
                  onBlur={UpdateaddressForm.handleBlur}
                >
                   <option value={""}>Choose State</option>
                  {
                    GetState().map((state , i)=>{
                      return(
                        <option value={state} key={i}>
                          {state}
                        </option>
                      )
                    })
                  }
                  </select>
                <label htmlFor="account_first_name">State : </label>
                {UpdateaddressForm.touched.state &&
                  UpdateaddressForm.errors.state && (
                    <span className="fw-semi-bold">
                      {UpdateaddressForm.errors.state}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`form-floating my-3 ${
                  UpdateaddressForm.touched.city &&
                  UpdateaddressForm.errors.city &&
                  "input-error"
                }`}
              >
                <select
                 
                  name="city"
                  className="form-select"
                  placeholder="city"
                  value={UpdateaddressForm.values.city}
                  onChange={UpdateaddressForm.handleChange}
                  onBlur={UpdateaddressForm.handleBlur}
                >
                  <option value={""}>Choose City</option>
                    {
                    (UpdateaddressForm.values.state ? GetCity(UpdateaddressForm.values.state) : []).map((state , i)=>{
                      return(
                        <option value={state} key={i}>
                          {state}
                        </option>
                      )
                    })
                  }
                  </select>
                <label htmlFor="account_first_name">City : </label>
                {UpdateaddressForm.touched.city &&
                  UpdateaddressForm.errors.city && (
                    <span className="fw-semi-bold">
                      {UpdateaddressForm.errors.city}
                    </span>
                  )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="my-3">
                <button
                  className="btn btn-primary gclass-button"
                  type="button"
                  onClick={UpdateaddressForm.handleSubmit}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;

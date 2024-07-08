import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/CreateContext";

const Address = () => {
  const { user } = useContext(GlobalContext);
  return (
    <>
      <div className="page-content my-account__address">
        <p className="notice">
          The following addresses will be used on the checkout page by default.
        </p>
        <div className="my-account__address-list">
          <div className="my-account__address-item">
            <div className="my-account__address-item__title">
              <h5>Shipping Address</h5>
              <Link to={"/profile/account"}>Edit</Link>
            </div>
            <div className="my-account__address-item__detail">
              {user && "address" in user ? (
                <>
                  <p>{user.name}</p>
                  <p>{user.address.line1}</p>
                  <p>
                    {user.address.line2}, {user.address.city},{" "}
                    {user.address.pincode}
                  </p>

                  <p>{user.address.state}</p>
                  <br />
                  <p>{user.email}</p>
                  <p>+91 {user.mno}</p>
                </>
              ) : (
                <h6 className="text-red">
                  * Any address not available, please enter address.
                </h6>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;

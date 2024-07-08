import React, { useContext, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../context/CreateContext";
import toast from "react-hot-toast";

const Profile = ({ title }) => {
  const {Logout} = useContext(AuthContext)
  document.title = title;
  const location = useLocation()
  const componet = location.pathname.split("/")[2]
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="my-account container gclass-profile">
          <h2 className="page-title gclass-text-dark">{componet}</h2>
          <div className="row">
            <div className="col-lg-3">
              <ul className="account-nav">
                <li>
                  <Link 
                    to="/profile/dashboard"
                    className={`menu-link ${componet == 'dashboard' && "menu-link_active"}  menu-link_us-s`}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile/orders"
                    className={`menu-link ${componet == 'orders' && "menu-link_active"}  menu-link_us-s`}
                  >
                    Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile/address"
                    className={`menu-link ${componet == 'address' && "menu-link_active"}  menu-link_us-s`}
                  >
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile/account"
                    className={`menu-link ${componet == 'account' && "menu-link_active"}  menu-link_us-s`}
                  >
                    Account Details
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile/wishlist"
                    className={`menu-link ${componet == 'wishlist' && "menu-link_active"}  menu-link_us-s`}
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <div
                    onClick={Logout}
                    className="menu-link menu-link_us-s cursor_pointer"
                  >
                    Logout
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              {/* {
                componet == "dashboard" ? <Dashboard/> : 
                componet == "orders" ? <Orders/> : 
                componet == "address" ? <Address/> : 
                componet == "account" ? <AccountDetails/> : 
                componet == "wishlist" ? <Wishlist/> : "" 
              } */}

              <Outlet/>
            </div>
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5"/>
    </>
  );
};

export default Profile;

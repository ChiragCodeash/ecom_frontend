import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/CreateContext";
import Footer from "./common/Footer";
import Header from "./common/header";

const Layout = ({ Componets, title }) => {
  const location = useLocation();
  // console.log(location);
  const navigate = useNavigate();
  const protected_routes = [
    "/cart",
    "/profile/dashboard",
    "/profile/orders",
    "/profile/address",
    "/profile/account",
    "/profile/wishlist","/checkout" ,"/confirm"
  ];
  const { GetToken } = useContext(AuthContext);
  // useEffect(()=>{
    if (!GetToken()) {
      if (protected_routes.includes(location.pathname)) {
        toast.error("Login required");
        navigate("/login");
      }
    }
  // })
  return (
    <>
      <Header />
      <Componets title={title} />
      <Footer />
    </>
  );
};

export default Layout;

import Cookies from "js-cookie";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../CreateContext";
import { useNavigate } from "react-router-dom";

const AuthState = ({ children }) => {
  
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_APP_SERVER_URL}/auth`;


  const Login = async (data) => {
    try {
      const res = await fetch(`${url}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        // Cookies.set("token", result.token, { expires: 7, secure: true });
        localStorage.setItem("token", result.token);
        navigate("/");
        return true;
      } else {
        toast.error(result.message);
        return false;
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      return false;
    }
  };
  const GetToken = () => {
    return localStorage.getItem("token");
    // return Cookies.get("token");
  };
  const Logout = (IsNavigate = true , IsToast = true) => {
    if(IsNavigate){
      navigate("/");
    }

    if(IsToast){
      toast.success("Logout Success");
    }
    return localStorage.removeItem("token");
    // return Cookies.remove("token");
  };

  const Registration = async(data)=>{
    try {
      const res = await fetch(`${url}/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        navigate("/login");
        return true;
      } else {
        toast.error(result.message);
        return false;
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      return false;
    }
  }
  
  const defaultValue = {
    Login,
    GetToken,
    Logout,Registration
  };
  return (
    <AuthContext.Provider value={defaultValue}>{children}</AuthContext.Provider>
  );
};

export default AuthState;

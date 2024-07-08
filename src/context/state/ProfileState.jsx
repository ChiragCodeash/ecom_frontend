import React from "react";
import { AuthContext, GlobalContext, ProfileContext } from "../CreateContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import toast from "react-hot-toast";
import GlobalState from "./GlobalState";

const ProfileState = ({ children }) => {
  const { Logout, GetToken } = useContext(AuthContext);
  const { setUser, user } = useContext(GlobalContext);
  const navigate = useNavigate();
  const url = `${import.meta.env.VITE_APP_SERVER_URL}/profile`;

  const UpdateProfile = async (data) => {
    try {
      const res = await fetch(`${url}/updateprofile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: GetToken(),
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        setUser({ ...user, ...result.data });
      } else {
        if (result.logout) {
          toast.error(result.message);
          Logout(true, false);
        } else {
          toast.error(result.message);
        }
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      //   return false;
    }
  };


  const UpdateAddress = async (data) => {
    try {
      const res = await fetch(`${url}/updateadderss`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: GetToken(),
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status) {
        toast.success(result.message);
        setUser({ ...user, address : {...result.data} });
      } else {
        if (result.logout) {
          toast.error(result.message);
          Logout(true, false);
        } else {
          toast.error(result.message);
        }
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      //   return false;
    }
  };

  const defaultValue = {
    UpdateProfile,UpdateAddress
  };
  return (
    <ProfileContext.Provider value={defaultValue}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileState;

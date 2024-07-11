import React, { useContext, useState } from "react";
import { AuthContext, CartContext } from "../CreateContext";

const CartState = ({ children }) => {
  const { GetToken } = useContext(AuthContext);
  const [cartData, setCartData] = useState();
  const url = `${import.meta.env.VITE_APP_SERVER_URL}/cart`;

  const getCartData = async () => {
    try {
      const res = await fetch(`${url}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: GetToken(),
        },
        //   body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status) {
        setCartData(result.result);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      return false;
    }
  };

  const defaultValue = {
    getCartData,
    cartData,
  };
  return (
    <CartContext.Provider value={defaultValue}>{children}</CartContext.Provider>
  );
};

export default CartState;

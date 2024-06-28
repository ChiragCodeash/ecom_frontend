import React, { useContext, useState } from "react";
import { GlobalContext, ThemeContext } from "../CreateContext";

const ThemeState = ({ children }) => {
  const { setShowGlobalLoading } = useContext(GlobalContext)
  const [themePallete , setThemePallete] = useState()
  const url = `${import.meta.env.VITE_APP_SERVER_URL}/api/theme`

  const getTheme = async()=>{
    try {
      setShowGlobalLoading(true)
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setThemePallete(data)
      setShowGlobalLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }


  const DefaultObj = {themePallete , getTheme}
  return (
    <ThemeContext.Provider value={DefaultObj}>{children}</ThemeContext.Provider>
  );
};

export default ThemeState;

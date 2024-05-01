import React, { useEffect, useState } from "react";
import { GlobalContext } from "../CreateContext";

const GlobalState = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showGlobalLoading, setShowGlobalLoading] = useState(false);
    

    // if(showSidebar){
    //     document.body.style.overflow = 'hidden';
    // }
    useEffect(()=>{
      document.body.style.overflow = showSidebar ? "hidden" : "";
    },[showSidebar])
  const DefaultObj = { showModal , setShowModal , showSidebar, setShowSidebar  , setShowGlobalLoading , showGlobalLoading};
  return (
    <GlobalContext.Provider value={DefaultObj}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

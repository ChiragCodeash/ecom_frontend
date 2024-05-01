import React, { useState, useEffect } from "react";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;

     
      setIsVisible(scrollTop > 300);
    };

    
    window.addEventListener("scroll", handleScroll);

 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    {
        isVisible &&
        <div id="scrollTop" onClick={goTop} className="end-0"></div>
    } 
    </>
  );
};

export default GotoTop;

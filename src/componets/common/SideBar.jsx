import React from "react";
import { Fade } from "react-reveal";

const SideBar = ({ title, children , isOpen ,className }) => {
//   const [isOpen, setisOpen] = useState(false);
// const handleSidebar = ()=>{
//     setisOpen(!isOpen)
// }

  return (
    <>
      
      <>
        {isOpen && (
          <Fade>
            <div className="page-overlay page-overlay_visible"></div>
          </Fade>
        )}
      
          <div
            className={`aside aside_right cart-drawer gclass-sidebar ${isOpen && "aside_visible"} ${className}`}
          >
          {children}
          </div>
       
      </>
    </>
  );
};

export default SideBar;

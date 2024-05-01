import React from "react";

const Loading = ({ status }) => {
    if(status){
        document.body.style.overflow = "hidden";
    }
  if (status) {
    return (
      <>
        <div className="loading">
          <div className="loading_container">
          <div className="dots"></div>
          </div>
        </div>
      </>
    );
  }
};

export default Loading;

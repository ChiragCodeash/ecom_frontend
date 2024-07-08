import React from "react";

const Loading = ({ type }) => {
  switch (type) {
    case "global":
      document.body.style.overflow = "hidden";
      return (
        <>
          <div className="loading">
            <div className="loading_container">
              <div className="dots"></div>
            </div>
          </div>
        </>
      );
      break;
    case "progress":
      return (
        <>
        <div className="align-items-center d-flex justify-content-center p-0 px w-100" style={{height : "65vh"}}>

          <div class="progress"></div>
        </div>
        </>
      );
      break;

    default:
      <h1>Loading...</h1>;
      break;
  }
};

export default Loading;

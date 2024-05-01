import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Page404 = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("🚀 ~ file: Page404.jsx:8 ~ Page404 ~ location:", location)
  // useEffect(()=>{
  //   if(['/profile' , '/profile/'].includes(location.pathname)){
  //     navigate("/profile/dashboard")
  //     console.log("Run")
  //   }
  // },[])
  return (
    <>
      <main>
        <section className="page-not-found">
          <div className="content container">
            <h2 className="mb-3">OOPS!</h2>
            <h3 className="mb-3">Page not found</h3>
            <p className="mb-3">
              Sorry, we couldn't find the page you where looking for. We suggest
              that you return to home page.
            </p>
            <button className="btn btn-primary" onClick={() => navigate("/")}>
              GO BACK
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page404;

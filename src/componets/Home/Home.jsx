import React from "react";
import HomeSlider from "./HomeSlider";
// import TopCategories from "./TopCategories";
import TrendingProduct from "./TrendingProduct";
import Testimonial from "./Testimonial";
import Sale from "./Sale";
import NewProduct from "./NewProduct";
import ServicesPromotion from "../common/ServicesPromotion";
import CustomeModal from "../common/CustomeModal";

const Home = ({ title }) => {
  document.title = title;
  return (
    <>
     
      <div className="padding-top">
        <HomeSlider />
        <TrendingProduct />
        <Sale />
        <NewProduct />
        <Testimonial />
        <ServicesPromotion />
      </div>
    </>
  );
};

export default Home;

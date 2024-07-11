import React, { useContext } from "react";
import HomeSlider from "./HomeSlider";
// import TopCategories from "./TopCategories";
import ServicesPromotion from "../common/ServicesPromotion";
import ProductList from "./HomeProductList";
import Sale from "./Sale";
import Testimonial from "./Testimonial";
import { ProductContext } from "../../context/CreateContext";

const Home = ({ title }) => {
  const {getNewProducts} = useContext(ProductContext)
  document.title = title;
  return (
    <>
      <div className="padding-top">
        <HomeSlider />
        
        <ProductList
        functionToRun={getNewProducts}
          title={
            <>
              LATEST <strong>Products</strong>
            </>
          }
        />
        <Sale />
       
        {/* <ProductList
          title={
            <>
              Trending <strong>Products</strong>
            </>
          }
        /> */}
        <Testimonial />
        <ServicesPromotion />
      </div>
    </>
  );
};

export default Home;

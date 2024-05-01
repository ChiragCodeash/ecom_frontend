import React from "react";
import HomeProductList from "./HomeProductList";

const TrendingProduct = () => {
  return (
    <>
      <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
      <section className="products-carousel container">
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4 gclass-text">
          Trending <strong>Products</strong>
        </h2>

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade active show"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="row">
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a
                className="btn-link btn-link_lg default-underline text-uppercase fw-medium gclass-text"
               
              >
                See All Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingProduct;

import React from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import SingleProduct from "../Product_list/SingleProduct";

const NewProduct = () => {
  return (
    <>
      <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
      <section className="products-carousel container">
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4 gclass-text">
          LATEST <strong>Products</strong>
        </h2>

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade active show"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="row">
              {/* <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} />
              <HomeProductList className={"col-6 col-md-4 col-lg-3"} /> */}
              <SingleProduct className={"col-6 col-md-4 col-lg-3"} />
              <SingleProduct className={"col-6 col-md-4 col-lg-3"} />
              <SingleProduct className={"col-6 col-md-4 col-lg-3"} />
              <SingleProduct className={"col-6 col-md-4 col-lg-3"} />
              <SingleProduct className={"col-6 col-md-4 col-lg-3"} />
              <SingleProduct className={"col-6 col-md-4 col-lg-3"} />
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <a className="btn-link btn-link_lg default-underline text-uppercase fw-medium gclass-text">
                See All Products
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
      <section className="products-carousel container">
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4 gclass-text">
          LATEST <strong>Products</strong>
        </h2>

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade active show"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="row">
              <Swiper
                slidesPerView={4}
                slidesPerGroup={4}
                freeMode={true}
                breakpoints={{
                  320: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 14,
                  },
                  768: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                    spaceBetween: 24,
                  },
                  992: {
                    slidesPerView: 4,
                    slidesPerGroup: 1,
                    spaceBetween: 30,
                  },
                }}
                scrollbar={true}
                modules={[Scrollbar, FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <SingleProduct />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <SingleProduct />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <SingleProduct />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <SingleProduct />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <SingleProduct />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <SingleProduct />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default NewProduct;

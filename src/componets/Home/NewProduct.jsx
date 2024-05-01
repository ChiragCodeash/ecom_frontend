import React from "react";
import HomeProductList from "./HomeProductList";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';

// import required modules
import { Scrollbar , FreeMode } from "swiper/modules";

const NewProduct = () => {
  return (
    <>
      <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
      <section className="products-carousel container">
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4 gclass-text">
        LATEST  <strong>Products</strong>
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
                      spaceBetween : 14
                    },
                    768: {
                      slidesPerView: 3,
                      slidesPerGroup: 3,
                      spaceBetween : 24
                    },
                    992: {
                      slidesPerView: 4,
                      slidesPerGroup: 1,
                      spaceBetween : 30
                    },
                  }}
                scrollbar={true}
                modules={[Scrollbar , FreeMode]}
                className="mySwiper"
              >
                <SwiperSlide>
                  {" "}
                  <HomeProductList />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <HomeProductList />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <HomeProductList />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <HomeProductList />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <HomeProductList />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <HomeProductList />
                </SwiperSlide>
              </Swiper>
            </div>
            {/* /.row */}
          
          </div>
        </div>
      </section>
    </>
  );
};

export default NewProduct;

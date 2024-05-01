import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      {/* <div style={{ paddingTop: "100px" }}> */}
      <Swiper className="mySwiper" slidesPerView={1}>
        <SwiperSlide>
          <div className="overflow-hidden position-relative h-100 gclass-slider">
            <div
              className="slideshow-bg img_blur"
              style={{ backgroundColor: "#f5e6e0" , filter:blur("5px")}}
            >
              <img
                loading="lazy"
                src="/assets/images/slider1.jpg"
                width={1920}
                height={760}
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3  mb-3 mb-md-4">
                EYEWEAR 1
              </h6>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 ">
                UP TO $60 OFF POLARISED
              </h2>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 ">
                SUNGLASSES
              </h2>
              <div className="animate animate_fade animate_btt animate_delay-7">
                <button className="btn gclass-button btn-outline-primary border-0 fs-base text-uppercase fw-medium btn-50">
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden position-relative h-100 gclass-slider">
            <div
              className="slideshow-bg img_blur"
              sstyle={{ backgroundColor: "#f5e6e0" , filter:blur("5px")}}
            >
              <img
                loading="lazy"
                src="/assets/images/slider1.jpg"
                width={1920}
                height={760}
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white mb-3 mb-md-4">
                EYEWEAR 2
              </h6>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-white">
                UP TO $60 OFF POLARISED
              </h2>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-white">
                SUNGLASSES
              </h2>
              <div className="animate animate_fade animate_btt animate_delay-7">
                <button className="btn btn-outline-primary gclass-button border-0 fs-base text-uppercase fw-medium btn-50">
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="overflow-hidden position-relative h-100 gclass-slider">
            <div
              className="slideshow-bg img_blur"
              style={{ backgroundColor: "#f5e6e0"}}
            >
              <img
                loading="lazy"
                src="/assets/images/slider1.jpg"
                width={1920}
                height={760}
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>
            <div className="slideshow-text container position-absolute start-50 top-50 translate-middle">
              <h6 className="text_dash text-uppercase fs-base fw-medium animate animate_fade animate_btt animate_delay-3 text-white mb-3 mb-md-4">
                EYEWEAR 3
              </h6>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-3 animate animate_fade animate_btt animate_delay-5 lh-1 text-white">
                UP TO $60 OFF POLARISED
              </h2>
              <h2 className="fs-45 fw-semi-bold mb-2 mb-lg-4 animate animate_fade animate_btt animate_delay-5 lh-1 text-white">
                SUNGLASSES
              </h2>
              <div className="animate animate_fade animate_btt animate_delay-7">
                <button className="btn btn-outline-primary gclass-button border-0 fs-base text-uppercase fw-medium btn-50">
                  <span>SHOP NOW</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
      <div className="container-fluid">
        <div className="position-relative">
          <a
            className="slideshow-scroll d-none d-xxl-block position-absolute end-0 bottom-0 text_dash text-uppercase fw-medium text-white mb-4 gclass-text-light"
          >
            Scroll
          </a>
        </div>
      </div>
      <span
        className="swiper-notification"
        aria-live="assertive"
        aria-atomic="true"
      />
      {/* </section> */}
    </>
  );
};

export default HomeSlider;

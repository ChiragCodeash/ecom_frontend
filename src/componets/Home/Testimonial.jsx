import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import IconPack from "../common/IconPack";

const Testimonial = () => {
  return (
    <>
      {/* <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" /> */}

      <section className="testimonials">
        <div className="container">
          <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
          <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4 gclass-text">
        OUR  <strong> JOURNEY</strong>
        </h2>
          <div className="position-relative">
            <Swiper
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: ".testimonial-carousel__prev",
                prevEl: ".testimonial-carousel__next",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="w-740 mx-auto">
                  <h5 className="fw-normal lh-2rem mb-4 text-center gclass-text">
                    “ Ipsum dolor sit amet, consectetur adipiscing elit.
                    Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                    egestas mi lorem. Adipiscing felis, vel faucibus in.
                    Hendrerit viverra elementum venenatis pellentesque
                    pellentesque ornare “
                  </h5>
                  <p className="text-secondary mb-3 text-center gclass-text">
                    Helena Gibbson, 06 April 2023
                  </p>
                  <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                    <img
                      loading="lazy"
                      src="/assets/images/home/demo4/testimonial_avatar.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-740 mx-auto pb-5">
                  <h5 className="fw-normal lh-2rem mb-4 text-center">
                    “ Ipsum dolor sit amet, consectetur adipiscing elit.
                    Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                    egestas mi lorem. Adipiscing felis, vel faucibus in.
                    Hendrerit viverra elementum venenatis pellentesque
                    pellentesque ornare “
                  </h5>
                  <p className="text-secondary mb-3 text-center">
                    Helena Gibbson, 06 April 2023
                  </p>
                  <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                    <img
                      loading="lazy"
                      src="/assets/images/home/demo4/testimonial_avatar.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-740 mx-auto pb-5">
                  <h5 className="fw-normal lh-2rem mb-4 text-center">
                    “ Ipsum dolor sit amet, consectetur adipiscing elit.
                    Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                    egestas mi lorem. Adipiscing felis, vel faucibus in.
                    Hendrerit viverra elementum venenatis pellentesque
                    pellentesque ornare “
                  </h5>
                  <p className="text-secondary mb-3 text-center">
                    Helena Gibbson, 06 April 2023
                  </p>
                  <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                    <img
                      loading="lazy"
                      src="/assets/images/home/demo4/testimonial_avatar.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-740 mx-auto pb-5">
                  <h5 className="fw-normal lh-2rem mb-4 text-center">
                    “ Ipsum dolor sit amet, consectetur adipiscing elit.
                    Fringilla vel tincidunt ipsum ac. Nam at et id leo pulvinar
                    egestas mi lorem. Adipiscing felis, vel faucibus in.
                    Hendrerit viverra elementum venenatis pellentesque
                    pellentesque ornare “
                  </h5>
                  <p className="text-secondary mb-3 text-center">
                    Helena Gibbson, 06 April 2023
                  </p>
                  <div className="border-circle overflow-hidden w-100px h-100px mx-auto">
                    <img
                      loading="lazy"
                      src="/assets/images/home/demo4/testimonial_avatar.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            {/* Slide Button */}
            <div
              className="align-items-center d-flex justify-content-center position-absolute products-carousel__prev testimonial-carousel__prev top-50"
              tabIndex={0}
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-9da9d21a6b21dba4"
            >
              <IconPack icon={"leftarrow"} />
            </div>

            <div
              className="products-carousel__next testimonial-carousel__next position-absolute top-50 d-flex align-items-center justify-content-center"
              tabIndex={0}
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-9da9d21a6b21dba4"
            >
              <IconPack icon={"rightarrow"} />
            </div>
          </div>
          {/* /.position-relative */}
          {/* <div className="mt-1 pt-4 mt-xl-5 pt-xl-5" /> */}
        </div>
      </section>
    </>
  );
};

export default Testimonial;

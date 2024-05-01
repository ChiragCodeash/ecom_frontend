import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const About = ({ title }) => {
  document.title = title;
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="about-us container">
          <div className="mw-930">
            <h2 className="page-title gclass-text">ABOUT UOMO</h2>
          </div>
          <div className="about-us__content pb-5 mb-5">
            <p className="mb-5">
              <img
                loading="lazy"
                className="w-100 h-auto d-block"
                src="/assets/images/about/about-1.jpg"
                width={1410}
                height={550}
                alt=""
              />
            </p>
            <div className="mw-930">
              <h3 className="mb-4 gclass-text">OUR STORY</h3>
              <p className="fs-6 fw-medium mb-4 gclass-text">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <p className="mb-4 gclass-text">
                Saw wherein fruitful good days image them, midst, waters upon,
                saw. Seas lights seasons. Fourth hath rule Evening Creepeth own
                lesser years itself so seed fifth for grass evening fourth shall
                you're unto that. Had. Female replenish for yielding so saw all
                one to yielding grass you'll air sea it, open waters subdue,
                hath. Brought second Made. Be. Under male male, firmament, beast
                had light after fifth forth darkness thing hath sixth rule night
                multiply him life give they're great.
              </p>
              <div className="row mb-3">
                <div className="col-md-6">
                  <h5 className="mb-3 gclass-text">Our Mission</h5>
                  <p className="mb-3">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
                <div className="col-md-6">
                  <h5 className="mb-3 gclass-text">Our Vision</h5>
                  <p className="mb-3 gclass-text">
                    Quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                    ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
            <div className="mw-930 d-lg-flex align-items-lg-center">
              <div className="image-wrapper col-lg-6">
                <img
                  className="h-auto"
                  loading="lazy"
                  src="/assets/images/about/about-2.jpg"
                  width={450}
                  height={500}
                  alt=""
                />
              </div>
              <div className="content-wrapper col-lg-6 px-lg-4">
                <h5 className="mb-3 gclass-text">The Company</h5>
                <p className="gclass-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  sapien dignissim a elementum. Sociis metus, hendrerit mauris
                  id in. Quis sit sit ultrices tincidunt euismod luctus diam.
                  Turpis sodales orci etiam phasellus lacus id leo. Amet turpis
                  nunc, nulla massa est viverra interdum. Praesent auctor nulla
                  morbi non posuere mattis. Arcu eu id maecenas cras.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="service-promotion horizontal container mw-930 pt-0 mb-md-4 pb-md-4 mb-xl-5">
          <div className="row">
            <div className="col-md-4 text-center mb-5 mb-md-0">
              <div className="service-promotion__icon mb-4">
                <svg
                  width={52}
                  className="gclass-text"
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.125 43.875H43.875V21.125C43.875 20.2276 43.1475 19.5 42.25 19.5H33.3125H25.1875H17.875V7.3125C17.875 5.36027 17.1146 3.52402 15.7328 2.14104C14.3509 0.760398 12.5146 0 10.5625 0C6.53037 0 3.25 3.28037 3.25 7.3125C3.25 8.20991 3.97749 8.9375 4.875 8.9375C5.77251 8.9375 6.5 8.20991 6.5 7.3125C6.5 5.07244 8.32244 3.25 10.5625 3.25C11.6472 3.25 12.6676 3.6727 13.4347 4.43909C14.2023 5.20731 14.625 6.22781 14.625 7.3125V21.125V39.2057C11.8246 39.9291 9.75 42.4768 9.75 45.5C9.75 49.0841 12.6659 52 16.25 52C19.2732 52 21.8209 49.9254 22.5443 47.125H42.25H47.125C48.0225 47.125 48.75 46.3974 48.75 45.5C48.75 44.6026 48.0225 43.875 47.125 43.875ZM31.6875 22.75V26H26.8125V22.75H31.6875ZM16.25 48.75C14.4579 48.75 13 47.2921 13 45.5C13 43.7079 14.4579 42.25 16.25 42.25C18.0421 42.25 19.5 43.7079 19.5 45.5C19.5 47.2921 18.0421 48.75 16.25 48.75ZM22.5443 43.875C21.9552 41.5942 20.1558 39.7948 17.875 39.2057V22.75H23.5625V27.625C23.5625 28.5224 24.29 29.25 25.1875 29.25H33.3125C34.21 29.25 34.9375 28.5224 34.9375 27.625V22.75H40.625V43.875H22.5443Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h3 className="service-promotion__title fs-6 text-uppercase gclass-text">
                Fast And Free Delivery
              </h3>
              <p className="service-promotion__content text-secondary gclass-text">
                Free delivery for all orders over $140
              </p>
            </div>
            {/* /.col-md-4 text-center*/}
            <div className="col-md-4 text-center mb-5 mb-md-0">
              <div className="service-promotion__icon mb-4">
                <svg
                  width={53}
                  height={52}
                  className="gclass-text"
                  viewBox="0 0 53 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53 28.4375C53 24.2062 49.9411 20.7319 46.0792 20.4368C45.6211 18.9222 44.3835 17.7338 42.824 17.3216C41.7841 8.93425 34.8423 2.53906 26.5 2.53906C18.1577 2.53906 11.2159 8.93425 10.1761 17.3216C8.61664 17.7338 7.3789 18.9221 6.92095 20.4368C6.7868 20.4471 6.65367 20.4612 6.52159 20.4791V10.5625C6.52159 9.72116 5.82638 9.03906 4.96885 9.03906C4.11133 9.03906 3.41612 9.72116 3.41612 10.5625V21.6984C1.36268 23.1288 0 25.6143 0 28.4375C0 32.6688 3.05889 36.1432 6.92085 36.4382C7.37746 37.948 8.60867 39.1334 10.1612 39.5492C10.8227 43.3268 14.1828 46.2109 18.2188 46.2109H18.5778C19.2275 48.098 21.0477 49.4609 23.1875 49.4609H29.8125C32.4952 49.4609 34.6777 47.3196 34.6777 44.6875C34.6777 42.0554 32.4952 39.9141 29.8125 39.9141H23.1875C21.0477 39.9141 19.2275 41.277 18.5778 43.1641H18.2188C15.8707 43.1641 13.8908 41.5903 13.3156 39.4615C15.1425 38.8432 16.459 37.1404 16.459 35.1406V21.7344C16.459 19.7276 15.1334 18.02 13.2966 17.4072C14.2665 10.6781 19.8332 5.58594 26.5 5.58594C33.1668 5.58594 38.7335 10.6781 39.7034 17.4072C37.8666 18.02 36.541 19.7276 36.541 21.7344V35.1406C36.541 37.6607 38.6307 39.7109 41.1992 39.7109H41.6133C43.7224 39.7109 45.5076 38.3281 46.0792 36.4382C49.9411 36.1432 53 32.6688 53 28.4375ZM23.1875 42.9609H29.8125C30.7829 42.9609 31.5723 43.7355 31.5723 44.6875C31.5723 45.6395 30.7829 46.4141 29.8125 46.4141H23.1875C22.2171 46.4141 21.4277 45.6395 21.4277 44.6875C21.4277 43.7355 22.2171 42.9609 23.1875 42.9609ZM3.10547 28.4375C3.10547 26.0216 4.7022 23.9415 6.72852 23.5334V33.3415C4.7022 32.9335 3.10547 30.8534 3.10547 28.4375ZM13.3535 35.1406C13.3535 35.9806 12.657 36.6641 11.8008 36.6641H11.3867C10.5305 36.6641 9.83398 35.9806 9.83398 35.1406C9.83398 30.252 9.83398 26.2535 9.83398 21.7344C9.83398 20.8944 10.5305 20.2109 11.3867 20.2109H11.8008C12.657 20.2109 13.3535 20.8944 13.3535 21.7344V35.1406ZM43.166 35.1406C43.166 35.9806 42.4695 36.6641 41.6133 36.6641H41.1992C40.343 36.6641 39.6465 35.9806 39.6465 35.1406V21.7344C39.6465 20.8944 40.343 20.2109 41.1992 20.2109H41.6133C42.4695 20.2109 43.166 20.8944 43.166 21.7344V35.1406ZM46.2715 33.3416V23.5335C48.2978 23.9416 49.8945 26.0217 49.8945 28.4376C49.8945 30.8535 48.2978 32.9335 46.2715 33.3416Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h3 className="service-promotion__title fs-6 text-uppercase gclass-text">
                24/7 Customer Support
              </h3>
              <p className="service-promotion__content text-secondary gclass-text">
                Friendly 24/7 customer support
              </p>
            </div>
            {/* /.col-md-4 text-center*/}
            <div className="col-md-4 text-center mb-4 pb-1 mb-md-0">
              <div className="service-promotion__icon mb-4">
                <svg
                  width={52}
                  height={52}
                  viewBox="0 0 52 52"
                  fill="none"
                  className="gclass-text"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* <use href="#icon_shield" /> */}
                  <g clipPath="url(#clip0_23_87)">
                    <path
                      d="M48.0886 14.1089L48.0871 14.0684C48.0644 13.569 48.0494 13.0405 48.0402 12.4526C47.9978 9.58543 45.7186 7.21379 42.851 7.05352C36.8724 6.71987 32.2473 4.77035 28.2955 0.918523L28.2618 0.886388C26.9728 -0.295463 25.0285 -0.295463 23.7391 0.886388L23.7054 0.918523C19.7536 4.77035 15.1285 6.71987 9.14984 7.05391C6.28269 7.21379 4.00309 9.58543 3.96064 12.453C3.95192 13.037 3.93644 13.5654 3.91383 14.0684L3.91145 14.1625C3.79521 20.259 3.6508 27.8464 6.18906 34.7332C7.58475 38.5203 9.69851 41.8124 12.4712 44.5185C15.6292 47.6002 19.7655 50.0469 24.765 51.7901C24.9277 51.8468 25.0967 51.8928 25.2689 51.9274C25.5117 51.9758 25.7561 52 26.0004 52C26.2448 52 26.4896 51.9758 26.732 51.9274C26.9042 51.8928 27.0744 51.8464 27.2378 51.7893C32.2314 50.0429 36.3634 47.5951 39.5185 44.5137C42.2901 41.8068 44.4038 38.514 45.8007 34.726C48.3485 27.8186 48.2045 20.2169 48.0886 14.1089ZM42.9379 33.6704C40.2608 40.9289 34.7959 45.9138 26.2309 48.909C26.2004 48.9194 26.1679 48.9285 26.1341 48.9352C26.0457 48.9527 25.9556 48.9527 25.866 48.9348C25.8326 48.9281 25.8001 48.9194 25.7699 48.909C17.1959 45.9193 11.7274 40.9372 9.05224 33.6783C6.71274 27.3303 6.84525 20.3653 6.96228 14.2208L6.96308 14.1867C6.98688 13.6586 7.00275 13.1056 7.01148 12.4978C7.03052 11.2247 8.04456 10.1714 9.32004 10.1004C12.7033 9.91154 15.6756 9.25773 18.4067 8.10167C21.1342 6.94719 23.5566 5.31982 25.8116 3.12671C25.9263 3.02991 26.075 3.02951 26.1893 3.12671C28.4447 5.31982 30.8671 6.94719 33.5942 8.10167C36.3253 9.25773 39.2976 9.91154 42.6812 10.1004C43.9567 10.1714 44.9708 11.2247 44.9894 12.4982C44.9985 13.1092 45.0144 13.6622 45.0382 14.1867C45.1548 20.3383 45.2842 27.3088 42.9379 33.6704Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M25.9997 13.042C18.8538 13.042 13.0405 18.8557 13.0405 26.0011C13.0405 33.147 18.8538 38.9607 25.9997 38.9607C33.1451 38.9607 38.9588 33.147 38.9588 26.0011C38.9588 18.8557 33.1451 13.042 25.9997 13.042ZM25.9997 35.909C20.5363 35.909 16.0918 31.4645 16.0918 26.0011C16.0918 20.5378 20.5363 16.0932 25.9997 16.0932C31.4626 16.0932 35.9072 20.5378 35.9072 26.0011C35.9072 31.4645 31.4626 35.909 25.9997 35.909Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M29.7242 21.9775L23.7051 27.9966L22.0713 26.3629C21.4755 25.767 20.5094 25.767 19.9135 26.3629C19.318 26.9588 19.318 27.9248 19.9135 28.5203L22.6264 31.2332C22.9243 31.5311 23.3147 31.6799 23.7051 31.6799C24.0954 31.6799 24.4858 31.5311 24.7838 31.2332L31.882 24.1349C32.4775 23.539 32.4775 22.573 31.882 21.9775C31.2862 21.3812 30.3201 21.3812 29.7242 21.9775Z"
                      fill="currentColor"
                    ></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-promotion__title fs-6 text-uppercase gclass-text">
                Money Back Guarantee
              </h3>
              <p className="service-promotion__content text-secondary gclass-text">
                We return money within 30 days
              </p>
            </div>
            {/* /.col-md-4 text-center*/}
          </div>
          {/* /.row */}
        </section>
        <section className="brands-carousel container mw-930">
          <h5 className="mb-3 mb-xl-5 gclass-text">Company Partners</h5>
          <div className="position-relative">
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              slidesPerGroup={1}
              loop={true}
              freeMode={true}
              breakpoints={{
                320 : {
                  slidesPerView : 2,
                  slidesPerGroup : 2,
                  spaceBetween : 12
                },
                768 : {
                  slidesPerView : 3,
                  slidesPerGroup : 3,
                  spaceBetween : 24,
                },
                992 : {
                  slidesPerView : 4,
                  slidesPerGroup : 1,
                  spaceBetween : 30,
                },
                1200 : {
                  slidesPerView : 5,
                  slidesPerGroup : 1,
                  spaceBetween : 30,
                  pagination : false
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand1.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand2.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand3.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand4.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand5.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand6.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  loading="lazy"
                  src="/assets/images/brands/brand7.png"
                  width={120}
                  height={20}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
            {/* /.swiper-container js-swiper-slider */}
          </div>
          {/* /.position-relative */}
        </section>
        {/* /.products-carousel container */}
      </main>
      <div className="mb-5 pb-xl-5"></div>
    </>
  );
};

export default About;

import React from "react";
import IconPack from "../common/IconPack";

const Wishlist = () => {
  return (
    <>
      <div className="page-content my-account__wishlist">
        <div
          className="products-grid row row-cols-2 row-cols-lg-3"
          id="products-grid"
        >
          <div className="product-card-wrapper">
            <div className="product-card mb-3 mb-md-4 mb-xxl-5">
              <div className="pc__img-wrapper">
                <div
                  className="swiper-container background-img js-swiper-slider swiper-container-initialized swiper-container-horizontal"
                  data-settings='{"resizeObserver": true}'
                >
                  <div
                    className="swiper-wrapper"
                    id="swiper-wrapper-5c78f8f0e6a15a7e"
                    aria-live="polite"
                    style={{
                      transitionDuration: "0ms",
                      transform: "translate3d(-330px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next"
                      data-swiper-slide-index={1}
                      style={{ width: 330 }}
                      role="group"
                      aria-label="1 / 4"
                    >
                      <img
                        loading="lazy"
                        src="/assets/images/products/product_5-1.jpg"
                        width={330}
                        height={400}
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </div>
                    <div
                      className="swiper-slide swiper-slide-active"
                      data-swiper-slide-index={0}
                      style={{ width: 330 }}
                      role="group"
                      aria-label="2 / 4"
                    >
                      <img
                        loading="lazy"
                        src="/assets/images/products/product_5.jpg"
                        width={330}
                        height={400}
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </div>
                    {/* /.pc__img-wrapper */}
                    <div
                      className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev"
                      data-swiper-slide-index={1}
                      style={{ width: 330 }}
                      role="group"
                      aria-label="3 / 4"
                    >
                      <img
                        loading="lazy"
                        src="/assets/images/products/product_5-1.jpg"
                        width={330}
                        height={400}
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </div>
                    {/* /.pc__img-wrapper */}
                    <div
                      className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index={0}
                      role="group"
                      aria-label="4 / 4"
                      style={{ width: 330 }}
                    >
                      <img
                        loading="lazy"
                        src="/assets/images/products/product_5.jpg"
                        width={330}
                        height={400}
                        alt="Cropped Faux leather Jacket"
                        className="pc__img"
                      />
                    </div>
                  </div>
                  <span
                    className="pc__img-prev"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                    aria-controls="swiper-wrapper-5c78f8f0e6a15a7e"
                  >
                    <svg
                      width={7}
                      height={11}
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_prev_sm" />
                    </svg>
                  </span>
                  <span
                    className="pc__img-next"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                    aria-controls="swiper-wrapper-5c78f8f0e6a15a7e"
                  >
                    <svg
                      width={7}
                      height={11}
                      viewBox="0 0 7 11"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_next_sm" />
                    </svg>
                  </span>
                  <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
                <button className="btn-remove-from-wishlist gclass-button">
                  <IconPack icon={"close"}/>
                </button>
              </div>
              <div className="pc__info position-relative">
                <p className="pc__category">Dresses</p>
                <h6 className="pc__title">Colorful Jacket</h6>
                <div className="product-card__price d-flex">
                  <span className="money price">$29</span>
                </div>
                <button
                  className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist"
                  title="Add To Wishlist"
                >
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_heart" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* /.products-grid row */}
      </div>
    </>
  );
};

export default Wishlist;

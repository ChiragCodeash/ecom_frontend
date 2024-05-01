import React from "react";
import { Link } from "react-router-dom";
import IconPack from "../common/IconPack";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

const SingleProduct = () => {
  return (
    <>
      <div className="product-card-wrapper">
        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
          <div className="pc__img-wrapper">
            <div style={{ width: 330 }} role="group">
              {/* <Link to="/product">
                <img
                  loading="lazy"
                  src="/assets/images/products/product_1-1.jpg"
                  width={330}
                  height={400}
                  alt="Cropped Faux leather Jacket"
                  className="pc__img"
                />
              </Link> */}
              <Link to="/product">
                <img
                  loading="lazy"
                  src="/assets/images/products/product_2-1.jpg"
                  width={330}
                  height={400}
                  alt="Cropped Faux leather Jacket"
                  className="pc__img"
                />
              </Link>
            </div>

            <button
              className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside gclass-button"
              data-aside="cartDrawer"
              title="Add To Cart"
            >
              Add To Cart
            </button>
          </div>
          <div className="pc__info position-relative">
            <p className="pc__category gclass-text">Dresses</p>
            <h6 className="pc__title">
              <Link to="/product" className="gclass-text-dark">Cropped Faux Leather Jacket</Link>
            </h6>
            <div className="product-card__price d-flex">
              <span className="money price gclass-text">$29</span>
            </div>
            <div className="product-card__review d-flex align-items-center">
              <div className="reviews-group d-flex gclass-text">
                <IconPack icon={"star"} size={"small"} sx={{ width: "10px" }} />
                <IconPack icon={"star"} size={"small"} sx={{ width: "10px" }} />
                <IconPack icon={"star"} size={"small"} sx={{ width: "10px" }} />
                <IconPack icon={"star"} size={"small"} sx={{ width: "10px" }} />
                <IconPack icon={"star"} size={"small"} sx={{ width: "10px" }} />
              </div>
              <span className="reviews-note text-lowercase text-secondary ms-1  gclass-text">
                8k+ reviews
              </span>
            </div>
            <button
              className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist gclass-text"
              title="Add To Wishlist"
            >
              <IconPack icon={"fillheart"} size={"small"} />
            </button>
          </div>
          <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
            <div className="pc-labels__right ms-auto">
              <span className="pc-label pc-label_sale d-block text-white">
                -67%
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;

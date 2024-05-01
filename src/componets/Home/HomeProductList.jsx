import React from "react";
import IconPack from "../common/IconPack";
import { Link } from "react-router-dom";
import CustomeModal from "../common/CustomeModal";

const HomeProductList = ({ className }) => {
  return (
    <>
      <div className={className}>
        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
          <div className="pc__img-wrapper">
            <Link to={"/product"}>
              <img
                loading="lazy"
                src="/assets/images/home/demo7/product-1-1.jpg"
                width={330}
                height={400}
                alt="Cropped Faux leather Jacket"
                className="pc__img"
              />
              <img
                loading="lazy"
                src="/assets/images/home/demo7/product-1-2.jpg"
                width={330}
                height={400}
                alt="Cropped Faux leather Jacket"
                className="pc__img pc__img-second"
              />
            </Link>
            <div className="product-label text-uppercase bg-white top-0 left-0 mt-2 mx-2 gclass-text gclass-bg-light">
              New
            </div>
            <div className="product-label bg-red text-white right-0 top-0 left-auto mt-2 mx-2">
              -67%
            </div>
            <div className="product-label text-uppercase bg-black text-white top-0 left-0 mt-2 mx-2 gclass-text-light gclass-bg-dark">
              Sale
            </div>

            <div className="anim_appear-bottom position-absolute w-100 text-center mb-3">
              <button
                className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-add-cart js-open-aside gclass-button"
                data-aside="cartDrawer"
                title="Add To Cart"
              >
                <IconPack icon={"cart"} size={"small"} />
              </button>
              <button
                className="btn btn-round btn-hover-red border-0 text-uppercase me-1 me-md-2 js-quick-view gclass-button"
                data-bs-toggle="modal"
                data-bs-target="#quickView"
                title="Quick view"
              >
                <IconPack icon={"eye"} size={"small"} />
              </button>
              <button
                className="btn btn-round btn-hover-red border-0 text-uppercase js-add-wishlist gclass-button "
                title="Add To Wishlist"
              >
                <IconPack icon={"heart"} size={"small"} />
              </button>
            </div>
          </div>
          <div className="pc__info position-relative ">
            <p className="pc__category gclass-text">Dresses</p>
            <h6 className="pc__title ">
              <Link to={"/product"} className="gclass-text">Cropped Faux Leather Jacket</Link>
            </h6>
            <div className="product-card__price d-flex">
              <span className="money price gclass-text">$29</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeProductList;

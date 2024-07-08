import React from "react";
import { Link } from "react-router-dom";
import IconPack from "../common/IconPack";
import { IconHeart } from "@tabler/icons-react";
import { Fade, Slide } from "react-awesome-reveal";

const SingleProduct = ({className ,data}) => {
  const RUPEE_SYMBOL = import.meta.env.VITE_APP_RUPEE_SYMBOL
  return (
    <>

      <div className={`product-card-wrapper ${className}`}>
    <Fade  triggerOnce={false} >
        <div className="product-card mb-3 mb-md-4 mb-xxl-5">
          <div className="pc__img-wrapper">
            <div style={{ width: 330 }} role="group">
              {/* <Link to="/product">
                <img
                  loading="lazy"
                  src={data.image_array }
                  width={330}
                  height={400}
                  alt="Cropped Faux leather Jacket"
                  className="pc__img"
                />
              </Link> */}
              <Link to="/product">
                <img
                  loading="lazy"
                  // src="/assets/images/products/product_2-1.jpg"
                  src={data?.image_array || "/assets/images/products/product_2-1.jpg"}
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
            <div className="d-flex flex-wrap justify-content-between">
            <p className="pc__category gclass-text">{data?.category_name}</p>
            <p className="pc__category gclass-text"><strong>{data?.total_variant}</strong> Variant</p>
            </div>
            <h6 className="pc__title">
              <Link to="/product" className="gclass-text-dark">{data?.product_title.length >= 60
              ? data?.product_title.slice(0, 60).concat("...")
              : data?.product_title}</Link>
            </h6>
            <div className="product-card__price d-flex flex-wrap">
                <span className="money price price-old">{RUPEE_SYMBOL} {data?.price}</span>
                <span className="money price price-sale">{RUPEE_SYMBOL} {data?.sale_price}</span>
              </div>
            
            {
              data?.review && (

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
              )
            }

            {
              data?.wichlist &&
            <button
              className="pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist gclass-text"
              title="Add To Wishlist"
            >
              {/* <IconPack icon={"fillheart"} size={"small"} /> */}
              <IconHeart/>
            </button>
            }
          </div>
          {
            data?.isSale &&
          <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
            <div className="pc-labels__right ms-auto">
              <span className="pc-label pc-label_sale d-block text-white">
                -67%
              </span>
            </div>
          </div>
          }
        </div>
    </Fade>
      </div>
    </>
  );
};

export default SingleProduct;

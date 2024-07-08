import React, { useState } from "react";
import IconPack from "../common/IconPack";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import ProductDetailsView from "../common/ProductDetailsView";
import { Link } from "react-router-dom";
import Review from "../common/Review";
import { Fade } from "react-awesome-reveal";

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <link href="/assets/css/CustomeSwipper.css" rel="stylesheet" />
      <main className="padding-top gclass-product-details">
        <div className="mb-md-1 pb-md-3" />
        <section className="product-single container">
          <div className="row">
            <div className="col-lg-7">
              <div
                className="product-single__media vertical-thumbnail product-media-initialized justify-content-center"
                data-media-type="vertical-thumbnail"
              >
                <div className="product-label sale-label">
                  <span>On Sale!</span>
                </div>

                <div className="product-single__image">
                  <div
                    className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events "
                    style={{ cursor: "grab" }}
                  >
                    <div
                      //   className="swiper-wrapper"
                      id="swiper-wrapper-b26f4572210d815b0"
                      aria-live="polite"
                      style={{ transform: "translate3d(0px, 0px, 0px)" }}
                    >
                      <Swiper
                        style={{
                          "--swiper-navigation-color": "#fff",
                          "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={2}
                        zoom={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Thumbs]}
                        className="mySwiper2"
                      >
                        <SwiperSlide>
                          {/* <div className="swiper-zoom-container"> */}
                          <Zoom>
                            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                          </Zoom>

                          {/* </div> */}
                        </SwiperSlide>
                        <SwiperSlide>
                          <Zoom>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg"  heigh/>
                          </Zoom>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Zoom>
                            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                          </Zoom>
                        </SwiperSlide>
                        <SwiperSlide>
                          <Zoom>
                            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                          </Zoom>
                        </SwiperSlide>
                      </Swiper>

                      <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={5}
                        slidesPerView={7}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-1"
                      >
                        <SwiperSlide>
                          <img
                            src="https://swiperjs.com/demos/images/nature-1.jpg"
                            // style={{ width: "104px", height: "104px" }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://swiperjs.com/demos/images/nature-2.jpg"
                            // style={{ width: "104px", height: "104px" }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://swiperjs.com/demos/images/nature-3.jpg"
                            // style={{ width: "104px", height: "104px" }}
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src="https://swiperjs.com/demos/images/nature-4.jpg"
                            // style={{ width: "104px", height: "104px" }}
                         
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="d-flex justify-content-between mb-4 pb-md-2">
                <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                  <Link
                    to={"/"}
                    className="menu-link menu-link_us-s text-uppercase fw-medium"
                  >
                    Home
                  </Link>
                  <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1">
                    /
                  </span>
                  <a className="menu-link menu-link_us-s text-uppercase fw-medium">
                    The Shop
                  </a>
                </div>
              </div>
              <h1 className="product-single__name">
                Lightweight Puffer Jacket With a Hood
              </h1>
              <div className="product-single__rating">
                <div className="reviews-group d-flex">
                  <IconPack icon={"star"} size={"small"} />
                  <IconPack icon={"star"} size={"small"} />
                  <IconPack icon={"star"} size={"small"} />
                  <IconPack icon={"star"} size={"small"} />
                  <IconPack icon={"star"} size={"small"} />
                </div>
                <span className="reviews-note text-lowercase ms-1">
                  8k+ reviews
                </span>
              </div>
              <div className="product-single__price">
                <span className="old-price">$769</span>
                <span className="special-price">$249</span>
              </div>

              <div className="product-single__short-desc">
                <p>
                  Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                  elementum gravida nec dui. Aenean aliquam varius ipsum, non
                  ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                  aliquet magna posuere eget.
                </p>
              </div>
              <form name="addtocart-form" method="post">
                <div className="product-single__swatches">
                  <div className="product-swatch text-swatches">
                    <label>Sizes</label>
                    <div className="swatch-list">
                      <input type="radio" name="size" id="swatch-1" />
                      <label
                        className="swatch js-swatch gclass-border-text"
                        htmlFor="swatch-1"
                        aria-label="Extra Small"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Extra Small"
                      >
                        XS
                      </label>
                      <input
                        type="radio"
                        name="size"
                        id="swatch-2"
                        defaultChecked=""
                      />
                      <label
                        className="swatch js-swatch gclass-border-text"
                        htmlFor="swatch-2"
                        aria-label="Small"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Small"
                      >
                        S
                      </label>
                      <input type="radio" name="size" id="swatch-3" />
                      <label
                        className="swatch js-swatch gclass-border-text"
                        htmlFor="swatch-3"
                        aria-label="Middle"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Middle"
                      >
                        M
                      </label>
                      <input type="radio" name="size" id="swatch-4" />
                      <label
                        className="swatch js-swatch gclass-border-text"
                        htmlFor="swatch-4"
                        aria-label="Large"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Large"
                      >
                        L
                      </label>
                      <input type="radio" name="size" id="swatch-5" />
                      <label
                        className="swatch js-swatch gclass-border-text"
                        htmlFor="swatch-5"
                        aria-label="Extra Large"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        data-bs-original-title="Extra Large"
                      >
                        XL
                      </label>
                    </div>
                    {/* <a
                      href="#"
                      className="sizeguide-link"
                      data-bs-toggle="modal"
                      data-bs-target="#sizeGuide"
                    >
                      Size Guide
                    </a> */}
                  </div>
                  <div className="product-swatch color-swatches">
                    <label>Color</label>
                    <div className="swatch-list">
                      <input type="radio" name="color" id="swatch-11" />
                      <label
                        className="swatch swatch-color js-swatch"
                        htmlFor="swatch-11"
                        aria-label="Black"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        style={{ color: "#222" }}
                        data-bs-original-title="Black"
                      />
                      <input
                        type="radio"
                        name="color"
                        id="swatch-12"
                        defaultChecked=""
                      />
                      <label
                        className="swatch swatch-color js-swatch"
                        htmlFor="swatch-12"
                        aria-label="Red"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        style={{ color: "#C93A3E" }}
                        data-bs-original-title="Red"
                      />
                      <input type="radio" name="color" id="swatch-13" />
                      <label
                        className="swatch swatch-color js-swatch"
                        htmlFor="swatch-13"
                        aria-label="Grey"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title=""
                        style={{ color: "#E4E4E4" }}
                        data-bs-original-title="Grey"
                      />
                    </div>
                  </div>
                </div>

                {/* Out of Stock */}
                {/* <div className="product-single__addtocart">
                  <button
                    type="submit"
                    className="btn btn-primary btn-addtocart btn-outofstock"
                  >
                    Out of Stock
                  </button>
                </div> */}
                <div className="product-single__addtocart">
                  <div className="qty-control position-relative qty-initialized">
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={1}
                      min={1}
                      className="qty-control__number text-center gclass-bg-body gclass-text gclass-border-text"
                    />
                    <div className="qty-control__reduce">-</div>
                    <div className="qty-control__increase">+</div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-addtocart js-open-aside gclass-button"
                    data-aside="cartDrawer"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
              <div className="product-single__addtolinks">
                <a
                  href="#"
                  className="menu-link menu-link_us-s add-to-wishlist"
                >
                  {/* <svg
                    width={16}
                    height={16}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_heart" />
                  </svg> */}
                  <IconPack icon={"heart"} size={"small"} />
                  <span>Add to Wishlist</span>
                </a>
              </div>
              <div className="product-single__meta-info">
                <div className="meta-item">
                  <label>SKU:</label>
                  <span>N/A</span>
                </div>
                <div className="meta-item">
                  <label>Categories:</label>
                  <span>Casual &amp; Urban Wear, Jackets, Men</span>
                </div>
                <div className="meta-item">
                  <label>Tags:</label>
                  <span>biker, black, bomber, leather</span>
                </div>
              </div>
            </div>
          </div>
          {/* <ProductDetailsView /> */}

          <div className="product-single__details-list ">
          {/* Description------------------------------------------ */}
          <Fade>
            <h2 className="product-single__details-list__title">Description</h2>
            {/* product-single__details-list__content */}
            <div className="mx-3">
            {/* product-single__description */}
              <div className="product-single__description ">
                <h3 className="block-title mb-4">
                  Sed do eiusmod tempor incididunt ut labore
                </h3>
                <p className="content">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="block-title">Why choose product?</h3>
                    <ul className="list text-list">
                      <li>Creat by cotton fibric with soft and smooth</li>
                      <li>
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </li>
                      <li>Downloadable/Digital Products, Virtual Products</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="block-title">Sample Number List</h3>
                    <ol className="list text-list">
                      <li>Create Store-specific attrittbutes on the fly</li>
                      <li>
                        Simple, Configurable (e.g. size, color, etc.), bundled
                      </li>
                      <li>Downloadable/Digital Products, Virtual Products</li>
                    </ol>
                  </div>
                </div>
                <h3 className="block-title mb-0">Lining</h3>
                <p className="content">100% Polyester, Main: 100% Polyester.</p>
              </div>
            </div>
            </Fade>
          {/* Review */}
          <Fade>
              <Review />
            </Fade>
          </div>
        </section>
        {/* /.products-carousel container */}
      </main>
    </>
  );
};

export default ProductDetails;

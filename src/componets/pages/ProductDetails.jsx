import React, { useContext, useEffect, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";

// import required modules
import { Link, useNavigate, useParams } from "react-router-dom";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  CartContext,
  GlobalContext,
  ProductContext,
} from "../../context/CreateContext";
import AccordionList from "../common/AccordionList";
import Loading from "../common/Loading";

const ProductDetails = () => {
  const { variant_id } = useParams();
  const navigate = useNavigate();
  const { getSingleProducts } = useContext(ProductContext);
  const { name } = useContext(CartContext);

  const { loading } = useContext(GlobalContext);
  const RUPEE_SYMBOL = import.meta.env.VITE_APP_RUPEE_SYMBOL;

  if (!variant_id) navigate("/shop");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [productData, setProductData] = useState();

  const fetchSingleProduct = async () => {
    const result = await getSingleProducts(variant_id);
    if (result.status) {
      setProductData(result.data);
    } else {
      navigate("/shop");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchSingleProduct();
  }, [variant_id]);
  return (
    <>
      {/* <link href="/assets/css/CustomeSwipper.css" rel="stylesheet" /> */}
      <main className="padding-top gclass-product-details">
        <div className="mb-md-1 pb-md-3" />
        <section className="product-single container my-5">
          <div className="row">
            <div className="col-lg-7">
              {/* {
            loading["GET_SINGLE_PRODUCT"] ? (
              <Loading type={"progress"}/>
            ) : ( */}

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
                        {productData?.image_array.map((item, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <Zoom>
                                <img src={item} loading="lazy" />
                              </Zoom>
                            </SwiperSlide>
                          );
                        })}
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
                        {productData?.image_array.map((item, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <img src={item} loading="lazy" />
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              {/* ) */}
              {/* } */}
            </div>
            <div className="col-lg-5">
              {loading["GET_SINGLE_PRODUCT"] ? (
                <Loading type={"progress"} />
              ) : (
                <div>
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
                    {productData?.product_title}
                  </h1>
                  {/* <div className="product-single__rating">
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
              </div> */}
                  <div className="product-single__price">
                    <span className="old-price">
                      {RUPEE_SYMBOL} {productData?.price}
                    </span>
                    <span className="special-price">
                      {RUPEE_SYMBOL} {productData?.sale_price}
                    </span>
                  </div>

                  {/* <div className="product-single__short-desc">
                <p>
                  Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                  elementum gravida nec dui. Aenean aliquam varius ipsum, non
                  ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                  aliquet magna posuere eget.
                </p>
              </div> */}
                  {/* <form name="addtocart-form" method="post"> */}
                  <div className="product-single__swatches">
                    <div className="product-swatch text-swatches">
                      <label>Sizes</label>
                      <div className="swatch-list">
                        {productData?.size_variant.map((item, i) => {
                          return (
                            <Link
                              to={`/product/${item.variant_id}`}
                              className={`border border-2  px-3 py-1 cursor_pointer ${
                                productData?.size_id == item.size_id &&
                                "border-dark"
                              }`}
                              key={i}
                            >
                              {item.size_name}
                            </Link>
                          );
                        })}
                        {/* <div className="border border-2 border-dark px-3 py-1 cursor_pointer">
                      M
                    </div>
                    <div className="border border-2 border-dark px-3 py-1 cursor_pointer">
                      L
                    </div>
                    <div className="border border-2 border-dark px-3 py-1 cursor_pointer">
                      XL
                    </div> */}
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
                        {productData?.color_variant.map((item, i) => {
                          return (
                            <Link
                              to={`/product/${item.variant_id}`}
                              className={`border border-2  px-3 py-1 cursor_pointer ${
                                productData?.color_id == item.color_id &&
                                "border-dark"
                              }`}
                              key={i}
                            >
                              {item.color_name}
                            </Link>
                          );
                        })}
                        {/* <div className="border border-2 border-dark px-3 py-1 cursor_pointer">
                      Red
                    </div>
                    <div className="border border-2 border-dark px-3 py-1 cursor_pointer">
                      Green
                    </div>
                    <div className="border border-2 border-dark px-3 py-1 cursor_pointer">
                      Red
                    </div> */}
                      </div>
                    </div>
                  </div>

                  {/* Out of Stock */}
                  {productData?.stock ? (
                    <div className="product-single__addtocart">
                      <button
                        type="submit"
                        className="btn btn-primary btn-addtocart js-open-aside gclass-button"
                        data-aside="cartDrawer"
                      >
                        Add to Cart
                      </button>
                    </div>
                  ) : (
                    <div className="product-single__addtocart">
                      <button
                        type="submit"
                        className="btn btn-primary btn-addtocart btn-outofstock"
                      >
                        Out of Stock
                      </button>
                    </div>
                  )}

                  {/* <div className="product-single__addtolinks">
                <a
                  href="#"
                  className="menu-link menu-link_us-s add-to-wishlist"
                >
                  <IconPack icon={"heart"} size={"small"} />
                  <span>Add to Wishlist</span>
                </a>
              </div> */}
                 

                  <div className="product-single__addtional-info">
                    <div className="item mb-3">
                      <label className="h6 ">SKU :</label>
                      <span>{productData?.sku_id}</span>
                    </div>
                    <div className="item mb-3">
                      <label className="h6 ">Categories :</label>
                      <span className="text-capitalize">
                        {productData?.category_name}
                      </span>
                    </div>
                    <div className="item mb-3">
                      <label className="h6 ">Fabric :</label>
                      <span className="text-capitalize">
                        {productData?.fabric_name}
                      </span>
                    </div>
                    <div className="item mb-3">
                      <label className="h6 ">Occasion :</label>
                      <span className="text-capitalize">
                        {productData?.occasion_name}
                      </span>
                    </div>
                    <div className="item mb-3">
                      <label className="h6 ">Style :</label>
                      <span className="text-capitalize">
                        {productData?.style_name}
                      </span>
                    </div>
                  </div>

                  <div className="product-single__details-accordion accordion mb-0">
                    <AccordionList title={"Description"} defaultActive>
                      <div
                        className="show_description"
                        dangerouslySetInnerHTML={{
                          __html: productData?.product_desc,
                        }}
                      ></div>
                    </AccordionList>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* <ProductDetailsView /> */}
        </section>
        {/* /.products-carousel container */}
      </main>
    </>
  );
};

export default ProductDetails;

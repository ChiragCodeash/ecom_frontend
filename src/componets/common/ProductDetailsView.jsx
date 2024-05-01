import React, { useState } from "react";
import { Fade } from "react-reveal";
import Review from "./Review";

const ProductDetailsView = () => {
  const [showData, setShowData] = useState("desc");
  const changeTab = (tab) => {
    setShowData(tab);
  };
  return (
    <>
      <div className="product-single__details-tab">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className={`nav-link nav-link_underscore ${
                showData == "desc" && "active"
              }`}
              id="tab-description-tab"
              data-bs-toggle="tab"
              // href="#tab-description"
              onClick={() => {
                changeTab("desc");
              }}
              role="tab"
              aria-controls="tab-description"
              aria-selected="true"
            >
              Description
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={`nav-link nav-link_underscore ${
                showData == "addi" && "active"
              }`}
              id="tab-additional-info-tab"
              data-bs-toggle="tab"
              // href="#tab-additional-info"
              onClick={() => {
                changeTab("addi");
              }}
              role="tab"
              aria-controls="tab-additional-info"
              aria-selected="false"
            >
              Additional Information
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={`nav-link nav-link_underscore ${
                showData == "review" && "active"
              }`}
              id="tab-reviews-tab"
              data-bs-toggle="tab"
              // href="#tab-reviews"
              onClick={() => {
                changeTab("review");
              }}
              role="tab"
              aria-controls="tab-reviews"
              aria-selected="false"
            >
              Reviews (2)
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {showData == "desc" && (
            <Fade>
              <div
                className="tab-pane fade show active"
                id="tab-description"
                role="tabpanel"
                aria-labelledby="tab-description-tab"
              >
                <div className="product-single__description">
                  <h3 className="block-title mb-4">
                    Sed do eiusmod tempor incididunt ut labore
                  </h3>
                  <p className="content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
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
                  <p className="content">
                    100% Polyester, Main: 100% Polyester.
                  </p>
                </div>
              </div>
            </Fade>
          )}
          {showData == "addi" && (
            <Fade>
              <div
                className="tab-pane  fade show active"
                id="tab-additional-info"
                role="tabpanel"
                aria-labelledby="tab-additional-info-tab"
              >
                <div className="product-single__addtional-info">
                  <div className="item">
                    <label className="h6">Weight</label>
                    <span>1.25 kg</span>
                  </div>
                  <div className="item">
                    <label className="h6">Dimensions</label>
                    <span>90 x 60 x 90 cm</span>
                  </div>
                  <div className="item">
                    <label className="h6">Size</label>
                    <span>XS, S, M, L, XL</span>
                  </div>
                  <div className="item">
                    <label className="h6">Color</label>
                    <span>Black, Orange, White</span>
                  </div>
                  <div className="item">
                    <label className="h6">Storage</label>
                    <span>Relaxed fit shirt-style dress with a rugged</span>
                  </div>
                </div>
              </div>
            </Fade>
          )}
          {showData == "review" && (
            <Fade>
              <Review />
            </Fade>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetailsView;

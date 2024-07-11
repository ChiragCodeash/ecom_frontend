import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext, GlobalContext } from "../../context/CreateContext";
import IconPack from "./IconPack";

const SideBarCart = ({ handleSidebar }) => {
  const RUPEE_SYMBOL = import.meta.env.VITE_APP_RUPEE_SYMBOL;
  const { setShowSidebar } = useContext(GlobalContext);
  const { cartData, getCartData } = useContext(CartContext);
  const navigate = useNavigate();

  const navigateFunc = (endpoint) => {
    setShowSidebar(false);
    navigate(endpoint);
  };
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <>
      <div className="aside-header d-flex align-items-center  cursor_pointer">
        <h3 className="text-uppercase fs-6 mb-0">
          SHOPPING BAG (
          <span className="cart-amount js-cart-items-count">{cartData && cartData.data.length}</span>)
        </h3>
        <a className=" ms-auto" onClick={handleSidebar}>
          <IconPack icon={"close"} />
        </a>
      </div>
      {/* /.aside-header */}
      <div className="aside-content cart-drawer-items-list">
        {cartData &&
          cartData.data.map((item, i) => {
            return (
              <>
                <div className="cart-drawer-item d-flex position-relative">
                  <div className="position-relative">
                    <img
                      loading="lazy"
                      className="cart-drawer-item__img"
                      src={item?.image_array[0]}
                      // src="/assets/images/cart-item-1.jpg"
                    />
                  </div>
                  <div className="cart-drawer-item__info flex-grow-1">
                    <h6 className="cart-drawer-item__title fw-normal">
                    {item?.product_title.length >= 20
                    ? item?.product_title.slice(0,20).concat("...")
                    : item?.product_title}
                    </h6>
                    <p className="cart-drawer-item__option text-secondary">
                      Color: {item?.color_name}
                    </p>
                    <p className="cart-drawer-item__option text-secondary">
                      Size: {item?.size_name}
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <div className="qty-control position-relative qty-initialized">
                        <input
                          type="number"
                          name="quantity"
                          defaultValue={item?.qty}
                          min={1}
                          className="qty-control__number border-0 text-center"
                        />
                        <div className="qty-control__reduce text-start">-</div>
                        <div className="qty-control__increase text-end">+</div>
                      </div>
                      {/* .qty-control */}
                      <span className="cart-subtotal fw-medium">
                        {RUPEE_SYMBOL + item.sale_price}
                      </span>
                    </div>
                  </div>
                  {/* <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" /> */}
                  <IconPack icon={"close"}></IconPack>
                </div>
                {/* /.cart-drawer-item d-flex */}
                <hr className="cart-drawer-divider" />
              </>
            );
          })}
      </div>
      {/* /.aside-content */}
      <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100 gclass-bg-">
        <hr className="cart-drawer-divider" />
        <div className="d-flex justify-content-between">
          <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
          <span className="cart-subtotal fw-medium">{RUPEE_SYMBOL } {cartData && cartData?.total_sale_price}</span>
        </div>
        {/* /.d-flex justify-content-between */}
        <a
          onClick={() => navigateFunc("/cart")}
          className="btn btn-primary mt-3 d-block gclass-button"
        >
          View Cart
        </a>
        <a
          onClick={() => navigateFunc("/checkout")}
          className="btn btn-primary mt-3 d-block  gclass-button-light"
        >
          Checkout
        </a>
      </div>
    </>
  );
};

export default SideBarCart;

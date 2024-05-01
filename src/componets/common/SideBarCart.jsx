import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/CreateContext";
import IconPack from "./IconPack";

const SideBarCart = ({handleSidebar}) => {
  const {setShowSidebar} = useContext(GlobalContext)
  const navigate = useNavigate()

  const navigateFunc = (endpoint)=>{
    setShowSidebar(false)
    navigate(endpoint)
  }
  return (
    <>
      <div className="aside-header d-flex align-items-center  cursor_pointer">
        <h3 className="text-uppercase fs-6 mb-0">
          SHOPPING BAG ({" "}
          <span className="cart-amount js-cart-items-count">1</span> ){" "}
        </h3>
        <a
          className=" ms-auto"
          onClick={handleSidebar}
        >
          <IconPack icon={"close"}/>
        </a>
      </div>
      {/* /.aside-header */}
      <div className="aside-content cart-drawer-items-list">
        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src="/assets/images/cart-item-1.jpg"
            />
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal">Zessi Dresses</h6>
            <p className="cart-drawer-item__option text-secondary">
              Color: Yellow
            </p>
            <p className="cart-drawer-item__option text-secondary">Size: L</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="qty-control position-relative qty-initialized">
                <input
                  type="number"
                  name="quantity"
                  defaultValue={1}
                  min={1}
                  className="qty-control__number border-0 text-center"
                />
                <div className="qty-control__reduce text-start">-</div>
                <div className="qty-control__increase text-end">+</div>
              </div>
              {/* .qty-control */}
              <span className="cart-drawer-item__price money price">$99</span>
            </div>
          </div>
          {/* <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" /> */}
          <IconPack icon={'close'}></IconPack>
        </div>
        {/* /.cart-drawer-item d-flex */}
        <hr className="cart-drawer-divider" />
        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src="/assets/images/cart-item-2.jpg"
            />
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal">Kirby T-Shirt</h6>
            <p className="cart-drawer-item__option text-secondary">
              Color: Black
            </p>
            <p className="cart-drawer-item__option text-secondary">Size: XS</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="qty-control position-relative qty-initialized">
                <input
                  type="number"
                  name="quantity"
                  defaultValue={4}
                  min={1}
                  className="qty-control__number border-0 text-center"
                />
                <div className="qty-control__reduce text-start">-</div>
                <div className="qty-control__increase text-end">+</div>
              </div>
              {/* .qty-control */}
              <span className="cart-drawer-item__price money price">$89</span>
            </div>
          </div>
          {/* <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" /> */}
          <IconPack icon={'close'}></IconPack>
        </div>
        {/* /.cart-drawer-item d-flex */}
        <hr className="cart-drawer-divider" />
        <div className="cart-drawer-item d-flex position-relative">
          <div className="position-relative">
            <img
              loading="lazy"
              className="cart-drawer-item__img"
              src="/assets/images/cart-item-3.jpg"
            />
          </div>
          <div className="cart-drawer-item__info flex-grow-1">
            <h6 className="cart-drawer-item__title fw-normal">
              Cableknit Shawl
            </h6>
            <p className="cart-drawer-item__option text-secondary">
              Color: Green
            </p>
            <p className="cart-drawer-item__option text-secondary">Size: L</p>
            <div className="d-flex align-items-center justify-content-between mt-1">
              <div className="qty-control position-relative qty-initialized">
                <input
                  type="number"
                  name="quantity"
                  defaultValue={3}
                  min={1}
                  className="qty-control__number border-0 text-center"
                />
                <div className="qty-control__reduce text-start">-</div>
                <div className="qty-control__increase text-end">+</div>
              </div>
              {/* .qty-control */}
              <span className="cart-drawer-item__price money price">$129</span>
            </div>
          </div>
          {/* <button className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove" /> */}
          <IconPack icon={'close'}></IconPack>
        </div>
        {/* /.cart-drawer-item d-flex */}
      </div>
      {/* /.aside-content */}
      <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100 gclass-bg-">
        <hr className="cart-drawer-divider" />
        <div className="d-flex justify-content-between">
          <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
          <span className="cart-subtotal fw-medium">$176.00</span>
        </div>
        {/* /.d-flex justify-content-between */}
        <a onClick={()=>navigateFunc("/cart")} className="btn btn-primary mt-3 d-block gclass-button">
          View Cart
        </a>
        <a onClick={()=>navigateFunc("/checkout")} className="btn btn-primary mt-3 d-block  gclass-button-light">
          Checkout
        </a>
      </div>
    </>
  );
};

export default SideBarCart;

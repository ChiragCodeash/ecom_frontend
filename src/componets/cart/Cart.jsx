import React from "react";
import { Link } from "react-router-dom";
import CheckoutStep from "./CheckoutStep";
import IconPack from "../common/IconPack";

const Cart = () => {
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="shop-checkout container">
          {/* <h2 className="page-title">Cart</h2> */}
          <CheckoutStep step={1} title={"Cart"} />
          <div className="shopping-cart">
            <div className="cart-table__wrapper">
              <table className="cart-table gclass-table-cart ">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th />
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="shopping-cart__product-item">
                        <img
                          loading="lazy"
                          src="/assets/images/cart-item-1.jpg"
                          width={120}
                          height={120}
                          alt=""
                        />
                      </div>
                    </td>
                    <td>
                      <div className="shopping-cart__product-item__detail">
                        <h4>Zessi Dresses</h4>
                        <ul className="shopping-cart__product-item__options">
                          <li>Color: Yellow</li>
                          <li>Size: L</li>
                        </ul>
                      </div>
                    </td>
                    <td>
                      <span className="shopping-cart__product-price">$99</span>
                    </td>
                    <td>
                      <div className="qty-control position-relative  qty-initialized">
                        <input
                          type="number"
                          name="quantity"
                          defaultValue={3}
                          min={1}
                          className="qty-control__number text-center gclass-bg-body form-control gclass-border-text"
                        />
                        <div className="qty-control__reduce">-</div>
                        <div className="qty-control__increase">+</div>
                      </div>
                      {/* .qty-control */}
                    </td>
                    <td>
                      <span className="shopping-cart__subtotal">$297</span>
                    </td>
                    <td>
                      <a href="#" className="gclass-text-dark">
                        <IconPack icon={"close"} />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="cart-table-footer">
                {/* <form action="" className="position-relative bg-body gclass-border-primary gclass-bg-body">
                  <input
                    className="form-control"
                    type="text"
                    name="coupon_code"
                    placeholder="Coupon Code"
                  />
                  <input
                    className="btn-link fw-medium position-absolute top-0 end-0 h-100 px-4"
                    type="submit"
                    defaultValue="APPLY COUPON"
                  />
                </form> */}
                {/* <button className="btn btn-light">UPDATE CART</button> */}
              </div>
            </div>
            <div className="shopping-cart__totals-wrapper">
              <div className="sticky-content">
                <div className="shopping-cart__totals">
                  <h3>Cart Totals</h3>
                  <table className="cart-totals">
                    <tbody>
                      <tr>
                        <th>Subtotal</th>
                        <td>$1300</td>
                      </tr>
                      <tr>
                        <th>Shipping</th>
                        <td className="gclass-form">
                          <div className="form-check ">
                            <input
                              className="form-check-input form-check-input_fill"
                              type="checkbox"
                              defaultValue=""
                              id="free_shipping"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="free_shipping"
                            >
                              Free shipping
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input form-check-input_fill"
                              type="checkbox"
                              defaultValue=""
                              id="flat_rate"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flat_rate"
                            >
                              Flat rate: $49
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input form-check-input_fill"
                              type="checkbox"
                              defaultValue=""
                              id="local_pickup"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="local_pickup"
                            >
                              Local pickup: $8
                            </label>
                          </div>
                          <div>Shipping to AL.</div>
                          <div>
                            <a href="#" className="menu-link menu-link_us-s">
                              CHANGE ADDRESS
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>VAT</th>
                        <td>$19</td>
                      </tr>
                      <tr>
                        <th>Total</th>
                        <td>$1319</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mobile_fixed-btn_wrapper">
                  <div className="button-wrapper container">
                    <button className="btn btn-primary btn-checkout gclass-button">
                      PROCEED TO CHECKOUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="mb-5 pb-xl-5" />
    </>
  );
};

export default Cart;

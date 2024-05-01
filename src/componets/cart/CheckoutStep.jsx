import React from "react";
import { Link } from "react-router-dom";

const CheckoutStep = ({ step, title }) => {
  return (
    <>
      <h2 className="page-title gclass-text-dark">{title}</h2>
      <div className="checkout-steps">
        <Link to={"/cart"} className={`checkout-steps__item ${step >=  1 &&  "active" } `}>
          <span className="checkout-steps__item-number">01</span>
          <span className="checkout-steps__item-title">
            <span  className="gclass-text-text">Shopping Bag</span>
            <em className="gclass-text-secondary">Manage Your Items List</em>
          </span>
        </Link>
        <Link to={"/checkout"} className={`checkout-steps__item ${step >=  2 &&  "active" } `}>
          <span className="checkout-steps__item-number">02</span>
          <span className="checkout-steps__item-title">
            <span  className="gclass-text-text">Shipping and Checkout</span>
            <em className="gclass-text-secondary">Checkout Your Items List</em>
          </span>
        </Link>
        <Link to="/confirm" className={`checkout-steps__item ${step >=  3 &&  "active" } `}>
          <span className="checkout-steps__item-number">03</span>
          <span className="checkout-steps__item-title">
            <span className="gclass-text-text">Confirmation</span>
            <em className="gclass-text-secondary">Review And Submit Your Order</em>
          </span>
        </Link>
      </div>
    </>
  );
};

export default CheckoutStep;

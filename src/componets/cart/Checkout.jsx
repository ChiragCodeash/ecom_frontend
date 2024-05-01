import React from "react";
import { Link } from "react-router-dom";
import CheckoutStep from "./CheckoutStep";

const Checkout = () => {
  return (
    <>
      <main className="padding-top">
        <div className="mb-4 pb-4" />
        <section className="shop-checkout container">
          {/* <h2 className="page-title gclass-text-dark">Shipping and Checkout</h2> */}

          <CheckoutStep step={2} title={"Shipping and Checkout"}/>
          <form
            name="checkout-form"
            className="gclass-form"
            action="./shop_order_complete.html"
          >
            <div className="checkout-form">
              <div className="billing-info__wrapper">
                <h4 className="gclass-text-dark">BILLING DETAILS</h4>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_first_name"
                        placeholder="First Name"
                      />
                      <label htmlFor="checkout_first_name">First Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_last_name"
                        placeholder="Last Name"
                      />
                      <label htmlFor="checkout_last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_company_name"
                        placeholder="Company Name (optional)"
                      />
                      <label htmlFor="checkout_company_name">
                        Company Name (optional)
                      </label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="search-field my-3">
                      <div className="form-label-fixed hover-container">
                        {/* <label htmlFor="search-dropdown" className="form-label">
                          Country / Region*
                        </label> */}
                        <>
                          <input
                            list="browsers"
                            className="form-control form-control-lg search-field__actor"
                            name="country"
                            placeholder="Country / Region*"
                          />
                          <datalist
                            id="browsers"
                            className="search-suggestion list-unstyled"
                          >
                            <option
                              className="search-suggestion__item js-search-select"
                              value="Edge"
                            ></option>
                            <option value="Firefox"></option>
                            <option value="Chrome"></option>
                            <option value="Opera"></option>
                            <option value="Safari"></option>
                          </datalist>
                        </>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mt-3 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_street_address"
                        placeholder="Street Address *"
                      />
                      <label htmlFor="checkout_company_name">
                        Street Address *
                      </label>
                    </div>
                    <div className="form-floating mt-3 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_street_address_2"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_city"
                        placeholder="Town / City *"
                      />
                      <label htmlFor="checkout_city">Town / City *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_zipcode"
                        placeholder="Postcode / ZIP *"
                      />
                      <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_province"
                        placeholder="Province *"
                      />
                      <label htmlFor="checkout_province">Province *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="text"
                        className="form-control"
                        id="checkout_phone"
                        placeholder="Phone *"
                      />
                      <label htmlFor="checkout_phone">Phone *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating my-3">
                      <input
                        type="email"
                        className="form-control"
                        id="checkout_email"
                        placeholder="Your Mail *"
                      />
                      <label htmlFor="checkout_email">Your Mail *</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-check mt-3">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
                        defaultValue=""
                        id="create_account"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="create_account"
                      >
                        CREATE AN ACCOUNT?
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
                        defaultValue=""
                        id="ship_different_address"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="ship_different_address"
                      >
                        SHIP TO A DIFFERENT ADDRESS?
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mt-3">
                    <textarea
                      className="form-control form-control_gray"
                      placeholder="Order Notes (optional)"
                      cols={30}
                      rows={8}
                      defaultValue={""}
                    />
                  </div>
                </div>
              </div>
              <div className="checkout__totals-wrapper">
                <div className="sticky-content">
                  <div className="checkout__totals">
                    <h3 className="gclass-text-dark">Your Order</h3>
                    <table className="checkout-cart-items">
                      <thead>
                        <tr>
                          <th className="gclass-text-dark">PRODUCT</th>
                          <th className="gclass-text-dark" align="right">SUBTOTAL</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="gclass-text-secondary">Zessi Dresses x 2</td>
                          <td className="gclass-text-secondary" align="right">$32.50</td>
                        </tr>
                        <tr>
                          <td className="gclass-text-secondary">Kirby T-Shirt</td>
                          <td className="gclass-text-secondary" align="right">$29.90</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="checkout-totals gclass-text-dark">
                      <tbody>
                        <tr>
                          <th>SUBTOTAL</th>
                          <td align="right">$62.40</td>
                        </tr>
                        <tr>
                          <th>SHIPPING</th>
                          <td align="right">Free shipping</td>
                        </tr>
                        <tr>
                          <th>VAT</th>
                          <td align="right">$19</td>
                        </tr>
                        <tr>
                          <th>TOTAL</th>
                          <td align="right">$81.40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="checkout__payment-methods">
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="radio"
                        name="checkout_payment_method"
                        id="checkout_payment_method_1"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_1"
                      >
                        Direct bank transfer
                        <p className="option-detail">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.Your
                          order will not be shipped until the funds have cleared
                          in our account.
                        </p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="radio"
                        name="checkout_payment_method"
                        id="checkout_payment_method_2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_2"
                      >
                        Check payments
                        <p className="option-detail">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="radio"
                        name="checkout_payment_method"
                        id="checkout_payment_method_3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_3"
                      >
                        Cash on delivery
                        <p className="option-detail">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </p>
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input form-check-input_fill"
                        type="radio"
                        name="checkout_payment_method"
                        id="checkout_payment_method_4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkout_payment_method_4"
                      >
                        Paypal
                        <p className="option-detail">
                          Phasellus sed volutpat orci. Fusce eget lore mauris
                          vehicula elementum gravida nec dui. Aenean aliquam
                          varius ipsum, non ultricies tellus sodales eu. Donec
                          dignissim viverra nunc, ut aliquet magna posuere eget.
                        </p>
                      </label>
                    </div>
                    <div className="policy-text">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our{" "}
                      <Link to="/term" className="gclass-text-dark">
                        privacy policy
                      </Link>
                      .
                    </div>
                  </div>
                  <button className="btn btn-primary btn-checkout gclass-button">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
      <div className="mb-5 pb-xl-5" />
    </>
  );
};

export default Checkout;

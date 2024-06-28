import React from "react";
import IconPack from "./IconPack";
import { colors } from "@mui/material";

const Review = () => {
  return (
    <>
      <div
        className="tab-pane  fade show active mt-5 "
        id="tab-reviews"
        role="tabpanel"
        aria-labelledby="tab-reviews-tab"
      >
        <h2 class="product-single__details-list__title">Reviews (3)</h2>
        {/* product-single__details-list__content */}
        <div className="mx-3">
        <div className="product-single__reviews-list">
          <div className="product-single__reviews-item">
            <div className="customer-avatar">
              <img loading="lazy" src="/assets/images/avatar.jpg" alt="" />
            </div>
            <div className="customer-review">
              <div className="customer-name">
                <h6>Janice Miller</h6>
                <div className="reviews-group d-flex">
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "gold" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                </div>
              </div>
              <div className="review-date">April 06, 2023</div>
              <div className="review-text ">
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est…
                </p>
              </div>
            </div>
          </div>
          <div className="product-single__reviews-item">
            <div className="customer-avatar">
              <img loading="lazy" src="/assets/images/avatar.jpg" alt="" />
            </div>
            <div className="customer-review">
              <div className="customer-name">
                <h6>Benjam Porter</h6>
                <div className="reviews-group d-flex">
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "gold" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                  <IconPack
                    icon={"star"}
                    size={"small"}
                    // sx={{ color: "blue" }}
                  />
                </div>
              </div>
              <div className="review-date gclass-text">April 06, 2023</div>
              <div className="review-text">
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit quo minus id quod maxime placeat facere
                  possimus, omnis voluptas assumenda est…
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-single__review-form">
          <form name="customer-review-form" className="gclass-form">
            <h5>Be the first to review “Message Cotton T-Shirt”</h5>
            <p className="gclass-text">
              Your email address will not be published. Required fields are
              marked *
            </p>
            <div className="select-star-rating">
              <label>Your rating *</label>
              <span className="star-rating gclass-text">
                <IconPack
                  icon={"star"}
                  size={"small"}
                  sx={{
                    width: 10,
                  }}
                />
                <IconPack
                  icon={"star"}
                  size={"small"}
                  sx={{
                    width: 10,
                  }}
                />
                <IconPack
                  icon={"star"}
                  size={"small"}
                  sx={{
                    width: 10,
                  }}
                />
                <IconPack
                  icon={"star"}
                  size={"small"}
                  sx={{
                    width: 10,
                  }}
                />
                <IconPack
                  icon={"star"}
                  size={"small"}
                  sx={{
                    width: 10,
                  }}
                />
              </span>
              <input type="hidden" id="form-input-rating" defaultValue="" />
            </div>
            <div className="mb-4">
              <textarea
                id="form-input-review"
                className="form-control form-control_gray"
                placeholder="Your Review"
                cols={30}
                rows={8}
                defaultValue={""}
              />
            </div>
             <div className="form-floating mb-4">
                <input
                  name="login_email"
                  type="email"
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email address *"
                  required=""
                />
                <label htmlFor="customerNameEmailInput">Name</label>
              </div>
              <div className="form-floating mb-4">
                <input
                  name="login_email"
                  type="email"
                  className="form-control form-control_gray"
                  id="customerNameEmailInput"
                  placeholder="Email address *"
                  required=""
                />
                <label htmlFor="customerNameEmailInput">Review</label>
              </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input form-check-input_fill"
                type="checkbox"
                defaultValue=""
                id="remember_checkbox"
              />
              <label className="form-check-label" htmlFor="remember_checkbox">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <div className="form-action">
            <button type="submit" className="btn btn-primary gclass-button">
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </>
  );
};

export default Review;

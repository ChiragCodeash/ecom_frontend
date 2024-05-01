import React from "react";
import IconPack from "./IconPack";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <footer className="footer footer_type_1 gclass-footer">
        <div className="footer-middle container">
          <div className="row row-cols-lg-5 row-cols-2">
            <div className="footer-column footer-store-info mb-4 mb-lg-0">
              <div className="logo">
                  <Logo/>
              </div>
              {/* /.logo */}
              <p className="footer-address">
                1418 River Drive, Suite 35 Cottonhall, CA 9622 United States
              </p>
              <p className="m-0">
                <strong className="fw-medium">sale@uomo.com</strong>
              </p>
              <p>
                <strong className="fw-medium">+1 246-345-0695</strong>
              </p>
              <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
                <li>
                  <a
                    href="https://facebook.com/"
                    className="footer__social-link d-block"
                  >
                    <IconPack icon={"facebook"}/>
                    
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    className="footer__social-link d-block"
                  >
                   
                    <IconPack icon={"twitter"}/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/"
                    className="footer__social-link d-block"
                  >
                   
                    <IconPack icon={"instagram"}/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/"
                    className="footer__social-link d-block"
                  >
                  
                    {/* <YouTubeIcon/> */}
                    <IconPack icon={"youtube"}/>
                  </a>
                </li>
                <li>
                  <a
                    href="https://pinterest.com/"
                    className="footer__social-link d-block"
                  >
                   
                    <IconPack icon={"pinterest"}/>
                  </a>
                </li>
              </ul>
            </div>
            {/* /.footer-column */}
            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h5 className="sub-menu__title text-uppercase">Company</h5>
              <ul className="sub-menu__list list-unstyled">
                <li className="sub-menu__item">
                  <Link to={"/about"} className="menu-link menu-link_us-s">
                    About Us
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/contact"} className="menu-link menu-link_us-s">
                    Contact Us
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/faq"} className="menu-link menu-link_us-s">
                    FAQ
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/term"} className="menu-link menu-link_us-s">
                    Term and Condition
                  </Link>
                </li>
                
              </ul>
            </div>
            {/* /.footer-column */}
            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h5 className="sub-menu__title text-uppercase">Shop</h5>
              <ul className="sub-menu__list list-unstyled">
                <li className="sub-menu__item">
                  <Link to={"/shop"} className="menu-link menu-link_us-s">
                    New Arrivals
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/shop"} className="menu-link menu-link_us-s">
                  Accessories
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/shop"} className="menu-link menu-link_us-s">
                  Men
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/shop"} className="menu-link menu-link_us-s">
                  Women
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/shop"} className="menu-link menu-link_us-s">
                  See all
                  </Link>
                </li>
              </ul>
            </div>
            {/* /.footer-column */}
            <div className="footer-column footer-menu mb-4 mb-lg-0">
              <h5 className="sub-menu__title text-uppercase">Help</h5>
              <ul className="sub-menu__list list-unstyled">
                <li className="sub-menu__item">
                  <Link to={"/contact"} className="menu-link menu-link_us-s">
                    Customer Service
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/profile"} className="menu-link menu-link_us-s">
                    My Account
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/term"} className="menu-link menu-link_us-s">
                    Legal &amp; Privacy
                  </Link>
                </li>
                <li className="sub-menu__item">
                  <Link to={"/contact"} className="menu-link menu-link_us-s">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* /.footer-column */}
            <div className="footer-column footer-newsletter mb-4 mb-lg-0">
              <h5 className="sub-menu__title text-uppercase">Subscribe</h5>
              <p>
                Be the first to get the latest news about trends, promotions,
                and much more!
              </p>
              <form
                action="#"
                className="footer-newsletter__form position-relative bg-body"
              >
                <input
                  className="form-control border-white"
                  type="email"
                  name="email"
                  placeholder="Your email address"
                />
                <input
                  className="btn-link fw-medium bg-white position-absolute top-0 end-0 h-100"
                  type="submit"
                  defaultValue="JOIN"
                />
              </form>
              <div className="mt-4 pt-3">
                <strong className="fw-medium">Secure payments</strong>
                <p className="mt-2">
                  <img
                    loading="lazy"
                    src="/assets/images/payment-options.png"
                    alt="Acceptable payment gateways"
                    className="mw-100"
                  />
                </p>
              </div>
            </div>
            {/* /.footer-column */}
          </div>
          {/* /.row-cols-5 */}
        </div>
        {/* /.footer-middle container */}
        <div className="footer-bottom container">
          <div className="d-block d-md-flex align-items-center">
            <span className="footer-copyright me-auto">©2023 Uomo</span>
            <div className="footer-settings d-block d-md-flex align-items-center">
              <div className="d-flex align-items-center">
                <label
                  htmlFor="footerSettingsLanguage"
                  className="me-2 text-secondary"
                >
                  Language
                </label>
                <select
                  id="footerSettingsLanguage"
                  className="form-select form-select-sm "
                  aria-label="Default select example"
                  name="store-language"
                  defaultValue={"UK"}
                >
                  <option className="footer-select__option" value={"UK"}>
                    United Kingdom | English
                  </option>
                  <option className="footer-select__option" value={"US"}>
                    United States | English
                  </option>
                  <option className="footer-select__option" value={"germen"}>
                    German
                  </option>
                  <option className="footer-select__option" value={"french"}>
                    French
                  </option>
                  <option className="footer-select__option" value={"swedish"}>
                    Swedish
                  </option>
                </select>
              </div>
              <div className="d-flex align-items-center">
                <label
                  htmlFor="footerSettingsCurrency"
                  className="ms-md-3 me-2 text-secondary"
                >
                  Currency
                </label>
                <select
                  id="footerSettingsCurrency"
                  className="form-select form-select-sm"
                  aria-label="Default select example"
                  name="store-language"
                  defaultValue={"USD"}
                >
                  <option value={"USD"}>$ USD</option>
                  <option value={"GBP"}>£ GBP</option>
                  <option value={"EURO"}>€ EURO</option>
                </select>
              </div>
            </div>
            {/* /.footer-settings */}
          </div>
          {/* /.d-flex */}
        </div>
        {/* /.footer-bottom container */}
      </footer>
    </>
  );
};

export default Footer;

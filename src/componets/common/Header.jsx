import React, { useContext, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import CustomeModal from "./CustomeModal";
import { Link, useNavigate } from "react-router-dom";
import IconPack from "./IconPack";
import Logo from "./Logo";
import DropdownList from "./DropdownList";
import SideBar from "./SideBar";
import SideBarCart from "./SideBarCart";
import { AuthContext, CartContext, GlobalContext, ProductContext } from "../../context/CreateContext";
import Cookies from "js-cookie";

const Header = () => {
  const {GetToken} = useContext(AuthContext)
  const { cartData } = useContext(CartContext)
  // const navigate = useNavigate()
  const token = GetToken()
  const {filter , setFilter} = useContext(ProductContext)
  const {showModal , setShowModal , showSidebar, setShowSidebar} = useContext(GlobalContext)
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [showMobiNav, setShowMobiNav] = useState(false);

  // const searchRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   console.log(event)
  //   console.log("searchRef.current===>" , searchRef.current)
  //   console.log("event.target===>" , event.target)
  //   if (searchRef.current && !searchRef.current.contains(event.target)) {
  //     console.log("Run")
  //     setShowSearch(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  useEffect(()=>{
    document.body.style.overflow = showSidebar || showMobiNav ? "hidden" : "";
  },[showSidebar , showMobiNav])

 
  const handleSearchChange = (e)=>{
    setFilter({...filter , [e.target.name] : e.target.value})
  }

  const navigateFunc = (endpoint) => {
    navigate(endpoint);
    setShowMobiNav(false);
  };
  const NavbarItem = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Product",
      link: "/shop",
      type: "megamenu",
      routes: [
        {
          name: "Dress",
          link: "/shop",
          routes: [
            {
              name: "Dress1",
              link: "/shop",
            },
            {
              name: "Dress2",
              link: "/shop",
            },
            {
              name: "Dress3",
              link: "/shop",
            },
          ],
        },
        {
          name: "Kurta",
          link: "/shop",
          routes: [
            {
              name: "Kurta1",
              link: "/shop",
            },
            {
              name: "Kurta2",
              link: "/shop",
            },
            {
              name: "Kurta3",
              link: "/shop",
            },
          ],
        },
        {
          name: "Sahara",
          link: "/shop",
          routes: [
            {
              name: "Sahara1",
              link: "/shop",
            },
            {
              name: "Sahara2",
              link: "/shop",
            },
            {
              name: "Sahara3",
              link: "/shop",
            },
          ],
        },
      ],
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Blog",
      link: "/cart",
      type: "default",
      routes: [
        {
          name: "blog1",
          link: "/cart",
        },
        {
          name: "blog2",
          link: "/cart",
        },
        {
          name: "blog3",
          link: "/cart",
        },
      ],
    },
  ];

  // Handle Modal
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <SideBar isOpen={showSidebar} className={"cart-drawer"}>
        <SideBarCart handleSidebar={handleSidebar} />
      </SideBar>
      {/* Mobile Header */}
      <div className="header-mobile header_sticky gclass-navbar">
        <div className="container d-flex align-items-center h-100">
          <a
            className="mobile-nav-activator d-block position-relative"
            onClick={(e) => {
              setShowMobiNav(!showMobiNav);
            }}
          >
            {showMobiNav ? (
              <IconPack icon={"close"} />
            ) : (
              <IconPack icon={"nav"} />
            )}
            <button className="btn-close-lg position-absolute top-0 start-0 w-100" />
          </a>

          <Logo />
          {/* /.logo */}
          <a
            className="header-tools__item header-tools__cart js-open-aside"
            data-aside="cartDrawer"
            onClick={handleSidebar}
          >
            <IconPack icon={"cart"} />
            <span className="cart-amount d-block position-absolute js-cart-items-count gclass-bg-secondary">
            {cartData && cartData.data.length}
            </span>
          </a>
        </div>
        {/* /.container */}
        {showMobiNav ? (
          <nav className="header-mobile__navigation navigation d-flex flex-column w-100 position-absolute bg-body overflow-auto h-100">
            <div className="container">
              <form
                action="search.html"
                method="GET"
                className="search-field position-relative mt-4 mb-3"
              >
                <div className="position-relative">
                  <input
                    className="search-field__input w-100 border rounded-1 gclass-navbar"
                    type="text"
                    name="search-keyword"
                    placeholder="Search products"
                  />
                  <button
                    className="btn-icon search-popup__submit  pb-0 me-2 "
                    type="submit"
                  >
                    <IconPack icon={"search"} />
                  </button>
                  <button
                    className="btn-icon btn-close-lg search-popup__reset pb-0 me-2"
                    type="reset"
                  />
                </div>
                <div className="position-absolute start-0 top-100 m-0 w-100">
                  <div className="search-result" />
                </div>
              </form>
              {/* /.header-search */}
            </div>
            {/* /.container */}
            <div className="container">
              <div className="overflow-hidden">
                <ul className="navigation__list list-unstyled position-relative">
                  {NavbarItem.map((navitem, navbarIndex) => {
                    return navitem.type == "default" ||
                      navitem.type == "megamenu" ? (
                      <DropdownList
                        list={[...navitem.routes]}
                        title={navitem.name}
                        setShowMobiNav={setShowMobiNav}
                      />
                    ) : (
                      <li className="navigation__item">
                        <a
                          onClick={() => navigateFunc(navitem.link)}
                          className="navigation__link"
                        >
                          {navitem.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* <div className="border-top mt-auto pb-2">
              <div className="customer-links container mt-4 mb-2 pb-1">
                <Link to={"/profile/dashboard"}>
                  <IconPack icon={"user"} />
                  <span className="d-inline-block ms-2 text-uppercase align-middle fw-medium">
                    My Account
                  </span>
                </Link>
              </div>
              <div className="container d-flex align-items-center">
                <label
                  htmlFor="footerSettingsLanguage_mobile"
                  className="me-2 text-secondary gclass-navbar"
                >
                  Language
                </label>
                <select
                  id="footerSettingsLanguage_mobile"
                  className="form-select form-select-sm bg-transparent border-0"
                  aria-label="Default select example"
                  name="store-language"
                >
                  <option className="footer-select__option" selected="">
                    United Kingdom | English
                  </option>
                  <option className="footer-select__option" value={1}>
                    United States | English
                  </option>
                  <option className="footer-select__option" value={2}>
                    German
                  </option>
                  <option className="footer-select__option" value={3}>
                    French
                  </option>
                  <option className="footer-select__option" value={4}>
                    Swedish
                  </option>
                </select>
              </div>
              <div className="container d-flex align-items-center">
                <label
                  htmlFor="footerSettingsCurrency_mobile"
                  className="me-2 text-secondary gclass-navbar"
                >
                  Currency
                </label>
                <select
                  id="footerSettingsCurrency_mobile"
                  className="form-select form-select-sm bg-transparent border-0"
                  aria-label="Default select example"
                  name="store-language"
                >
                  <option selected="">$ USD</option>
                  <option value={1}>£ GBP</option>
                  <option value={2}>€ EURO</option>
                </select>
              </div>
              <ul className="container social-links list-unstyled d-flex flex-wrap mb-0">
                <li>
                  <a className="footer__social-link d-block ps-0">
                    <IconPack icon={"facebook"} size={"small"} />
                  </a>
                </li>
                <li>
                  <a className="footer__social-link d-block">
                    <IconPack icon={"twitter"} size={"small"} />
                  </a>
                </li>
                <li>
                  <a className="footer__social-link d-block">
                    <IconPack icon={"instagram"} size={"small"} />
                  </a>
                </li>
                <li>
                  <a className="footer__social-link d-block">
                    <IconPack icon={"youtube"} size={"small"} />
                  </a>
                </li>
                <li>
                  <a className="footer__social-link d-block">
                    <IconPack icon={"pinterest"} />
                  </a>
                </li>
              </ul>
            </div> */}
          </nav>
        ) : (
          ""
        )}
        {/* /.navigation */}
      </div>

      {/* Desk Header */}
      <header id="header" className="header header_sticky position-absolute gclass-navbar">
        <div className="container">
          <div className="header-desk header-desk_type_1">
            {/* <div className="logo">
              <a href="/">
                <img
                  src="/assets/images/logo.png"
                  alt="Uomo"
                  className="logo__image d-block"
                />
              </a>
            </div> */}
            <Logo />
            {/* /.logo */}
            <nav className="navigation">
              <ul className="navigation__list list-unstyled d-flex">
                {NavbarItem.map((item, index) => {
                  return (
                    <li className="navigation__item" key={index}>
                      <Link to={item.link} className="navigation__link">
                        {item.name}
                      </Link>
                      {item.type == "megamenu" ? (
                        <div className="mega-menu">
                          <div className="container d-flex">
                            {item.routes.map((megamenu, key) => {
                              return (
                                <div className="col pe-4" key={key}>
                                  <a className="sub-menu__title">
                                    {megamenu.name}
                                  </a>
                                  <ul className="sub-menu__list list-unstyled">
                                    {megamenu.routes.map(
                                      (megamenuitem, key1) => {
                                        return (
                                          <li
                                            className="sub-menu__item"
                                            key={key1}
                                          >
                                            <Link
                                              to={megamenuitem.link}
                                              className="menu-link menu-link_us-s"
                                            >
                                              {megamenuitem.name}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ) : item.type == "default" ? (
                        <ul
                          className="default-menu list-unstyled"
                          style={{ left: 777 }}
                        >
                          {item.routes.map((defaultItem, key2) => {
                            return (
                              <li className="sub-menu__item" key={key2}>
                                <Link
                                  to={defaultItem.link}
                                  className="menu-link menu-link_us-s"
                                >
                                  {defaultItem.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </ul>

              {/* /.navigation__list */}
            </nav>
            {/* /.navigation */}
            <div className="header-tools d-flex align-items-center">
              <div className="header-tools__item hover-container">
                <div className="js-hover__open position-relative">
                  <a
                    className="js-search-popup search-field__actor"
                    onClick={() => {
                      setShowSearch(!showSearch);
                    }}
                  >
                    {/* {showSearch ? <CloseIcon /> : <SearchIcon />} */}
                    {showSearch ? (
                      <IconPack icon={"close"} />
                    ) : (
                      <IconPack icon={"search"} />
                    )}
                    {/* <i className="btn-icon btn-close-lg" /> */}
                  </a>
                </div>
                {showSearch ? (
                  <Fade duration={500}>
                    <div className="search-popup js-hidden-content" >
                      <div
                        className="search-field container"
                       
                      >
                        <p className="text-uppercase text-secondary fw-medium mb-4 gclass-navbar">
                          What are you looking for?
                        </p>
                        <div className="position-relative">
                          <input
                            className="search-field__input search-popup__input w-100 fw-medium gclass-navbar"
                            type="text"
                            name="query"
                            placeholder="Search products"
                            onChange={handleSearchChange}
                          />
                          <button
                            className="btn-icon search-popup__submit gclass-navbar"
                            type="button"
                            onClick={(e)=>{
                              e.preventDefault()
                              if(filter.query.trim().length){
                                setShowSearch(false)
                                navigate("/shop")
                              }
                            }}
                            
                          >
                            {/* <svg
                            className="d-block"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <use href="#icon_search" />
                          </svg> */}
                            <a href="">
                              <IconPack icon={"search"} />
                            </a>
                          </button>
                          <button
                            className="btn-icon btn-close-lg search-popup__reset"
                            type="reset"
                          />
                        </div>
                        {/* <div className="search-popup__results">
                          <div className="sub-menu search-suggestion">
                            <h6 className="sub-menu__title fs-base gclass-navbar">
                              Quicklinks
                            </h6>
                            <ul className="sub-menu__list list-unstyled">
                              <li className="sub-menu__item">
                                <a
                                  href="./shop2.html"
                                  className="menu-link menu-link_us-s"
                                >
                                  New Arrivals
                                </a>
                              </li>
                              <li className="sub-menu__item">
                                <a className="menu-link menu-link_us-s">
                                  Dresses
                                </a>
                              </li>
                              <li className="sub-menu__item">
                                <a
                                  href="./shop3.html"
                                  className="menu-link menu-link_us-s"
                                >
                                  Accessories
                                </a>
                              </li>
                              <li className="sub-menu__item">
                                <a className="menu-link menu-link_us-s">
                                  Footwear
                                </a>
                              </li>
                              <li className="sub-menu__item">
                                <a className="menu-link menu-link_us-s">
                                  Sweatshirt
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="search-result row row-cols-5" />
                        </div> */}
                      </div>
                      {/* /.header-search */}
                    </div>
                  </Fade>
                ) : (
                  ""
                )}
                {/* /.search-popup */}
              </div>
              {/* /.header-tools__item hover-container */}
              <div className="header-tools__item hover-container">
                {
                  token ? (
                    <>
                <Link
                  className="header-tools__item js-open-aside"
                  to={"/profile/dashboard"}
                >
                  <IconPack icon={"user"} />
                </Link>
                    </>
                  ) : (
                    <>
                <Link
                  className="header-tools__item js-open-aside"
                  to={"/login"}
                >
                  <IconPack icon={"user"} />
                </Link>
                    </>
                  )
                }
              </div>

              {
                token && (
                  <>
                  
              <Link to={"/profile/wishlist"} className="header-tools__item">
             
                <IconPack icon={"heart"} />
              </Link>
              <div
                className="header-tools__item header-tools__cart js-open-aside"
                data-aside="cartDrawer"
                onClick={() => {
                  handleSidebar();
                }}
              >
                <IconPack icon={"cart"} />
                <span className="cart-amount d-block position-absolute js-cart-items-count gclass-bg-secondary">
                 {cartData && cartData.data.length}
                </span>
              </div>
                  </>
                )
              }
              {/* <a
                className="header-tools__item"
                data-bs-toggle="modal"
                data-bs-target="#siteMap"
                onClick={handleShowModal}
              >
                <IconPack icon={"nav"} size="large" />
              </a> */}
            </div>
            {/* /.header__tools */}
          </div>
          {/* /.header-desk header-desk_type_1 */}
        </div>
        {/* /.container */}
      </header>

      {/* Modal */}
      <CustomeModal
        handleShow={showModal}
        handleClose={handleCloseModal}
        fullscreen={true}
      >
        <div
          className="modal fade show"
          id="siteMap"
          tabIndex={-1}
          aria-labelledby="siteMapModal"
          style={{ display: "block", paddingRight: 4 }}
          aria-modal="true"
          role="dialog"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="sitemap d-flex">
              <div className="w-50 d-none d-lg-block">
                <img
                  loading="lazy"
                  src="/assets/images/nav-bg.jpg"
                  alt="Site map"
                  className="sitemap__bg"
                />
              </div>
              {/* /.sitemap__bg w-50 d-none d-lg-block */}
              <div className="sitemap__links w-50 flex-grow-1">
                <div className="modal-content">
                  <div className="modal-header">
                    <ul className="nav nav-pills" id="pills-tab" role="tablist">
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link rounded-1 text-uppercase active"
                          id="pills-item-1-tab"
                          data-bs-toggle="pill"
                          href="#pills-item-1"
                          role="tab"
                          aria-controls="pills-item-1"
                          aria-selected="true"
                        >
                          WOMEN
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link rounded-1 text-uppercase"
                          id="pills-item-2-tab"
                          data-bs-toggle="pill"
                          href="#pills-item-2"
                          role="tab"
                          aria-controls="pills-item-2"
                          aria-selected="false"
                        >
                          MEN
                        </a>
                      </li>
                      <li className="nav-item" role="presentation">
                        <a
                          className="nav-link rounded-1 text-uppercase"
                          id="pills-item-3-tab"
                          data-bs-toggle="pill"
                          href="#pills-item-3"
                          role="tab"
                          aria-controls="pills-item-3"
                          aria-selected="false"
                        >
                          KIDS
                        </a>
                      </li>
                    </ul>
                    <button
                      type="button"
                      className="btn-close-lg"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={handleCloseModal}
                    />
                  </div>
                  <div className="modal-body">
                    <div className="tab-content col-12" id="pills-tabContent">
                      <div
                        className="tab-pane fade active show"
                        id="pills-item-1"
                        role="tabpanel"
                        aria-labelledby="pills-item-1-tab"
                      >
                        <div className="row">
                          <ul
                            className="nav nav-tabs list-unstyled col-5 d-block"
                            id="myTab"
                            role="tablist"
                          >
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a
                                className="nav-link nav-link_rline active"
                                id="tab-item-1-tab"
                                data-bs-toggle="tab"
                                href="#tab-item-1"
                                role="tab"
                                aria-controls="tab-item-1"
                                aria-selected="true"
                              >
                                <span className="rline-content">WOMEN</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a
                                className="nav-link nav-link_rline"
                                id="tab-item-2-tab"
                                data-bs-toggle="tab"
                                href="#tab-item-2"
                                role="tab"
                                aria-controls="tab-item-2"
                                aria-selected="false"
                              >
                                <span className="rline-content">MAN</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a
                                className="nav-link nav-link_rline"
                                id="tab-item-3-tab"
                                data-bs-toggle="tab"
                                href="#tab-item-3"
                                role="tab"
                                aria-controls="tab-item-3"
                                aria-selected="false"
                              >
                                <span className="rline-content">KIDS</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">HOME</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">
                                  COLLECTION
                                </span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline text-red">
                                SALE UP TO 50% OFF
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">NEW</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">SHOES</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">
                                  ACCESSORIES
                                </span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">JOIN LIFE</span>
                              </a>
                            </li>
                            <li
                              className="nav-item position-relative"
                              role="presentation"
                            >
                              <a className="nav-link nav-link_rline">
                                <span className="rline-content">
                                  #UOMOSTYLE
                                </span>
                              </a>
                            </li>
                          </ul>
                          <div className="tab-content col-7" id="myTabContent">
                            <div
                              className="tab-pane fade show active"
                              id="tab-item-1"
                              role="tabpanel"
                              aria-labelledby="tab-item-1-tab"
                            >
                              <ul className="sub-menu list-unstyled">
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    New
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Best Sellers
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Collaborations®
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Sets
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Denim
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Jackets &amp; Coats
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Overshirts
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Trousers
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Jeans
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Dresses
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Sweatshirts and Hoodies
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    T-shirts &amp; Tops
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shirts &amp; Blouses
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shorts and Bermudas
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shoes
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a
                                    href="./shop3.html"
                                    className="menu-link menu-link_us-s"
                                  >
                                    Accessories
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Bags
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Gift Card
                                  </a>
                                </li>
                              </ul>
                              {/* /.sub-menu */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="tab-item-2"
                              role="tabpanel"
                              aria-labelledby="tab-item-2-tab"
                            >
                              <ul className="sub-menu list-unstyled">
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Best Sellers
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    New
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Sets
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Denim
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Collaborations®
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Trousers
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Jackets &amp; Coats
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Overshirts
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Dresses
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Jeans
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Sweatshirts and Hoodies
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Gift Card
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shirts &amp; Blouses
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    T-shirts &amp; Tops
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shorts and Bermudas
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a
                                    href="./shop3.html"
                                    className="menu-link menu-link_us-s"
                                  >
                                    Accessories
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shoes
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Bags
                                  </a>
                                </li>
                              </ul>
                              {/* /.sub-menu */}
                            </div>
                            <div
                              className="tab-pane fade"
                              id="tab-item-3"
                              role="tabpanel"
                              aria-labelledby="tab-item-3-tab"
                            >
                              <ul className="sub-menu list-unstyled">
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Gift Card
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Collaborations®
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Sets
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Denim
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    New
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Best Sellers
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Overshirts
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Jackets &amp; Coats
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Jeans
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Trousers
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shorts and Bermudas
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Shoes
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a
                                    href="./shop3.html"
                                    className="menu-link menu-link_us-s"
                                  >
                                    Accessories
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Dresses
                                  </a>
                                </li>
                                <li className="sub-menu__item">
                                  <a className="menu-link menu-link_us-s">
                                    Bags
                                  </a>
                                </li>
                              </ul>
                              {/* /.sub-menu */}
                            </div>
                          </div>
                        </div>
                        {/* /.row */}
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-item-2"
                        role="tabpanel"
                        aria-labelledby="pills-item-2-tab"
                      >
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        Elementum lectus a porta commodo suspendisse arcu,
                        aliquam lectus faucibus.
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-item-3"
                        role="tabpanel"
                        aria-labelledby="pills-item-3-tab"
                      >
                        <p>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        Ut enim ad minima veniam, quis nostrum exercitationem
                        ullam corporis suscipit laboriosam, nisi ut aliquid ex
                        ea commodi consequatur?
                      </div>
                    </div>
                  </div>
                  {/* /.modal-body */}
                </div>
                {/* /.modal-content */}
              </div>
              {/* /.sitemap__links w-50 flex-grow-1 */}
            </div>
          </div>
          {/* /.modal-dialog modal-fullscreen */}
        </div>
      </CustomeModal>

    </>
  );
};

export default Header;

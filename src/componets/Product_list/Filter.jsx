import React from "react";
import AccordionList from "../common/AccordionList";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const Filter = ({ type }) => {
  const [value, setValue] = React.useState([500, 2000]);

  const handleChange = (event, newValue) => {
    // console.log("🚀 ~ file: Filter.jsx:18 ~ handleChange ~ newValue:", newValue)
    setValue(newValue);
  };
  if (type == "sidebar") {
    return (
      <>
        <div>
          {/* /.aside-header */}
          <div className="pt-4 pt-lg-0" />
          <AccordionList title={"Product Categories"}>
            <ul className="list list-inline mb-0">
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Dresses
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Shorts
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Sweatshirts
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Swimwear
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Jackets
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  T-Shirts &amp; Tops
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Jeans
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Trousers
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Men
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Jumpers &amp; Cardigans
                </a>
              </li>
            </ul>
          </AccordionList>
          {/* /.accordion-item */}
          <AccordionList title={"Color"}>
            <div className="d-flex flex-wrap">
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#0a2472" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#d7bb4f" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#282828" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#b1d6e8" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#9c7539" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#d29b48" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#e6ae95" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#d76b67" }}
              />
              <a
                href="#"
                className="swatch-color swatch_active js-filter"
                style={{ color: "#bababa" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#bfdcc4" }}
              />
            </div>
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Size"}>
            <div className="d-flex flex-wrap">
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter swatch_active"
              >
                XS
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter swatch_active"
              >
                S
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                M
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                L
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                XL
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                XXL
              </a>
            </div>
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Brands"}>
            <div className="search-field multi-select accordion-body px-0 pb-0">
              <select className="d-none" multiple="" name="total-numbers-list">
                <option value={1}>Adidas</option>
                <option value={2}>Balmain</option>
                <option value={3}>Balenciaga</option>
                <option value={4}>Burberry</option>
                <option value={5}>Kenzo</option>
                <option value={5}>Givenchy</option>
                <option value={5}>Zara</option>
              </select>
              <div className="search-field__input-wrapper mb-3">
                <input
                  type="text"
                  name="search_text"
                  className="search-field__input form-control form-control-sm border-light border-2"
                  placeholder="Search"
                />
              </div>
              <ul className="multi-select__list list-unstyled">
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Adidas</span>
                  <span className="text-secondary">2</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Balmain</span>
                  <span className="text-secondary">7</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Balenciaga</span>
                  <span className="text-secondary">10</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Burberry</span>
                  <span className="text-secondary">39</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Kenzo</span>
                  <span className="text-secondary">95</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Givenchy</span>
                  <span className="text-secondary">1092</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Zara</span>
                  <span className="text-secondary">48</span>
                </li>
              </ul>
            </div>
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Price"}>
            <Box sx={{ width: "auto" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                min={100}
                step={10}
                max={10000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className="gclass-text"
              />
            </Box>
            <div className="price-range__info d-flex align-items-center mt-2">
              <div className="me-auto">
                <span className="text-secondary gclass-text">Min Price: </span>
                <span className="price-range__min gclass-text-secondary">${value[0]}</span>
              </div>
              <div>
                <span className="text-secondary gclass-text">Max Price: </span>
                <span className="price-range__max gclass-text-secondary">${value[1]}</span>
              </div>
            </div>
          </AccordionList>
          {/* /.accordion */}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="shop-sidebar side-sticky bg-body gclass-bg-body"
          id="shopFilter"
          style={{ top: 0 }}
        >
          <div className="aside-header d-flex d-lg-none align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
            <button className="btn-close-lg js-close-aside btn-close-aside ms-auto" />
          </div>
          {/* /.aside-header */}
          <div className="pt-4 pt-lg-0" />
          <AccordionList title={"Product Categories"}>
            <ul className="list list-inline mb-0">
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Dresses
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Shorts
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Sweatshirts
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Swimwear
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Jackets
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  T-Shirts &amp; Tops
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Jeans
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Trousers
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Men
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="menu-link py-1">
                  Jumpers &amp; Cardigans
                </a>
              </li>
            </ul>
          </AccordionList>
          {/* /.accordion-item */}
          <AccordionList title={"Color"}>
            <div className="d-flex flex-wrap">
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#0a2472" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#d7bb4f" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#282828" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#b1d6e8" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#9c7539" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#d29b48" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#e6ae95" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#d76b67" }}
              />
              <a
                href="#"
                className="swatch-color swatch_active js-filter"
                style={{ color: "#bababa" }}
              />
              <a
                href="#"
                className="swatch-color js-filter"
                style={{ color: "#bfdcc4" }}
              />
            </div>
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Size"}>
            <div className="d-flex flex-wrap">
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter swatch_active"
              >
                XS
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter swatch_active"
              >
                S
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                M
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                L
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                XL
              </a>
              <a
                href="#"
                className="swatch-size btn btn-sm btn-outline-light mb-3 me-3 js-filter"
              >
                XXL
              </a>
            </div>
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Brands"}>
            <div className="search-field multi-select accordion-body px-0 pb-0">
              <select className="d-none" multiple="" name="total-numbers-list">
                <option value={1}>Adidas</option>
                <option value={2}>Balmain</option>
                <option value={3}>Balenciaga</option>
                <option value={4}>Burberry</option>
                <option value={5}>Kenzo</option>
                <option value={5}>Givenchy</option>
                <option value={5}>Zara</option>
              </select>
              <div className="search-field__input-wrapper mb-3">
                <input
                  type="text"
                  name="search_text"
                  className="search-field__input form-control form-control-sm border-light border-2"
                  placeholder="Search"
                />
              </div>
              <ul className="multi-select__list list-unstyled">
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Adidas</span>
                  <span className="text-secondary">2</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Balmain</span>
                  <span className="text-secondary">7</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Balenciaga</span>
                  <span className="text-secondary">10</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Burberry</span>
                  <span className="text-secondary">39</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Kenzo</span>
                  <span className="text-secondary">95</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Givenchy</span>
                  <span className="text-secondary">1092</span>
                </li>
                <li className="search-suggestion__item multi-select__item text-primary js-search-select js-multi-select">
                  <span className="me-auto">Zara</span>
                  <span className="text-secondary">48</span>
                </li>
              </ul>
            </div>
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Price"}>
            <Box sx={{ width: "auto" }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                min={100}
                step={10}
                max={10000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className="gclass-text-dark"
              />
            </Box>
            <div className="price-range__info d-flex align-items-center mt-2">
              <div className="me-auto">
                <span className="text-secondary gclass-text">Min Price: </span>
                <span className="price-range__min gclass-text-primary">${value[0]}</span>
              </div>
              <div>
                <span className="text-secondary gclass-text">Max Price: </span>
                <span className="price-range__max gclass-text-primary">${value[1]}</span>
              </div>
            </div>
          </AccordionList>
          {/* /.accordion */}
        </div>
      </>
    );
  }
};

export default Filter;

import React, { useContext, useEffect, useState } from "react";
import AccordionList from "../common/AccordionList";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ProductContext } from "../../context/CreateContext";

function valuetext(value) {
  return `${value}`;
}

const Filter = ({ type }) => {
  const {
    filterData,
    toggleInFilter,
    filter,
    priceRange,
    setPriceRange,
    filterCategory,
  } = useContext(ProductContext);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };
  if (type == "sidebar") {
    return (
      <>
        <div>
          {/* /.aside-header */}
          <div className="pt-4 pt-lg-0" />
          <AccordionList title={"Product Categories"} defaultActive>
            {filterData &&
              filterData["category"].map((item, i) => {
                return (
                  <div
                    className="d-flex form-check justify-content-between my-2"
                    key={i}
                  >
                    <div>
                      <input
                        className="form-check-input form-check-input_fill "
                        type="checkbox"
                        name="cateogry"
                        checked={filterCategory.includes(item.pc_id)}
                        id={`category${item.pc_id}`}
                        onChange={() => {
                          toggleInFilter("category", item.pc_id);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`category${item.pc_id}`}
                      >
                        {item.category_name}
                      </label>
                    </div>
                    <p className="m-0"> ({item.total_product})</p>
                  </div>
                );
              })}
          </AccordionList>
          {/* /.accordion-item */}
          <AccordionList title={"Color"}>
            {filterData &&
              filterData["color"].map((item, i) => {
                return (
                  <div
                    className="d-flex form-check justify-content-between my-2"
                    key={i}
                  >
                    <div>
                      <input
                        className="form-check-input form-check-input_fill "
                        type="checkbox"
                        name="color"
                        checked={filter.color_ids.includes(item.color_id)}
                        onChange={() => {
                          toggleInFilter("color_ids", item.color_id);
                        }}
                        id={`color${item.color_id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`color${item.color_id}`}
                      >
                        {item.color_name}
                      </label>
                    </div>
                    <p className="m-0"> ({item.total_product})</p>
                  </div>
                );
              })}
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Size"}>
            {filterData &&
              filterData["size"].map((item, i) => {
                return (
                  <div
                    className="d-flex form-check justify-content-between my-2"
                    key={i}
                  >
                    <div>
                      <input
                        className="form-check-input form-check-input_fill "
                        type="checkbox"
                        name="size"
                        checked={filter.size_ids.includes(item.size_id)}
                        onChange={() => {
                          toggleInFilter("size_ids", item.size_id);
                        }}
                        id={`size${item.size_id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`size${item.size_id}`}
                      >
                        {item.size_name}
                      </label>
                    </div>
                    <p className="m-0">({item.total_product})</p>
                  </div>
                );
              })}
          </AccordionList>

          <AccordionList title={"Price"}>
            <Box sx={{ width: "auto" }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={priceRange}
                min={0}
                step={10}
                max={filterData && filterData.priceRange.max}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className="gclass-text-dark"
              />
            </Box>
            <div className="price-range__info d-flex align-items-center mt-2">
              <div className="me-auto">
                <span className="text-secondary gclass-text">Min Price: </span>
                <span className="price-range__min gclass-text-primary">
                  {priceRange[0]}
                </span>
              </div>
              <div>
                <span className="text-secondary gclass-text">Max Price: </span>
                <span className="price-range__max gclass-text-primary">
                  {priceRange[1]}
                </span>
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
          <AccordionList title={"Product Categories"} defaultActive>
            {filterData &&
              filterData["category"].map((item, i) => {
                return (
                  <div
                    className="d-flex form-check justify-content-between my-2"
                    key={i}
                  >
                    <div>
                      <input
                        className="form-check-input form-check-input_fill "
                        type="checkbox"
                        name="cateogry"
                        checked={filterCategory.includes(item.pc_id)}
                        id={`category${item.pc_id}`}
                        onChange={() => {
                          toggleInFilter("category", item.pc_id);
                        }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`category${item.pc_id}`}
                      >
                        {item.category_name}
                      </label>
                    </div>
                    <p className="m-0"> ({item.total_product})</p>
                  </div>
                );
              })}
          </AccordionList>
          {/* /.accordion-item */}
          <AccordionList title={"Color"}>
            {filterData &&
              filterData["color"].map((item, i) => {
                return (
                  <div
                    className="d-flex form-check justify-content-between my-2"
                    key={i}
                  >
                    <div>
                      <input
                        className="form-check-input form-check-input_fill "
                        type="checkbox"
                        name="color"
                        checked={filter.color_ids.includes(item.color_id)}
                        onChange={() => {
                          toggleInFilter("color_ids", item.color_id);
                        }}
                        id={`color${item.color_id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`color${item.color_id}`}
                      >
                        {item.color_name}
                      </label>
                    </div>
                    {/* <p className="m-0"> ({item.total_product})</p> */}
                  </div>
                );
              })}
          </AccordionList>
          {/* /.accordion */}
          <AccordionList title={"Size"}>
            {filterData &&
              filterData["size"].map((item, i) => {
                return (
                  <div
                    className="d-flex form-check justify-content-between my-2"
                    key={i}
                  >
                    <div>
                      <input
                        className="form-check-input form-check-input_fill "
                        type="checkbox"
                        name="size"
                        checked={filter.size_ids.includes(item.size_id)}
                        onChange={() => {
                          toggleInFilter("size_ids", item.size_id);
                        }}
                        id={`size${item.size_id}`}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`size${item.size_id}`}
                      >
                        {item.size_name}
                      </label>
                    </div>
                    {/* <p className="m-0">({item.total_product})</p> */}
                  </div>
                );
              })}
          </AccordionList>

          {/* /.accordion */}
          <AccordionList title={"Price"}>
            <Box sx={{ width: "auto" }}>
              <Slider
                getAriaLabel={() => "Price range"}
                value={priceRange}
                min={0}
                step={10}
                max={filterData && filterData.priceRange.max}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                className="gclass-text-dark"
              />
            </Box>
            <div className="price-range__info d-flex align-items-center mt-2">
              <div className="me-auto">
                <span className="text-secondary gclass-text">Min Price: </span>
                <span className="price-range__min gclass-text-primary">
                  {priceRange[0]}
                </span>
              </div>
              <div>
                <span className="text-secondary gclass-text">Max Price: </span>
                <span className="price-range__max gclass-text-primary">
                  {priceRange[1]}
                </span>
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

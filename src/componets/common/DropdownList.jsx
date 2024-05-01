import React, { useState } from "react";
import IconPack from "./IconPack";
import { Link, useNavigate } from "react-router-dom";

const DropdownList = ({ list, setShowMobiNav, title }) => {
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();

  const toggleList = () => {
    setShowList(!showList);
  };
  const navigateFunc = (endpoint) => {
    navigate(endpoint);
    setShowMobiNav(false);
  };

  return (
    <>
      <li className="navigation__item">
        <a
          className="navigation__link js-nav-right d-flex align-items-center"
          onClick={toggleList}
        >
          {title}
          <div className="ms-auto" width={7} height={11}>
            <IconPack icon={"downarrow"} />
          </div>
        </a>
        <div className="sub-menu  top-0 start-100 w-100 ">
          {showList ? (
            <ul className="list-unstyled">
              {list.map((item, i) => {
                return (
                  <li className="sub-menu__item" key={i}>
                    <a
                      className="menu-link menu-link_us-s"
                      onClick={() => {
                        navigateFunc(item.link);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            ""
          )}
          {/* /.box-menu */}
        </div>
      </li>
    </>
  );
};

export default DropdownList;

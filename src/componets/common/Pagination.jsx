import React from "react";

const Pagination = ({ currentPage, TotalPage, onPageChange }) => {
  const PageArray = [];
  for (let i = 1; i <= TotalPage; i++) {
    PageArray.push(i);
  }
  let showPageArray;
  if (PageArray.length > 5) {
    showPageArray = PageArray.slice(
      currentPage + 4 < PageArray.length
        ? currentPage - 1
        : PageArray.length - 5,
      currentPage + 4 > PageArray.length ? PageArray.length : currentPage + 4
    );
  } else {
    showPageArray = PageArray;
  }
  return (
    <>
      <nav
        className="shop-pages d-flex justify-content-between mt-3"
        aria-label="Page navigation"
      >
        <a
          onClick={() => {
            onPageChange(currentPage !== 1 ? currentPage - 1 : currentPage);
          }}
          className="btn-link d-inline-flex align-items-center cursor_pointer"
        >
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ChevronLeftIcon"
          >
            <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
          <span className="fw-medium gclass-text-dark">PREV</span>
        </a>
        <ul className="pagination mb-0 ">
          {showPageArray.map((number, i) => {
            return (
              <li className="page-item " key={i}>
                <a
                  className={`btn-link cursor_pointer px-1 mx-2 gclass-text-dark ${
                    number == currentPage && "btn-link_active"
                  }`}
                  onClick={() => {
                    onPageChange(number);
                  }}
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          onClick={() => {
            onPageChange(
              currentPage === PageArray.length ? currentPage : currentPage + 1
            );
          }}
          className="btn-link d-inline-flex align-items-center cursor_pointer"
        >
          <span className="fw-medium me-1 gclass-text-dark">NEXT</span>
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowRightIcon"
          >
            <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
          </svg>
        </a>
      </nav>
    </>
  );
};

export default Pagination;

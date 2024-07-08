import React, { Suspense, useContext, useEffect, useState } from "react";
import IconPack from "../common/IconPack";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import SideBar from "../common/SideBar";
import Pagination from "../common/Pagination";
import { useParams } from "react-router-dom";
import { GlobalContext, ProductContext } from "../../context/CreateContext";
import { useDebounce } from "../../hooks/useDebounce";
import Loading from "../common/Loading";
// import { GlobalContext } from "../../context/CreateContext";

const ProductList = () => {
  const { getFilter, filterCategory , filterData , toggleInFilter, currentPage , handlePageChange , products,totalPages , getProducts , filter} = useContext(ProductContext);
  const [showSidebar, setShowSidebar] = useState(false);
  const {loading } = useContext(GlobalContext)
  // const [currentPage, setCurrentPage] = useState(2);
  const debouncedSearchTerm = useDebounce(filterCategory, 1500);
  const debouncedFilterTerm = useDebounce(filter, 1000);

  useEffect(() => {
    if (filterCategory.length) {
      getFilter({ pc_ids: filterCategory });
    } else {
      getFilter();
    }
  }, [debouncedSearchTerm]);

  useEffect(()=>{
    getProducts()
  } , [ currentPage , debouncedFilterTerm ])

  const handleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  // const handlePageChange = (newPage) => {
  //   setCurrentPage(newPage);
  // };
  return (
    <>
      <main className="padding-top">
        <section className="shop-main container d-flex pt-4 pt-xl-5">
          <Filter />
          {/* /.shop-sidebar */}
          <div className="shop-list flex-grow-1">
            {/* /.slideshow */}
            <div className="d-flex justify-content-between mb-4 pb-md-2">
              <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
                <a
                  href="#"
                  className="menu-link menu-link_us-s text-uppercase fw-medium gclass-text-dark"
                >
                  Home
                </a>
                <span className="breadcrumb-separator menu-link fw-medium ps-1 pe-1 gclass-text-dark">
                  /
                </span>
                <a
                  href="#"
                  className="menu-link menu-link_us-s text-uppercase fw-medium gclass-text-dark"
                >
                  The Shop
                </a>
              </div>
              {/* /.breadcrumb */}
              <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
                <select
                  className="shop-acs__select gclass-bg-body w-auto border-0 py-0 order-1 order-md-0"
                  aria-label="Sort Items"
               
                    onChange={(e)=>{
                      toggleInFilter("sorting" , e.target.value)
                    }}
                >
                  {
                    filterData && filterData['sorting'].map((item , i )=>{
                      return (
                        
                        <option key={i} value={item.key}>{item.name}</option>
                    
                      )
                    })
                  }
                 
                </select>
                {/* <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0" /> */}
                {/* /.col-size */}
                <div className="shop-filter d-flex align-items-center order-0 order-md-3 d-lg-none">
                  <button
                    className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
                    data-aside="shopFilter"
                    onClick={handleSidebar}
                  >
                    <IconPack icon={"filter"} />
                    <span className="text-uppercase fw-medium d-inline-block align-middle">
                      Filter
                    </span>
                  </button>
                </div>
                {/* /.col-size d-flex align-items-center ms-auto ms-md-3 */}
              </div>
              {/* /.shop-acs */}
            </div>
            {/* /.d-flex justify-content-between */}
            <div
              className="products-grid row row-cols-2 row-cols-md-3"
              id="products-grid"
            >
              
              {/* <Suspense fallback={<h1>Loading...</h1>}> */}

              {
               loading["GET_PRODUCT"] ? <Loading type={"progress"}/> : (products && products.length ? (
                  products.map((item , i )=>{
                    return(
                      
                      <SingleProduct data={item} key={i}/>
                    )
                  })
                ) : (<h5 className="fw-semi-bold m-0 p-0 text-center w-100 mt-5">No product</h5>))
              }
              {/* </Suspense> */}
            </div>
            
            {/* /.products-grid row */}
            {
             !loading["GET_PRODUCT"] && totalPages > 1 ? (

                <Pagination
                  currentPage={currentPage}
                  TotalPage={totalPages}
                  onPageChange={handlePageChange}
                />
              ) : ""
            }
          </div>
        </section>
        <div className="mb-5 pb-xl-5"></div>
        {/* /.shop-main container */}
      </main>

      <SideBar isOpen={showSidebar} className={"aside-filters"}>
        <div className="aside-header d-flex d-lg-none align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">Filter By</h3>
          <button
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
            onClick={handleSidebar}
          />
        </div>
        <Filter type={"sidebar"} />
      </SideBar>
    </>
  );
};

export default ProductList;

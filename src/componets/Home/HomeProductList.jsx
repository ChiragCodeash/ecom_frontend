import React, { useContext, useEffect, useState } from "react";
import SingleProduct from "../Product_list/SingleProduct";
import { ProductContext } from "../../context/CreateContext";
import useOnScreen from "../../hooks/useOnScreen";
import { Link } from "react-router-dom";

const ProductList = ({ title, functionToRun }) => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [hasFetched, setHasFetched] = useState(false);
  const [data, setData] = useState();

  const fatchData = async () => {
    const result = await functionToRun();
    if (result.status) {
      setData(result.result.data);
    } else {
      toast.error(result.message);
    }
  };
  useEffect(() => {
    if (isVisible && !hasFetched) {
      fatchData();
      setHasFetched(true);
    }
  }, [isVisible, hasFetched]);
  return (
    <React.Fragment>
      <div className="mb-1 pb-4 mb-xl-5 pb-xl-5" />
      <section className="products-carousel container " ref={ref}>
        <h2 className="section-title text-uppercase text-center mb-1 mb-md-3 pb-xl-2 mb-xl-4 gclass-text">
          {title}
        </h2>

        <div className="tab-content pt-2" id="collections-tab-content">
          <div
            className="tab-pane fade active show"
            id="collections-tab-1"
            role="tabpanel"
            aria-labelledby="collections-tab-1-trigger"
          >
            <div className="row">
              {data &&
                data.map((item, i) => {
                  return (
                    <SingleProduct
                      data={item}
                      key={i}
                      className={"col-6 col-md-4 col-lg-3"}
                    />
                  );
                })}
            </div>
            {/* /.row */}
            <div className="text-center mt-2">
              <Link to={"/shop"} className="btn-link btn-link_lg default-underline text-uppercase fw-medium gclass-text">
                See All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ProductList;

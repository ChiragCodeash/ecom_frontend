import React, { useContext, useEffect, useState } from "react";
import { AuthContext, GlobalContext, ProductContext } from "../CreateContext";
import toast from "react-hot-toast";

const ProductState = ({ children }) => {
  const url = `${import.meta.env.VITE_APP_SERVER_URL}/product`;
  const { loading, setLoading } = useContext(GlobalContext);

  const [filterData, setFilterData] = useState();
  const [priceRange, setPriceRange] = useState([100, 999]);
  const [filterCategory, setFilterCategory] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const [filter, setFilter] = useState({
    color_ids: [],
    size_ids: [],
    price_range: [],
    query: "",
  });

  useEffect(() => {
    setLoading({...loading , GET_PRODUCT : true})
    setCurrentPage(1);
    setFilter({ ...filter, price_range: [priceRange[0], priceRange[1]] });
  }, [priceRange]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const toggleInFilter = (key, value) => {
    setLoading({...loading , GET_PRODUCT : true})
    if (key === "category") {
      setCurrentPage(1);
      setFilterCategory((prevItems) => {
        if (prevItems.includes(value)) {
          return prevItems.filter((i) => i !== value);
        } else {
          return [...prevItems, value];
        }
      });
      setFilter({ ...filter, color_ids: [], size_ids: [], query: "" });
    } else if (key === "sorting") {
      setFilter({ ...filter, sorting: value });
    } else {
      setCurrentPage(1);
      setFilter((prevFilter) => {
        const newArray = prevFilter[key].includes(value)
          ? prevFilter[key].filter((i) => i !== value)
          : [...prevFilter[key], value];

        return {
          ...prevFilter,
          [key]: newArray,
        };
      });
    }
  };

  const getFilter = async (data) => {
    try {
      const res = await fetch(`${url}/getfilter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.status) {
        setFilterData(result.data);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      return false;
    }
  };

  const getProducts = async () => {
    setLoading({ ...loading, GET_PRODUCT: true });
    try {
      const res = await fetch(`${url}/getproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: currentPage,
          ...filter,
          pc_ids: filterCategory,
        }),
      });
      const result = await res.json();
      if (result.status) {
        setProducts(result.result.data);
        setTotalPages(result.result.totalPage);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      return false;
    }
    setLoading({ ...loading, GET_PRODUCT: false });
  };

  const DefaultObj = {
    getFilter,
    filterData,
    filter,
    setFilter,
    toggleInFilter,
    priceRange,
    setPriceRange,
    filterCategory,
    getProducts,
    currentPage,
    handlePageChange,
    products,
    totalPages,
  };
  return (
    <ProductContext.Provider value={DefaultObj}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;

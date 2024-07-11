import React, { useContext, useEffect, useState } from "react";
import { AuthContext, GlobalContext, ProductContext } from "../CreateContext";
import toast from "react-hot-toast";

const ProductState = ({ children }) => {
  const url = `${import.meta.env.VITE_APP_SERVER_URL}/product`;
  const { loading, setLoading } = useContext(GlobalContext);

  const [filterData, setFilterData] = useState();
  const [priceRange, setPriceRange] = useState([10, 999]);
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
    setLoading({ ...loading, GET_PRODUCT: true });
    setCurrentPage(1);
    setFilter({ ...filter, price_range: [priceRange[0], priceRange[1]] });
    // setFilter({ ...filter, price_range: [filterData?.priceRange?.min , filterData?.priceRange?.max] });
  }, [priceRange]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  // ?
  const toggleInFilter = (key, value) => {
    setLoading({ ...loading, GET_PRODUCT: true });
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
        priceRange[0] = result.data.priceRange.min;
        priceRange[1] = result.data.priceRange.max;
        // setPriceRange([result.data.priceRange.min , result.data.priceRange.max])
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

  const getSingleProducts = async (id) => {
    // TODO: If user is Login then Send Token in Heades , This is Pending
    setLoading({ ...loading, GET_SINGLE_PRODUCT: true });
    try {
      const res = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setLoading({ ...loading, GET_SINGLE_PRODUCT: false });
      return result;
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      setLoading({ ...loading, GET_SINGLE_PRODUCT: false });
      return false;
    }
  };

  const getNewProducts = async () => {
    // setLoading({ ...loading, GET_PRODUCT: true });
    try {
      const res = await fetch(`${url}/getproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: 1,
          color_ids: [],
          pc_ids: [],
          size_ids: [],
          price_range: [],
          per_page: 8,
          sorting : "DATE_DESC"
        }),
      });
      const result = await res.json();
      return result;
      // if (result.status) {
      //   setProducts(result.result.data);
      //   setTotalPages(result.result.totalPage);
      // } else {
      //   toast.error(result.message);
      // }
    } catch (error) {
      console.log("Error fetching data:", error.message);
      toast.error("Internal server error");
      return false;
    }
    // setLoading({ ...loading, GET_PRODUCT: false });
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
    getSingleProducts,getNewProducts
  };
  return (
    <ProductContext.Provider value={DefaultObj}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;

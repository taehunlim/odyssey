import React, { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Filter from "./Filter";
import Table from "./Table";
import Pagination from "./Pagination";

import { getCookie, setCookie, trimText } from "./utills";

import { columns } from "./columns";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searched, setSearched] = useState({
    select: {
      name: "",
      value: "",
    },
    input: "",
  });

  const { select, input } = searched;

  const { data, isError, error } = useQuery(["products", { limit: "100" }]);

  const productData = useMemo(() => {
    const products = data?.products.map((product) => {
      const { id, title, brand, description, price, rating, stock } = product;
      return {
        id,
        title,
        brand,
        description: trimText(description, 40),
        price,
        rating,
        stock,
      };
    });

    const filtered = products?.filter((product) => {
      if (select.value) {
        return product[select.value].includes(input);
      }
      const all = Object.values(product).find((value) => {
        return typeof value === "string" && value.includes(input);
      });

      return all;
    });

    return filtered;
  }, [data?.products, input, select.value]);

  const slicedData = useMemo(() => {
    if (productData) {
      setCookie("searched", JSON.stringify(searched), 0.1);
      setCookie("page", page, 0.1);
      setCookie("limit", limit, 0.1);
    }

    return productData?.slice((page - 1) * limit, page * limit);
  }, [productData, page, input, select.value, limit]);

  useEffect(() => {
    const searchedCookie = JSON.parse(getCookie("searched"));
    const pageCookie = JSON.parse(getCookie("page"));
    const limitCookie = JSON.parse(getCookie("limit"));

    if (searchedCookie) {
      setSearched(searchedCookie);
    }

    if (pageCookie) {
      setPage(pageCookie);
    }

    if (limitCookie) {
      setLimit(limitCookie);
    }

    setIsLoading(false);
  }, []);

  function handleSubmit(e) {
    const { select: s, input: i } = e;
    setSearched(e);

    if (s.value !== select.value || i !== input) {
      setPage(1);
    }
  }

  function handleLimit(e) {
    setLimit(e);
    setPage(1);
  }

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div className="app">
      {!isLoading && <Filter onSearch={handleSubmit} defaultValue={searched} />}
      {productData && <Table columns={columns} data={slicedData} />}
      <Pagination
        total={productData?.length}
        limit={limit}
        setLimit={handleLimit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;

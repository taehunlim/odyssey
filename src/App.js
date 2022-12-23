import React, { useMemo, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import Filter from "./Filter";
import Table from "./Table";

import { getCookie, setCookie, trimText } from "./utills";

import { columns } from "./columns";

function App() {
  const [isLoading, setIsLoading] = useState(true);
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

    if (data) {
      setCookie("searched", JSON.stringify(searched), 1);
    }

    return filtered;
  }, [data?.products, input, select.value]);

  useEffect(() => {
    const searched = JSON.parse(getCookie("searched"));
    if (searched) {
      setSearched(searched);
    }
    setIsLoading(false);
  }, []);

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div style={{ backgroundColor: "#f8f8f8", height: "100vh" }}>
      {!isLoading && <Filter onSearch={setSearched} defaultValue={searched} />}
      {productData && <Table columns={columns} data={productData} />}
    </div>
  );
}

export default App;

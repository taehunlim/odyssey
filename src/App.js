import React, { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Filter from "./Filter";
import Table from "./Table";

import { columns } from "./columns";

function App() {
  const [searched, setSearched] = useState({
    select: "",
    input: "",
  });

  const { data, isError, error } = useQuery(["products", { limit: "100" }]);

  const productData = useMemo(() => {
    const products = data?.products.map((product) => {
      const { id, title, brand, description, price, rating, stock } = product;
      return {
        id,
        title,
        brand,
        description,
        price,
        rating,
        stock,
      };
    });

    return products?.filter((product) => {
      if (searched.select) {
        return product[searched.select].includes(searched.input);
      }
      const all = Object.values(product).find((value) => {
        return typeof value === "string" && value.includes(searched.input);
      });

      return all;
    });
  }, [data?.products, searched.input, searched.select]);

  if (isError) return <span>Error: {error.message}</span>;

  return (
    <div style={{ backgroundColor: "#f8f8f8", height: "100vh" }}>
      <Filter onSearch={setSearched} />
      {productData && <Table columns={columns} data={productData} />}
    </div>
  );
}

export default App;

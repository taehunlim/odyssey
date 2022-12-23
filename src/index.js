import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

const defaultQueryFn = async ({ queryKey }) => {
  const url = `https://dummyjson.com/${queryKey[0]}`;
  const params = queryKey[1];
  try {
    const { data } = await axios.get(url, {
      params,
    });
    return data;
  } catch (err) {
    if (err instanceof Error) {
      return err.message;
    }
  }
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

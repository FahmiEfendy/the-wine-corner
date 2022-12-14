import React from "react";
import { Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";

import { productListDummy } from "./seeder/productListDummy";
import {
  Footer,
  Home,
  ProductDetail,
  ProductList,
  UrlNotFound,
  ProductSearch,
  Topbar,
} from "./components";

function App() {
  return (
    <>
      <Topbar />
      <Container maxWidth="xl" sx={{ minHeight: "37.1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {productListDummy.map((data, index) => {
            const productType = data.data.map((data) => data.productType);
            const productPath = data.data.map((data) => data.productPath);

            return (
              <Route
                key={index}
                path={`/${productPath}`}
                element={
                  <ProductList
                    productType={productType}
                    productPath={productPath}
                  />
                }
              />
            );
          })}
          <Route
            path="/:productPath/:productName"
            element={<ProductDetail />}
          />
          <Route path="/search/:productSearch" element={<ProductSearch />} />
          <Route path="*" element={<UrlNotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;

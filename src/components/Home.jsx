import React from "react";

import { productListDummy } from "../seeder/productListDummy";
import { ProductList } from "./";

const Home = () => {
  return (
    <>
      {productListDummy.map((data, index) => {
        const productCategory = data.productCategory;
        const productType = data.data.map((data) => data.productType);
        const productPath = data.data.map((data) => data.productPath);
        const allProducts = productListDummy
          .find((data) => data.productCategory === productCategory)
          .data.flatMap((data) => data.data);

        return (
          <ProductList
            key={index}
            productCategory={productCategory}
            productType={productType}
            productPath={productPath}
            eightItem={allProducts.length >= 8 && true}
            viewAllButton={allProducts.length >= 8 && true}
          />
        );
      })}
    </>
  );
};

export default Home;

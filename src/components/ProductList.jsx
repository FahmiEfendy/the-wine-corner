import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

import { productListDummy } from "../seeder/productListDummy";
import { Product } from "./";

const ProductList = (props) => {
  const {
    eightItem = false,
    // recommendation = false,
    viewAllButton = false,
    productType,
    productPath,
    productCategory,
    // hideProduct,
  } = props;

  const matches = useMediaQuery("(max-width:768px)");

  // const selectedProductType = productList.find(
  //   (data) => data.productType === productType
  // );

  // const recommendationProduct = selectedProductType.data.filter(
  //   (data) => data.no !== hideProduct
  // );

  const allProducts = productListDummy
    .find((data) => data.productCategory === productCategory)
    .data.flatMap((data) => data.data);

  const formattedProducts = (data) => {
    if (eightItem) {
      return data.slice(0, 8);
    } else if (!eightItem) {
      return data;
    }
  };

  return (
    <>
      <Box style={{ display: "flex", marginBottom: ".5rem" }}>
        <Typography
          variant={matches ? "body1" : "h5"}
          style={{ fontWeight: "700", marginTop: "4rem" }}
        >
          {productCategory}
        </Typography>
        {viewAllButton && (
          <Link
            to={`/${productCategory}`}
            style={{
              textDecoration: "none",
              color: "#000000",
              marginLeft: "auto",
              alignSelf: "flex-end",
            }}
          >
            <Button
              size="small"
              style={{
                fontSize: matches ? "10px" : "12px",
                border: "1px solid #AF1515",
                height: matches ? "1.5rem" : "2rem",
                width: matches ? "3rem" : "5rem",
                color: "#AF1515",
                textTransform: "capitalize",
              }}
            >
              View All
            </Button>
          </Link>
        )}
      </Box>
      <Grid container spacing={2}>
        {formattedProducts(allProducts).map((data) => {
          return (
            <Grid key={data.no} item md={3} xs={6}>
              <Product
                productId={data.no}
                productImage={data.productImage}
                productName={data.productName}
                productPrice={data.productPrice}
                productType={productType}
                productPath={productPath}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductList;

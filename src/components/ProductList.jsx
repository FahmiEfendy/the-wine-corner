import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

import { productListDummy } from "../seeder/productListDummy";
import { Product } from "./";

const ProductList = (props) => {
  const {
    // fourItem = false,
    // recommendation = false,
    viewAllButton = false,
    // productType,
    // productPath,
    // hideProduct,
  } = props;

  const matches = useMediaQuery("(max-width:768px)");

  // const selectedProductType = productList.find(
  //   (data) => data.productType === productType
  // );

  // const recommendationProduct = selectedProductType.data.filter(
  //   (data) => data.no !== hideProduct
  // );

  // const products = (recommendationProduct) => {
  //   if (fourItem) {
  //     return recommendationProduct.slice(0, 4);
  //   } else if (!fourItem) {
  //     return recommendationProduct;
  //   }
  // };

  return (
    <>
      {productListDummy.map((data, index) => {
        const productCategory = data.productCategory;
        return (
          <Fragment key={index}>
            <Box style={{ display: "flex", marginBottom: ".5rem" }}>
              <Typography
                variant={matches ? "body1" : "h5"}
                style={{ fontWeight: "700", marginTop: "2.5rem" }}
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
              {data.data.map((data) => {
                const productType = data.productType;
                const productPath = data.productPath;
                return data.data.map((data) => {
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
                });
              })}
            </Grid>
          </Fragment>
        );
      })}
    </>
  );
};

export default ProductList;

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const EmptyCartPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        p: 3,
      }}
      aria-label="Empty cart page"
    >
      <ShoppingCartIcon
        sx={{
          fontSize: "6rem",
          color: "#70CB97",
          mb: 3,
        }}
        aria-label="Empty shopping cart"
        aria-hidden="false"
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#19485D",
        }}
        aria-label="Your cart is empty"
      >
        Your Cart is Empty
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#5a6e7a",
          mb: 4,
          maxWidth: "500px",
        }}
        aria-label="No items have been added to your cart yet"
      >
        Looks like you haven't added anything to your cart yet. Explore our amazing collection of
        products and find something you love!
      </Typography>

      <Button
        component={Link}
        to="/services"
        variant="contained"
        sx={{
          background: "#70CB97",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          p: "10px 30px",
          borderRadius: "25px",
          textTransform: "none",
          "&:hover": {
            background: "#5cb67f",
          },
        }}
        aria-label="Explore products to add to your cart"
      >
        Explore Products
      </Button>
    </Container>
  );
};

export default EmptyCartPage;
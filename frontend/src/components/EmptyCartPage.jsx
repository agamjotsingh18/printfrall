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
    >
      {/* Empty Cart Icon */}
      <ShoppingCartIcon
        sx={{
          fontSize: "6rem",
          color: "#70CB97", // brand green
          mb: 3,
        }}
      />

      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#19485D", // deep teal
        }}
      >
        Your Cart is Empty
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          color: "#5a6e7a", // muted neutral
          mb: 4,
          maxWidth: "500px",
        }}
      >
        Looks like you haven't added anything to your cart yet. Explore our amazing collection of
        products and find something you love!
      </Typography>

      {/* Explore Products Button */}
      <Button
        component={Link}
        to="/services"
        variant="contained"
        sx={{
          background: "#70CB97", // brand green
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          p: "10px 30px",
          borderRadius: "25px",
          textTransform: "none",
          "&:hover": {
            background: "#5cb67f", // darker green
          },
        }}
      >
        Explore Products
      </Button>
    </Container>
  );
};

export default EmptyCartPage;
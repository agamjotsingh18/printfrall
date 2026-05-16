import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => {
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
      {/* 404 Icon */}
      <ErrorOutlineIcon
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
        404 - Page Not Found
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
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </Typography>

      {/* Go Home Button */}
      <Button
        component={Link}
        to="/"
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
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
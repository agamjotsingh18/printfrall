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
      aria-label="404 Page Not Found"
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: "6rem",
          color: "#70CB97",
          mb: 3,
        }}
        aria-label="Error icon"
        aria-hidden="false"
      />

      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "#19485D",
        }}
        aria-label="Page not found error"
      >
        404 - Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{
          color: "#5a6e7a",
          mb: 4,
          maxWidth: "500px",
        }}
        aria-label="The page you are looking for does not exist or has been moved"
      >
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </Typography>

      <Button
        component={Link}
        to="/"
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
        aria-label="Go back to home page"
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default NotFoundPage;
import React from "react";
import { Link } from "react-router-dom";
import { Cancel } from "@mui/icons-material";
import { Box, Typography, Button, Paper } from "@mui/material";

const PaymentCancel = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #f9f9f9, #eef3f7)",
        padding: "20px",
      }}
      aria-label="Payment cancellation page"
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 500,
          width: "100%",
          padding: "40px 30px",
          textAlign: "center",
          borderRadius: "20px",
          backgroundColor: "#ffffff",
        }}
        aria-label="Payment cancellation confirmation"
      >
        <Cancel
          sx={{
            fontSize: 80,
            color: "#e74c3c",
            marginBottom: 2,
          }}
          aria-label="Payment cancelled icon"
          aria-hidden="false"
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#19485D",
            marginBottom: 2,
          }}
          aria-label="Payment has been cancelled"
        >
          Payment Cancelled
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#5a6e7a",
            marginBottom: 4,
          }}
          aria-label="No charges have been made. Please try again."
        >
          Your payment was cancelled. No charges have been made. Please try again.
        </Typography>
        <Button
          component={Link}
          to="/cart"
          variant="contained"
          sx={{
            backgroundColor: "#70CB97",
            color: "#fff",
            padding: "10px 30px",
            borderRadius: "40px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#5cb67f",
            },
          }}
          aria-label="Return to shopping cart page"
        >
          Return to Cart
        </Button>
      </Paper>
    </Box>
  );
};

export default PaymentCancel;
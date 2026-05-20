import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { Box, Typography, Button, Paper } from "@mui/material";

const PaymentSuccess = () => {
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
      aria-label="Payment success page"
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
        aria-label="Payment success confirmation"
      >
        <CheckCircle
          sx={{
            fontSize: 80,
            color: "#70CB97",
            marginBottom: 2,
          }}
          aria-label="Payment successful icon"
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
          aria-label="Your payment was successful"
        >
          Payment Successful!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#5a6e7a",
            marginBottom: 4,
          }}
          aria-label="Thank you for your purchase. Your order has been placed successfully."
        >
          Thank you for your purchase. Your order has been placed successfully.
        </Typography>
        <Button
          component={Link}
          to="/"
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
          aria-label="Continue shopping on home page"
        >
          Continue Shopping
        </Button>
      </Paper>
    </Box>
  );
};

export default PaymentSuccess;
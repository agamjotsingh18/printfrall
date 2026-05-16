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
      >
        <CheckCircle
          sx={{
            fontSize: 80,
            color: "#70CB97", // brand green
            marginBottom: 2,
          }}
        />
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            color: "#19485D", // deep teal
            marginBottom: 2,
          }}
        >
          Payment Successful!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#5a6e7a", // muted neutral
            marginBottom: 4,
          }}
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
        >
          Continue Shopping
        </Button>
      </Paper>
    </Box>
  );
};

export default PaymentSuccess;
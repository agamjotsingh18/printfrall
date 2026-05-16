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
        <Cancel
          sx={{
            fontSize: 80,
            color: "#e74c3c", // red for cancellation (kept as standard action color)
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
          Payment Cancelled
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#5a6e7a", // muted neutral
            marginBottom: 4,
          }}
        >
          Your payment was cancelled. No charges have been made. Please try again.
        </Typography>
        <Button
          component={Link}
          to="/cart"
          variant="contained"
          sx={{
            backgroundColor: "#70CB97", // brand green
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
          Return to Cart
        </Button>
      </Paper>
    </Box>
  );
};

export default PaymentCancel;
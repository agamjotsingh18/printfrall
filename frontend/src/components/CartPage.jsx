
import React from "react";
// import { Link } from "react-router-dom";
import { Box, Typography, Button, IconButton, Paper, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCartPage from "./EmptyCartPage"; 

const CartPage = ({ cartItems, removeFromCart }) => {
  // Function to generate WhatsApp message
  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map(
        (item) =>
          `${item.name} - ₹${item.price} x ${item.quantity}%0a` +
          `Size: ${item.selectedSize}, Material: ${item.selectedMaterial}`
      )
      .join("%0a"); // %0a is URL-encoded for a new line
    const message = `Hi, I would like to order:%0a${itemsText}`;
    return `https://wa.me/919319042075?text=${message}`;
  };

  return (
    <Container sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>
      {cartItems.length === 0 ? (
        <EmptyCartPage />
      ) : (
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}>
            Your Cart
          </Typography>

          {/* Cart Items */}
          {cartItems.map((item, index) => (
            <Paper
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
                p: 3,
                mb: 3,
                borderRadius: "10px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100px", height: "100px", borderRadius: "10px" }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
                <Typography variant="body1" sx={{ color: "text.secondary" }}>
                  ₹{item.price} x {item.quantity}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Size: {item.selectedSize}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Material: {item.selectedMaterial}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Total: ₹{item.price * item.quantity}
                </Typography>
              </Box>
              <IconButton
                onClick={() =>
                  removeFromCart(item.name, item.selectedSize, item.selectedMaterial)
                }
              >
                <CloseIcon />
              </IconButton>
            </Paper>
          ))}

          {/* Total Price */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mr: 2 }}>
              Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </Typography>
          </Box>

          {/* Checkout Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                background: "#ff6600",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                "&:hover": { background: "#ff8c42" },
              }}
              component="a"
              href={generateWhatsAppMessage()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default CartPage;

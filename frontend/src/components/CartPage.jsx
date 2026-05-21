import React from "react";
import { Box, Typography, Button, IconButton, Paper, Container } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCartPage from "./EmptyCartPage"; 

const CartPage = ({ cartItems, removeFromCart }) => {

  const getDisplaySize = (item) => {
    return item.selectedSize || item.selectedCapacity || "Standard";
  };
  
  const getDisplayMaterial = (item) => {
    return item.selectedMaterial || item.selectedColor || item.selectedMethod || item.selectedFinish || "Standard";
  };

  const getDisplayFinish = (item) => {
    return item.selectedFinish || null;
  };

  const getUnitPrice = (item) => {
    if (item.quantity > 1 && item.price && item.quantity) {
      return item.price / item.quantity;
    }
    return item.price;
  };

  const generateWhatsAppMessage = () => {
    const itemsText = cartItems
      .map((item) => {
        const size = getDisplaySize(item);
        const material = getDisplayMaterial(item);
        const finish = getDisplayFinish(item);
        const unitPrice = getUnitPrice(item);
        let details = `Size: ${size}, Material: ${material}`;
        if (finish) details += `, Finish: ${finish}`;
        return `${item.name} - ₹${unitPrice} x ${item.quantity} = ₹${item.price}%0a${details}`;
      })
      .join("%0a");
    const message = `Hi, I would like to order:%0a${itemsText}`;
    return `https://wa.me/919319042075?text=${message}`;
  };

  return (
    <Container sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }} aria-label="Shopping cart">
      {cartItems.length === 0 ? (
        <EmptyCartPage />
      ) : (
        <Box>
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: "bold", 
              mb: 4, 
              textAlign: "center",
              color: "#19485D"
            }}
            aria-label="Your shopping cart"
          >
            Your Cart
          </Typography>

          {cartItems.map((item, index) => {
            const finish = getDisplayFinish(item);
            const unitPrice = getUnitPrice(item);
            return (
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
                role="article"
                aria-label={`Cart item: ${item.name}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "100px", borderRadius: "10px", objectFit: "cover" }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#19485D" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#5a6e7a" }}>
                    ₹{unitPrice} x {item.quantity} = ₹{item.price}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                    Size: {getDisplaySize(item)}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                    Material: {getDisplayMaterial(item)}
                  </Typography>
                  {finish && (
                    <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                      Finish: {finish}
                    </Typography>
                  )}
                </Box>
                <IconButton
                  aria-label={`Remove ${item.name} from cart`}
                  onClick={() =>
                    removeFromCart(
                      item.name,
                      item.selectedSize ?? null,        
                      item.selectedMaterial ?? item.selectedColor ?? item.selectedMethod ?? item.selectedFinish ?? null
                    )
                  }
                  sx={{ color: "#e74c3c" }} 
                >
                  <CloseIcon aria-hidden="true" />
                </IconButton>
              </Paper>
            );
          })}

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mr: 2, color: "#19485D" }}>
              Total: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button
              variant="contained"
              sx={{
                background: "#70CB97",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                "&:hover": { background: "#5cb67f" },
              }}
              component="a"
              href={generateWhatsAppMessage()} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Proceed to checkout on WhatsApp"
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
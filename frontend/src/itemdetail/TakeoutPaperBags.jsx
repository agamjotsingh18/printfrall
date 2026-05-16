import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Container,
  Grid,
  Snackbar,
  IconButton,
  Chip,
  Divider,
} from "@mui/material";
import {
  AddShoppingCart,
  Close,
  Inventory,
  WorkspacePremium,
  AutoAwesome,
  Restaurant,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Import your actual takeout bag images here – replace with real variants if available
import takeoutPaperBagImg from "../assets/takeout-paper-bag.png";
import takeoutPaperBagImg2 from "../assets/takeout-paper-bag-1.png";
import takeoutPaperBagImg3 from "../assets/takeout-paper-bag-2.png";
import takeoutPaperBagImg4 from "../assets/takeout-paper-bag-3.png";
import takeoutPaperBagImg5 from "../assets/takeout-paper-bag-4.png";
import takeoutPaperBagImg6 from "../assets/takeout-paper-bag-5.png";
import takeoutPaperBagImg7 from "../assets/takeout-paper-bag-6.png";

const TakeoutPaperBags = ({ addToCart }) => {
  // Price per unit for each size/style
  const priceMapping = {
    "Small (8x4x10 inch)": 12,
    "Large (11x6x15 inch)": 18,
    "V-Bottom (Standard)": 8,
  };

  const availableSizes = ["Small (8x4x10 inch)", "Large (11x6x15 inch)", "V-Bottom (Standard)"];
  const defaultSize = "Small (8x4x10 inch)";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [mainImage, setMainImage] = useState(takeoutPaperBagImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedSize];
  const moq = 100; // Minimum order quantity
  const totalPrice = unitPrice * moq;

  const productDetails = {
    name: "Custom Takeout Paper Bags",
    description:
      "Durable, food-grade takeout paper bags designed for restaurants, cafes, and delivery services. Made from heavy-duty Kraft paper with reinforced bottoms, these bags provide a sustainable and professional way to deliver your culinary brand to customers' doorsteps.",
    features: [
      "Material: 100-140 GSM Food Grade Virgin Kraft Paper",
      "Style: Flat bottom for easy loading or V-bottom for snacks",
      "Print: Eco-solvent non-toxic inks (Safe for food contact)",
      "Handles: Twisted paper or flat tape handles for secure grip",
      "Durability: Reinforced seams to prevent leaks and tears",
      "Customization: High-definition digital logo printing",
      "MOQ: Bulk ordering available starting from 100 units",
    ],
    tags: ["Food Grade", "Reinforced Bottom", "Eco-Friendly"],
  };

  const thumbnailImages = [
    takeoutPaperBagImg,
    takeoutPaperBagImg2,
    takeoutPaperBagImg3,
    takeoutPaperBagImg4,
    takeoutPaperBagImg5,
    takeoutPaperBagImg6,
    takeoutPaperBagImg7,
  ];

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: mainImage,
      description: productDetails.description,
      selectedSize: `${moq} units (${selectedSize})`,
      selectedMaterial: "Premium Kraft Paper",
      price: totalPrice,
      quantity: moq,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container
      sx={{
        py: 6,
        maxWidth: 1200,
        margin: "40px auto 0 auto",
        px: { xs: 2, md: 3 },
      }}
    >
      <Grid container spacing={5}>
        {/* Left Side: Gallery */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              bgcolor: "#fff",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 10,
                display: "flex",
                gap: 1,
              }}
            >
              <Chip
                label="FOOD GRADE"
                size="small"
                icon={<Restaurant />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label="ECO-FRIENDLY"
                size="small"
                icon={<AutoAwesome />}
                sx={{
                  bgcolor: "#70CB97",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
            </Box>

            <Zoom>
              <img
                src={mainImage}
                alt={productDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  height: "450px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            {/* Thumbnails */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {thumbnailImages.map((image, index) => (
                <Paper
                  key={index}
                  onClick={() => setMainImage(image)}
                  sx={{
                    p: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    border:
                      mainImage === image ? "2px solid #70CB97" : "1px solid #e0e7ed",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Details */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "#19485D",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {productDetails.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{totalPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (₹{unitPrice}/bag • Pack of {moq})
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#5a6e7a", display: "block", mb: 2 }}>
            Minimum order: {moq} units
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Size / Style Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Bag Size / Style:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableSizes.map((size) => (
              <Paper
                key={size}
                onClick={() => setSelectedSize(size)}
                sx={{
                  p: 1.5,
                  px: 3,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedSize === size ? "#70CB97" : "#fff",
                  color: selectedSize === size ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedSize === size ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {size}
              </Paper>
            ))}
          </Box>

          {/* Specifications Panel (matches GiftBoxes style) */}
          <Paper
            sx={{
              p: 3,
              bgcolor: "#f8fafc",
              mb: 4,
              borderRadius: "16px",
              border: "1px solid #e0e7ed",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
              Build Quality:
            </Typography>
            {productDetails.features.map((feature, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Inventory sx={{ fontSize: 16, color: "#70CB97" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                  {feature}
                </Typography>
              </Box>
            ))}
          </Paper>

          <Button
            variant="contained"
            fullWidth
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#70CB97",
              color: "white",
              fontWeight: 700,
              fontSize: "1rem",
              py: 1.8,
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(112, 203, 151, 0.4)",
              },
            }}
            onClick={handleAddToCart}
          >
            Add Pack of {moq} to Cart – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Powered by PrintfrAll High-Resolution Branding Solutions.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`✓ Pack of ${moq} Takeout Bags added to cart!`}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#19485D",
            borderRadius: "40px",
          },
        }}
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default TakeoutPaperBags;
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
  Tooltip,
} from "@mui/material";
import { AddShoppingCart, Close, Print, InfoOutlined } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN MUG IMAGE ==========
import mainImg from "../assets/mug.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/mug.png";
import img3 from "../assets/mug-1.png";
import img4 from "../assets/mug-2.png";
import img5 from "../assets/mug-3.png";
import img6 from "../assets/mug-4.png";

const StandardMug = ({ addToCart }) => {
  // Printing Methods with price per unit
  const printingMethods = [
    {
      type: "Sublimation",
      price: 150,
      info: "Best for full-color photos on ceramic mugs. Permanent and vibrant.",
    },
    {
      type: "UV Printing",
      price: 250,
      info: "Premium multi-color printing. High durability and 3D texture feel.",
    },
    {
      type: "Screen Printing",
      price: 120,
      info: "Economical for bulk corporate orders (Single/Dual color).",
    },
    {
      type: "Laser Engraving",
      price: 300,
      info: "Permanent marking. Best for metal surfaces and premium logos.",
    },
  ];

  const [selectedMethod, setSelectedMethod] = useState(printingMethods[0]);
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const mugDetails = {
    name: "Custom Standard Mug",
    image: mainImg,
    description:
      "High-quality personalized mugs crafted using India's latest printing technologies. Choose the perfect method for your brand or gift.",
    features: [
      "Microwave and Dishwasher safe",
      "High-grade gloss finish",
      "Eco-friendly inks used",
      "Available for single unit or bulk",
    ],
    extraImages: [img2, img3, img4, img5, img6],
    printingMethods: printingMethods,
  };

  const handleAddToCart = () => {
    const item = {
      ...mugDetails,
      selectedMaterial: selectedMethod.type,   // ✅ FIX: ensures cart displays the printing method
      selectedSize: "Standard (11 oz)",        // optional but keeps cart consistent
      price: selectedMethod.price,
      quantity: 1,
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
      <Grid container spacing={4}>
        {/* Image Gallery */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              bgcolor: "#fff",
            }}
          >
            <Zoom>
              <img
                src={mainImage}
                alt={mugDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            {/* Thumbnail Gallery */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {mugDetails.extraImages.map((img, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setMainImage(img)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      mainImage === img ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={img}
                    alt={`view ${idx + 1}`}
                    style={{
                      width: "90px",
                      height: "90px",
                      borderRadius: "8px",
                      objectFit: "cover",
                    }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            {mugDetails.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: "#70CB97", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            ₹{selectedMethod.price}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}
          >
            {mugDetails.description}
          </Typography>

          {/* Printing Method Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Select Printing Technology:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {printingMethods.map((method) => (
              <Box key={method.type} sx={{ position: "relative" }}>
                <Chip
                  label={method.type}
                  onClick={() => setSelectedMethod(method)}
                  icon={<Print />}
                  sx={{
                    p: 1.5,
                    px: 2,
                    borderRadius: "40px",
                    fontWeight: 600,
                    cursor: "pointer",
                    backgroundColor:
                      selectedMethod.type === method.type ? "#70CB97" : "#fff",
                    color:
                      selectedMethod.type === method.type ? "#fff" : "#19485D",
                    border: "1px solid #e0e7ed",
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor:
                        selectedMethod.type === method.type ? "#5cb67f" : "#f0f9f3",
                      transform: "translateY(-2px)",
                    },
                  }}
                />
                <Tooltip title={method.info} arrow placement="top">
                  <InfoOutlined
                    sx={{
                      fontSize: 16,
                      ml: 0.5,
                      verticalAlign: "middle",
                      cursor: "pointer",
                      color: "#5a6e7a",
                    }}
                  />
                </Tooltip>
              </Box>
            ))}
          </Box>

          {/* Highlights */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Highlights:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 4, listStyleType: "none", p: 0 }}>
            {mugDetails.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", color: "#5a6e7a" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#70CB97",
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                  ></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </Box>

          {/* Add to Cart Button */}
          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#70CB97",
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "0.9rem", md: "1rem" },
              padding: { xs: "12px 20px", md: "12px 28px" },
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", md: "auto" },
              transition: "all 0.2s ease",
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`✓ ${selectedMethod.type} Printing selected - Item added to cart!`}
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

export default StandardMug;
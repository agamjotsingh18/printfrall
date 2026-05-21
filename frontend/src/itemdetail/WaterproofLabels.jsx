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
  WaterDrop,
  WorkspacePremium,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const WaterproofLabels = ({ addToCart }) => {
  // Price mapping for durable waterproof range
  const priceMapping = {
    "White Waterproof ": 150,
    "Clear Waterproof ": 180,
    "Heavy-Duty Industrial": 210,
  };

  const shapes = ["Circle", "Oval", "Square", "Rectangle", "Rounded Corner"];

  const productDetails = {
    name: "Durable Waterproof Labels",
    description:
      "Keep your packaging looking sharp, even in rough conditions. Our Waterproof Labels are engineered for both indoor and outdoor usage, ensuring your branding remains intact against moisture, oil, and weather. Available in White or Clear backgrounds to suit any aesthetic.",
    features: [
      "Material: High-grade (Waterproof & Tear-resistant)",
      "Background Options: Choose from White or transparent Clear base",
      "Usage: Fully suitable for both Outdoor and Indoor environments",
      "Shapes: Available in 5 precision-cut standard shapes",
      "Design Note: For Clear Labels, white areas in designs remain transparent",
      "Durability: Resistant to moisture, smudging, and fading",
      "Low MOQ: Professional durability starting from just 50 labels",
    ],
    images: [
      "water-proof-labels.png",
      "water-proof-labels-1.png",
      "water-proof-labels-2.png",
      "water-proof-labels-3.png"
    ],
    tags: ["Material", "Weatherproof", "Clear Option Available"],
  };

  const [selectedMaterial, setSelectedMaterial] = useState("White Waterproof ");
  const [selectedShape, setSelectedShape] = useState("Circle");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedMaterial];
  const moq = 50;
  const totalPrice = unitPrice * moq;

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
      description: productDetails.description,
      features: productDetails.features,
      tags: productDetails.tags,
      selectedMaterial,
      selectedShape,
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
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <Chip
                label="WEATHERPROOF"
                size="small"
                icon={<WaterDrop fontSize="small" />}
                sx={{
                  backgroundColor: "rgba(112, 203, 151, 0.1)",
                  color: "#70CB97",
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
              />
              <Chip
                label="MATERIAL"
                size="small"
                icon={<WorkspacePremium fontSize="small" />}
                sx={{
                  backgroundColor: "rgba(112, 203, 151, 0.1)",
                  color: "#70CB97",
                  fontWeight: "bold",
                  borderRadius: 2,
                }}
              />
            </Box>

            <Zoom>
              <img
                src={getCdnImage(productDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${productDetails.name} primary view`}
                width="600"
                height="450"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  height: "450px",
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
                scrollbarWidth: "none",
              }}
            >
              {productDetails.images.map((imageName, index) => (
                <Paper
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  sx={{
                    p: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    border:
                      activeImageIndex === index ? "2px solid #70CB97" : "2px solid transparent",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    "&:hover": { border: "2px solid #70CB97" },
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${productDetails.name} thumbnail view ${index + 1}`}
                    width="90"
                    height="90"
                    loading="lazy"
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
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
              (₹{unitPrice}/label • Pack of {moq})
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#5a6e7a", display: "block", mb: 2 }}>
            Minimum order: {moq} units
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Background & Type Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Background & Type:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {Object.keys(priceMapping).map((material) => (
              <Paper
                key={material}
                onClick={() => {
                  setSelectedMaterial(material);
                  setActiveImageIndex(0);
                }}
                sx={{
                  p: 1.5,
                  px: 3,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedMaterial === material ? "#70CB97" : "#fff",
                  color: selectedMaterial === material ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedMaterial === material ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {material}
              </Paper>
            ))}
          </Box>

          {/* Shape Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Choose Shape:
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {shapes.map((shape) => (
              <Paper
                key={shape}
                onClick={() => setSelectedShape(shape)}
                sx={{
                  p: 1,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedShape === shape ? "#70CB97" : "#fff",
                  color: selectedShape === shape ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  fontSize: "0.85rem",
                  "&:hover": {
                    bgcolor: selectedShape === shape ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {shape}
              </Paper>
            ))}
          </Box>

          {/* Specifications Panel */}
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
              Technical Highlights:
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
            * Weatherproof branding solutions powered by PrintfrAll Technology.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`✓ Pack of ${moq} Waterproof Labels added to cart!`}
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

export default WaterproofLabels;
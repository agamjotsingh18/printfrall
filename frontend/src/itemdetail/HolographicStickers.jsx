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
  AutoAwesome,
  WaterDrop,
  PlayCircle,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const HolographicStickers = ({ addToCart }) => {
  // Price mapping for rainbow-effect vinyl range
  const priceMapping = {
    "Standard Holographic": 150,
    "Premium Rainbow Vinyl": 180,
    "Psychedelic Glossy": 200,
  };

  const shapes = [
    "Circle",
    "Oval",
    "Square",
    "Rectangle",
    "Rounded Corner",
    "Custom",
    "Heart",
    "Star",
  ];

  const [selectedMaterial, setSelectedMaterial] = useState("Standard Holographic");
  const [selectedShape, setSelectedShape] = useState("Circle");
  const [mainMedia, setMainMedia] = useState({ type: "image", index: 0 });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedMaterial];
  const moq = 50;
  const totalPrice = unitPrice * moq;

  const productDetails = {
    name: "Psychedelic Holographic Stickers",
    description:
      "Transform the ordinary into extraordinary with our dazzling Holographic Stickers! Printed on shimmering rainbow-effect vinyl, these stickers create a mesmerizing psychedelic look that instantly grabs attention. Enhanced with a glossy lamination, they offer a polished texture that is as durable as it is beautiful.",
    features: [
      "Dazzling holographic effect for maximum visual appeal",
      "Printed on high-quality, rainbow-effect shimmering vinyl",
      "Glossy lamination for a smooth, polished, and premium feel",
      "Waterproof and resilient against everyday wear and tear",
      "Available in 8 different shapes for seamless customization",
      "Ideal for laptops, water bottles, branding, and personal style",
      "Order as low as 50 units for premium shimmering statements",
    ],
    images: [
      "holographic-stickers.png",
      "holographic-stickers-1.png",
      "holographic-stickers-2.png",
      "holographic-stickers-3.png"
    ],
    video: "holographic-stickers-demo.mp4",
    tags: ["Rainbow Effect", "Waterproof", "Glossy Finish"],
  };

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
      description: productDetails.description,
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
                label="HOLOGRAPHIC"
                size="small"
                icon={<AutoAwesome />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label="WATERPROOF"
                size="small"
                icon={<WaterDrop />}
                sx={{
                  bgcolor: "#70CB97",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
            </Box>

            {mainMedia.type === "image" ? (
              <Zoom>
                <img
                  src={getCdnImage(productDetails.images[mainMedia.index], { width: 600, height: 450 })}
                  alt={`${productDetails.name} view ${mainMedia.index + 1}`}
                  width="600"
                  height="450"
                  style={{
                    width: "100%",
                    borderRadius: "12px",
                    cursor: "zoom-in",
                    height: "450px",
                    objectFit: "contain",
                  }}
                />
              </Zoom>
            ) : (
              <video
                src={getCdnImage(productDetails.video)}
                controls
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  height: "450px",
                  backgroundColor: "#000",
                  objectFit: "contain",
                }}
              />
            )}

            {/* Thumbnails */}
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
              {/* Video Thumbnail */}
              <Paper
                onClick={() => setMainMedia({ type: "video", index: -1 })}
                sx={{
                  p: 1,
                  borderRadius: "12px",
                  cursor: "pointer",
                  border:
                    mainMedia.type === "video"
                      ? "2px solid #70CB97"
                      : "1px solid #e0e7ed",
                  position: "relative",
                  transition: "all 0.2s",
                  "&:hover": { transform: "translateY(-2px)" },
                }}
              >
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "#f8fafc",
                    borderRadius: "8px",
                  }}
                >
                  <PlayCircle sx={{ fontSize: 40, color: "#70CB97" }} />
                </Box>
              </Paper>

              {/* Image Thumbnails */}
              {productDetails.images.map((imageName, index) => (
                <Paper
                  key={index}
                  onClick={() => setMainMedia({ type: "image", index: index })}
                  sx={{
                    p: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    border:
                      mainMedia.type === "image" && mainMedia.index === index
                        ? "2px solid #70CB97"
                        : "1px solid #e0e7ed",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 80, height: 80 })}
                    alt={`${productDetails.name} thumbnail view ${index + 1}`}
                    width="80"
                    height="80"
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
              (₹{unitPrice}/sticker • Pack of {moq})
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#5a6e7a", display: "block", mb: 2 }}>
            Minimum order: {moq} units
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Material Finish Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Material Finish:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {Object.keys(priceMapping).map((material) => (
              <Paper
                key={material}
                onClick={() => setSelectedMaterial(material)}
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
            Choose Shape (8 Options):
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
              Key Features:
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
            * Shimmering statements powered by PrintfrAll Vibrant Individuality.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`✓ Pack of ${moq} Holographic Stickers added to cart!`}
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

export default HolographicStickers;
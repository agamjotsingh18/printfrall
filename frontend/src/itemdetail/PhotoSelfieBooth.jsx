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
  WorkspacePremium,
  Straighten,
  Inventory,
  AutoAwesome,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PhotoSelfieBooth = ({ addToCart }) => {
  // Size options (Rectangle & Square)
  const sizeOptions = [
    { id: "18x18", label: "18 x 18 in", shape: "Square", price: 850 },
    { id: "24x18", label: "24 x 18 in", shape: "Rectangle", price: 1150 },
    { id: "24x24", label: "24 x 24 in", shape: "Square", price: 1450 },
    { id: "30x24", label: "30 x 24 in", shape: "Rectangle", price: 1850 },
    { id: "30x30", label: "30 x 30 in", shape: "Square", price: 2150 },
    { id: "36x24", label: "36 x 24 in", shape: "Rectangle", price: 2450 },
    { id: "36x36", label: "36 x 36 in", shape: "Square", price: 2950 },
  ];

  const productDetails = {
    name: "Custom Selfie Photo Booth",
    description:
      "Personalize your event with a custom Selfie Photo Booth. Crafted from premium 5mm White Sun Board, these frames are a durable and fun addition to weddings, graduations, and corporate parties. High‑quality single‑sided printing ensures your brand or event details pop in every photo.",
    features: [
      "Made of sturdy 5mm white sun board – durable yet lightweight",
      "Single‑sided high‑definition UV printing for vibrant graphics",
      "Perfect for weddings, birthdays, graduations, and corporate events",
      "Easy to assemble and designed for all‑day guest handling",
      "Custom cut to any shape (square or rectangle) as per your size",
      "Weather‑resistant finish suitable for indoor/outdoor use",
      "Comes with a free easel stand for tabletop display",
    ],
    images: [
      "photo-selfie-booth.png",
      "photo-selfie-booth-1.png",
      "photo-selfie-booth-2.png",
      "photo-selfie-booth-3.png",
      "photo-selfie-booth-4.png"
    ],
    tags: ["5MM SUN BOARD", "UV PRINT"]
  };

  // State
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1]); // Default 24x18
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const totalPrice = selectedSize.price;

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      size: selectedSize.label,
      shape: selectedSize.shape,
      material: "5mm White Sun Board",
      price: totalPrice,
      quantity: 1,
      image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
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
                label="5MM SUN BOARD"
                size="small"
                icon={<WorkspacePremium />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label="UV PRINT"
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
                      activeImageIndex === index ? "2px solid #70CB97" : "1px solid #e0e7ed",
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
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Customization */}
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
            Personalized Selfie Booth
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{totalPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (per booth)
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            Personalize your event with a custom Selfie Photo Booth. Crafted from premium{" "}
            <strong>5mm White Sun Board</strong>, these frames are a durable and fun addition to
            weddings, graduations, and corporate parties. High‑quality single‑sided printing
            ensures your brand or event details pop in every photo.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Size & Shape Selection (pill‑shaped grid) */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Straighten fontSize="small" /> Select Size & Shape
          </Typography>

          <Grid container spacing={1.5} sx={{ mb: 4 }}>
            {sizeOptions.map((size) => (
              <Grid item xs={6} sm={4} key={size.id}>
                <Paper
                  onClick={() => setSelectedSize(size)}
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    borderRadius: "40px",
                    cursor: "pointer",
                    bgcolor: selectedSize.id === size.id ? "#70CB97" : "#fff",
                    color: selectedSize.id === size.id ? "#fff" : "#19485D",
                    border: "1px solid #e0e7ed",
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: selectedSize.id === size.id ? "#5cb67f" : "#f0f9f3",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {size.label}
                  </Typography>
                  <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                    {size.shape}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

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
            Add to Event Selection – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Custom shapes and sizes available for bulk orders. Contact us for event packages.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Selfie Booth added to cart!"
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

export default PhotoSelfieBooth;
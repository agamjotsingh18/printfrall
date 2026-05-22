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
} from "@mui/material";
import { AddShoppingCart, Close } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Banners = ({ addToCart }) => {
  // Price mapping for each size and material combination
  const priceMapping = {
    "2x2 ft": {
      "Non-Tearable (Eco-solvent)": 80,
      "Economy Fabric (160 gsm)": 100,
      "Standard Fabric (220 gsm)": 120,
      "Premium Fabric (450 gsm)": 150,
    },
    "3x3 ft": {
      "Non-Tearable (Eco-solvent)": 150,
      "Economy Fabric (160 gsm)": 180,
      "Standard Fabric (220 gsm)": 220,
      "Premium Fabric (450 gsm)": 270,
    },
    "4x4 ft": {
      "Non-Tearable (Eco-solvent)": 220,
      "Economy Fabric (160 gsm)": 260,
      "Standard Fabric (220 gsm)": 320,
      "Premium Fabric (450 gsm)": 390,
    },
    "2x4 ft": {
      "Non-Tearable (Eco-solvent)": 100,
      "Economy Fabric (160 gsm)": 130,
      "Standard Fabric (220 gsm)": 160,
      "Premium Fabric (450 gsm)": 200,
    },
    "3x6 ft": {
      "Non-Tearable (Eco-solvent)": 200,
      "Economy Fabric (160 gsm)": 250,
      "Standard Fabric (220 gsm)": 300,
      "Premium Fabric (450 gsm)": 370,
    },
    "4x8 ft": {
      "Non-Tearable (Eco-solvent)": 300,
      "Economy Fabric (160 gsm)": 370,
      "Standard Fabric (220 gsm)": 450,
      "Premium Fabric (450 gsm)": 550,
    },
  };

  const defaultSize = "3x6 ft";
  const defaultMaterial = "Non-Tearable (Eco-solvent)";
  const defaultFinish = "Trimmed, without Eyelets";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [selectedFinish, setSelectedFinish] = useState(defaultFinish);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const bannerDetails = {
    name: "Banners",
    description:
      "High-quality banners for all your marketing needs. Perfect for events, promotions, and branding. Available in various sizes, materials, and finish options.",
    features: [
      "Durable and weather-resistant materials",
      "Vibrant and long-lasting prints (Eco-solvent)",
      "Custom sizes and designs",
      "Quick turnaround time",
    ],
    sizes: ["2x2 ft", "3x3 ft", "4x4 ft", "2x4 ft", "3x6 ft", "4x8 ft"],
    materials: [
      "Non-Tearable (Eco-solvent)",
      "Economy Fabric (160 gsm)",
      "Standard Fabric (220 gsm)",
      "Premium Fabric (450 gsm)",
    ],
    finishes: ["Trimmed, without Eyelets", "Eyelets in corners"],
    images: [
      "banner-1-hung.png",
      "banner-2-standee.png",
      "banner-3-real.png",
      "banner-4.png",
      "banner-5.png",
      "banner-6.png",
    ],
    finishImages: {
      "Trimmed, without Eyelets": "finish-trimmed.png",
      "Eyelets in corners": "finish-eyelets.png",
    },
    tags: ["Durable", "Weather-Resistant", "Eco-Solvent"],
  };

  const price = priceMapping[selectedSize][selectedMaterial];

  const handleAddToCart = () => {
    const item = {
      name: bannerDetails.name,
      image: getCdnImage(bannerDetails.images[0], { width: 150, height: 150 }),
      description: bannerDetails.description,
      selectedSize,
      selectedMaterial,
      selectedFinish,
      price,
      quantity: 1,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto", px: { xs: 2, md: 3 } }}>
      <Grid container spacing={4}>
        {/* Image Gallery */}
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
            <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
              {bannerDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  sx={{ backgroundColor: "#19485D", color: "white", fontWeight: "bold" }}
                />
              ))}
            </Box>

            <Zoom>
              <img
                src={getCdnImage(bannerDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${bannerDetails.name} primary view`}
                width="600"
                height="450"
                fetchpriority="high"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

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
              {bannerDetails.images.map((imageName, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      activeImageIndex === idx ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${bannerDetails.name} thumbnail view ${idx + 1}`}
                    width="90"
                    height="90"
                    loading="lazy"
                    style={{ width: "90px", height: "90px", borderRadius: "8px", objectFit: "cover" }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            {bannerDetails.name}
          </Typography>

          <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" } }}>
            ₹{price}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {bannerDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Features:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {bannerDetails.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", color: "#5a6e7a" }}>
                  <span style={{ display: "inline-block", width: "6px", height: "6px", backgroundColor: "#70CB97", borderRadius: "50%", marginRight: "8px" }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </Box>

          {/* Sizes */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {bannerDetails.sizes.map((size, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedSize(size)}
                sx={{
                  p: 1.5,
                  px: 2.5,
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

          {/* Materials */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Available Materials (Eco-solvent printing):
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {bannerDetails.materials.map((material, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedMaterial(material)}
                sx={{
                  p: 1.5,
                  px: 2.5,
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

          {/* Finish Options */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Finish Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {bannerDetails.finishes.map((finish, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedFinish(finish)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedFinish === finish ? "#70CB97" : "#fff",
                  color: selectedFinish === finish ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedFinish === finish ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {finish}
              </Paper>
            ))}
          </Box>

          {/* Visual explanation of finishes */}
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            {bannerDetails.finishes.map((finish, idx) => (
              <Box key={idx} sx={{ textAlign: "center", width: "100px" }}>
                <img
                  src={getCdnImage(bannerDetails.finishImages[finish], { width: 80, height: 80 })}
                  alt={finish}
                  width="80"
                  height="80"
                  loading="lazy"
                  style={{ width: "80px", height: "80px", borderRadius: "8px", objectFit: "cover", border: "1px solid #e0e7ed" }}
                />
                <Typography variant="caption" sx={{ display: "block", mt: 0.5, color: "#5a6e7a" }}>
                  {finish}
                </Typography>
              </Box>
            ))}
          </Box>

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

          <Typography variant="body2" sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", fontWeight: 500 }}>
            * Eco-solvent printing ensures vibrant, weather-resistant output.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Banner added to cart!"
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

export default Banners;
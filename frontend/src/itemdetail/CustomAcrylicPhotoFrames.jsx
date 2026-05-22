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
  DesktopWindows,
  Wallpaper,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const CustomAcrylicPhotoFrames = ({ addToCart }) => {
  // Frame types (material + tech)
  const frameTypes = [
    {
      id: "standard",
      name: "Standard Acrylic (3mm)",
      back: "White Back",
      tech: "Indigo Printed",
      priceMultiplier: 1,
    },
    {
      id: "premium",
      name: "Premium Acrylic (5mm)",
      back: "Black Back",
      tech: "UV Printed",
      priceMultiplier: 1.3,
    },
  ];

  // Size options
  const sizeCategories = [
    { label: '10x8" (Rectangular)', type: "Desktop/Wall", basePrice: 693 },
    { label: '8x8" (Square)', type: "Desktop/Wall", basePrice: 608 },
    { label: '12x18" (Portrait)', type: "Wall Only", basePrice: 1462 },
    { label: '24x36" (Poster)', type: "Wall Only", basePrice: 4903 },
  ];

  // Product features (for specifications panel)
  const productFeatures = [
    "Crystal‑clear acrylic with premium protective bushes at bottom",
    "High‑strength metal screw stand for desktop support",
    "UV or Indigo vibrant printing – fade‑resistant",
    "Available in 3mm (Standard) or 5mm (Premium) thickness",
    "White back (Standard) or Black back (Premium) options",
    "Ready for desktop display or wall mounting",
    "Ideal for home, office, galleries, and special events",
  ];

  // State
  const [selectedType, setSelectedType] = useState(frameTypes[0]);
  const [selectedSize, setSelectedSize] = useState(sizeCategories[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Price calculation
  const totalPrice = Math.round(selectedSize.basePrice * selectedType.priceMultiplier);

  const images = [
    "custom-acrylic-photo-frame.png",
    "custom-acrylic-photo-frame-1.png",
    "custom-acrylic-photo-frame-2.png",
    "custom-acrylic-photo-frame-3.png",
    "custom-acrylic-photo-frame-4.png",
    "custom-acrylic-photo-frame-5.png"
  ];

  const handleAddToCart = () => {
    const item = {
      name: `Acrylic Frame: ${selectedType.name}`,
      size: selectedSize.label,
      spec: `${selectedType.tech} | ${selectedType.back}`,
      price: totalPrice,
      quantity: 1,
      image: getCdnImage(images[0], { width: 150, height: 150 }),
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
                label={selectedType.tech}
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
                label={selectedSize.type}
                size="small"
                icon={selectedSize.type.includes("Desktop") ? <DesktopWindows /> : <Wallpaper />}
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
                src={getCdnImage(images[activeImageIndex], { width: 600, height: 450 })}
                alt="Acrylic Frame Preview"
                width="600"
                height="450"
                fetchpriority="high"
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
                scrollbarWidth: "none",
              }}
            >
              {images.map((imageName, index) => (
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
                    alt={`View variant ${index + 1}`}
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
            Personalized Acrylic Photo Frames
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{totalPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (per frame)
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            Showcase your favorite memories with crystal-clear clarity. Our frames include specialized{" "}
            <strong>protective bushes</strong> at the bottom and high-strength{" "}
            <strong>metal screw stands</strong> for desktop support.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Material Thickness & Tech */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Material Thickness & Tech
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {frameTypes.map((type) => (
              <Paper
                key={type.id}
                onClick={() => setSelectedType(type)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedType.id === type.id ? "#70CB97" : "#fff",
                  color: selectedType.id === type.id ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedType.id === type.id ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {type.name}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {type.back}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Size Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Size Category
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {sizeCategories.map((size) => (
              <Paper
                key={size.label}
                onClick={() => setSelectedSize(size)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedSize.label === size.label ? "#70CB97" : "#fff",
                  color: selectedSize.label === size.label ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedSize.label === size.label ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {size.label}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {size.type}
                </Typography>
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
              Frame Construction:
            </Typography>
            {productFeatures.map((feature, i) => (
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
            Add to Selection – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Custom sizes available for bulk orders. Contact support for corporate gifting.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Acrylic Frame added to cart!"
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

export default CustomAcrylicPhotoFrames;
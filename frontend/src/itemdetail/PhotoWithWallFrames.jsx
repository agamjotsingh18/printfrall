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
  Wallpaper,
  WorkspacePremium,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PhotoWithWallFrames = ({ addToCart }) => {
  // Frame styles (10 options)
  const frameStyles = [
    "Decorative Gold Edge",
    "Distressed Maze Texture",
    "Sleek Black Minimal",
    "Matte Black Classic",
    "Modern Stripe Pattern",
    "Bronze with Gold Trim",
    "Geometric Zigzag Finish",
    "Crackle Effect Bronze",
    "Heavy Chevron Impression",
    "Coarse Brushed Texture",
  ];

  // Size options with pricing
  const sizeOptions = [
    { label: "9 x 12 in", price: 850 },
    { label: "12 x 12 in", price: 950 },
    { label: "14 x 18 in", price: 1250 },
    { label: "12 x 18 in", price: 1150 },
    { label: "18 x 24 in", price: 1850 },
    { label: "27 x 36 in", price: 3250 },
  ];

  // Print materials
  const printMaterials = [
    { name: "300 GSM Premium Canvas", desc: "Rich texture, vivid art gallery feel" },
    { name: "Standard 3M Vinyl", desc: "High resolution, includes lamination" },
  ];

  const laminationOptions = ["Matte", "Glossy"];

  const productDetails = {
    name: "Wall Photo Frames",
    description:
      "Turn any wall into a stunning gallery. These frames are delivered without acrylic or glass to preserve the rich, natural texture of the premium canvas or vinyl finish.",
    features: [
      "Gallery‑quality wall frames for professional display",
      "Premium MDF wood base with durable synthetic frame",
      "No acrylic/glass – preserves natural canvas/vinyl texture",
      "Available in 10+ elegant finishes (gold, bronze, black, etc.)",
      "Ready to hang – includes wall mounting hardware",
      "Archival‑grade materials resist fading and moisture",
      "Perfect for home, office galleries, exhibitions",
    ],
    images: [
      "photo-with-wall-frame.png",
      "photo-with-wall-frame-1.png",
      "photo-with-wall-frame-2.png",
      "photo-with-wall-frame-3.png",
      "photo-with-wall-frame-4.png"
    ],
  };

  // State
  const [selectedSize, setSelectedSize] = useState(sizeOptions[2]); // 14x18 default
  const [selectedStyle, setSelectedStyle] = useState(frameStyles[3]); // Matte Black
  const [selectedMaterial, setSelectedMaterial] = useState(printMaterials[0]); // Canvas
  const [selectedLamination, setSelectedLamination] = useState("Matte");
  const [orientation, setOrientation] = useState("Portrait");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const totalPrice = selectedSize.price;

  const handleAddToCart = () => {
    const item = {
      name: "Premium Wall Photo Frame",
      size: selectedSize.label,
      style: selectedStyle,
      material: selectedMaterial.name,
      lamination: selectedMaterial.name.includes("Vinyl") ? selectedLamination : "N/A",
      orientation: orientation,
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
                label="GALLERY QUALITY"
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
                label="WALL MOUNT"
                size="small"
                icon={<Wallpaper />}
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
                  transition: "0.3s",
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
            {productDetails.name}
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
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Orientation & Size in a grid (two columns) */}
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {/* Orientation */}
            <Grid item xs={6}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1rem" }}
              >
                Orientation
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {["Portrait", "Landscape"].map((o) => (
                  <Paper
                    key={o}
                    onClick={() => setOrientation(o)}
                    sx={{
                      flex: 1,
                      p: 1,
                      textAlign: "center",
                      borderRadius: "40px",
                      fontWeight: 600,
                      cursor: "pointer",
                      bgcolor: orientation === o ? "#70CB97" : "#fff",
                      color: orientation === o ? "#fff" : "#19485D",
                      border: "1px solid #e0e7ed",
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: orientation === o ? "#5cb67f" : "#f0f9f3",
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {o}
                  </Paper>
                ))}
              </Box>
            </Grid>

            {/* Size Selection */}
            <Grid item xs={6}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1rem" }}
              >
                Select Size
              </Typography>
              <Box sx={{ display: "flex", gap: 1, maxHeight: "160px", overflowY: "auto", pr: 0.5, scrollbarWidth: "thin" }}>
                {sizeOptions.map((size) => (
                  <Paper
                    key={size.label}
                    onClick={() => setSelectedSize(size)}
                    sx={{
                      p: 1,
                      px: 2,
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
                    {size.label}
                  </Paper>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Print Material Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Print Material
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {printMaterials.map((mat) => (
              <Paper
                key={mat.name}
                onClick={() => {
                  setSelectedMaterial(mat);
                  setActiveImageIndex(0);
                }}
                sx={{
                  flex: 1,
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedMaterial.name === mat.name ? "#70CB97" : "#fff",
                  color: selectedMaterial.name === mat.name ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedMaterial.name === mat.name ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {mat.name}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {mat.desc}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Lamination (only for Vinyl) - pill‑shaped chips */}
          {selectedMaterial.name.includes("Vinyl") && (
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1rem" }}
              >
                Lamination Type
              </Typography>
              <Box sx={{ display: "flex", gap: 1.5, flexWrap: "wrap" }}>
                {laminationOptions.map((l) => (
                  <Chip
                    key={l}
                    label={l}
                    onClick={() => setSelectedLamination(l)}
                    sx={{
                      borderRadius: "40px",
                      bgcolor: selectedLamination === l ? "#70CB97" : "#fff",
                      color: selectedLamination === l ? "#fff" : "#19485D",
                      border: "1px solid #e0e7ed",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": {
                        bgcolor: selectedLamination === l ? "#5cb67f" : "#f0f9f3",
                        transform: "translateY(-2px)",
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          {/* Frame Style Selection (pill‑shaped chips) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Frame Finish Style (As shown in the image gallery)
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 4 }}>
            {frameStyles.map((style) => (
              <Chip
                key={style}
                label={style}
                onClick={() => setSelectedStyle(style)}
                sx={{
                  borderRadius: "40px",
                  bgcolor: selectedStyle === style ? "#70CB97" : "#fff",
                  color: selectedStyle === style ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedStyle === style ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              />
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
              Gallery Features:
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
            Add to Gallery Selection – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Custom sizes & bulk orders available. Contact us for corporate art solutions.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Wall frame added to cart!"
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

export default PhotoWithWallFrames;
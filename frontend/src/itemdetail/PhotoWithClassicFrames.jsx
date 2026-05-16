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
  CropRotate,
  WorkspacePremium,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Import your frame images – replace with real variants
import photoWithClassicFrameImg from "../assets/photo-with-classic-frame.png";
import photoWithClassicFrameImg2 from "../assets/photo-with-classic-frame-1.png";
import photoWithClassicFrameImg3 from "../assets/photo-with-classic-frame-2.png";
import photoWithClassicFrameImg4 from "../assets/photo-with-classic-frame-3.png";
import photoWithClassicFrameImg5 from "../assets/photo-with-classic-frame-4.png";

const PhotoWithClassicFrames = ({ addToCart }) => {
  // Frame styles
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

  // Size options
  const sizeOptions = [
    { label: "4 x 6 in", type: "Desktop Only", price: 250 },
    { label: "6 x 8 in", type: "Desktop & Wall", price: 450 },
    { label: "8.3 x 11.7 (A4)", type: "Desktop & Wall", price: 650 },
    { label: "12 x 18 in", type: "Wall Only", price: 950 },
  ];

  // Print materials
  const printMaterials = [
    { name: "Premium Textured Canvas", desc: "Tactile feel, vibrant colors" },
    { name: "Matte Coated Paper", desc: "Smooth, sharp, non-glossy" },
  ];

  // Product features (for specifications panel)
  const productFeatures = [
    "High-quality synthetic frame (0.68\" thickness)",
    "MDF wood base for durability and stability",
    "Clear acrylic protection shields your photo",
    "Available in 10+ elegant frame finishes",
    "Comes with both desktop stand and wall hooks",
    "Premium archival-grade print materials",
    "Ready to hang or display on any surface",
  ];

  // State
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1]);
  const [selectedStyle, setSelectedStyle] = useState(frameStyles[2]); // Sleek Black
  const [selectedMaterial, setSelectedMaterial] = useState(printMaterials[1]);
  const [orientation, setOrientation] = useState("Portrait");
  const [mainImage, setMainImage] = useState(photoWithClassicFrameImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const totalPrice = selectedSize.price;

  const thumbnailImages = [
    photoWithClassicFrameImg,
    photoWithClassicFrameImg2,
    photoWithClassicFrameImg3,
    photoWithClassicFrameImg4,
    photoWithClassicFrameImg5,
  ];

  const handleAddToCart = () => {
    const item = {
      name: "Classic Photo Frame",
      size: selectedSize.label,
      style: selectedStyle,
      material: selectedMaterial.name,
      orientation: orientation,
      price: totalPrice,
      quantity: 1,
      image: mainImage,
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
                label="PREMIUM FRAME"
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
                alt="Classic Frame Preview"
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

        {/* Right Side: Customization Options */}
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
            Classic Photo Frames
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
            Capture and celebrate your cherished moments with our high-quality synthetic frames (0.68"
            thickness). Featuring an MDF wood base and clear acrylic protection.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Orientation Selection (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            <CropRotate sx={{ mr: 1, verticalAlign: "middle" }} /> Select Orientation
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            {["Portrait", "Landscape"].map((o) => (
              <Paper
                key={o}
                onClick={() => setOrientation(o)}
                sx={{
                  flex: 1,
                  p: 1.5,
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

          {/* Frame Size (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Frame Size
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {sizeOptions.map((size) => (
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

          {/* Frame Style (pill‑shaped chips) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Frame Style Finish (As provided in the image gallery)
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

          {/* Print Material (pill‑shaped) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Print Material
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {printMaterials.map((mat) => (
              <Paper
                key={mat.name}
                onClick={() => setSelectedMaterial(mat)}
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
              Frame Specifications:
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
            Add to Cart – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Custom sizes & bulk orders available. Contact support for corporate gifting.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Classic Frame added to cart!"
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

export default PhotoWithClassicFrames;
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
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Import your actual spot UV sticker images – replace with real variants if available
import spotUVStickersImg from "../assets/spot-uv-stickers.png";
import spotUVStickersImg2 from "../assets/spot-uv-stickers-1.png";
import spotUVStickersImg3 from "../assets/spot-uv-stickers-2.png";
import spotUVStickersImg4 from "../assets/spot-uv-stickers-3.png";
// import spotUVStickersImg5 from "../assets/spot-uv-stickers-4.png";

const SpotUVStickers = ({ addToCart }) => {
  // Price mapping for premium spot UV raised range
  const priceMapping = {
    "Classic Spot UV": 180,
    "High-Build Raised UV": 220,
    "Satin Matte with Spot UV": 250,
  };

  const shapes = [
    "Circle",
    "Oval",
    "Square",
    "Rectangle",
    "Rounded Corner",
    "Custom Shape",
    "Hexagon",
  ];

  const [selectedMaterial, setSelectedMaterial] = useState("Classic Spot UV");
  const [selectedShape, setSelectedShape] = useState("Circle");
  const [mainImage, setMainImage] = useState(spotUVStickersImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedMaterial];
  const moq = 50;
  const totalPrice = unitPrice * moq;

  const productDetails = {
    name: "Premium Spot UV Stickers",
    description:
      "Transform your stickers into captivating works of art. Our Spot UV Stickers feature a glossy, raised finish on selected areas of your choice, creating a striking contrast that demands attention. Ideal for accentuating logos or specific text, these premium stickers offer a touch of sophistication that elevates your brand presence.",
    features: [
      "Glossy, raised accents on selected design elements",
      "Available in 7 different shapes for unique branding",
      "Striking contrast between matte base and shiny UV areas",
      "Durable finish suitable for packaging and promotions",
      "High-definition printing with precise UV registration",
      "Fully customizable layout and accent placement",
      "Order from as low as 50 units — professional quality at any scale",
    ],
    tags: ["Raised Accent", "Glossy Contrast", "Sophisticated Finish"],
  };

  const thumbnailImages = [
    spotUVStickersImg,
    spotUVStickersImg2,
    spotUVStickersImg3,
    spotUVStickersImg4,
    // spotUVStickersImg5,
  ];

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: mainImage,
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
                label="SPOT UV"
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
                label="RAISED FINISH"
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

          {/* UV Type Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select UV Type:
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
              Branding Highlights:
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
            * Striking professional finishes powered by PrintfrAll Spot UV Technology.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`✓ Pack of ${moq} Spot UV Stickers added to cart!`}
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

export default SpotUVStickers;
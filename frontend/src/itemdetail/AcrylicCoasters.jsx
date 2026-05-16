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
} from "@mui/material";
import { AddShoppingCart, Close } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== YOUR GENERATED ACRYLIC COASTER IMAGES ==========
import mainImg from "../assets/acrylic-coaster-1-stack.png";
import img2 from "../assets/acrylic-coaster-2-top.png";
import img3 from "../assets/acrylic-coaster-3-tilted.png";
import img4 from "../assets/acrylic-coaster-4-set.png";
import img5 from "../assets/acrylic-coaster-5-closeup.png";
// ============================================================

const AcrylicCoasters = ({ addToCart }) => {
  // Price mapping for each size and material combination
  const priceMapping = {
    "Small (3x3 inches)": { "Clear Acrylic": 100, "Frosted Acrylic": 120, "Colored Acrylic": 150 },
    "Medium (4x4 inches)": { "Clear Acrylic": 150, "Frosted Acrylic": 170, "Colored Acrylic": 200 },
    "Large (5x5 inches)": { "Clear Acrylic": 200, "Frosted Acrylic": 220, "Colored Acrylic": 250 },
  };

  const defaultSize = "Medium (4x4 inches)";
  const defaultMaterial = "Clear Acrylic";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const details = {
    name: "Acrylic Coasters",
    image: mainImg,
    description:
      "Protect your surfaces in style with our premium acrylic coasters. Sleek, modern, and durable, these coasters are perfect for homes, offices, and events.",
    features: [
      "Crystal-clear acrylic material",
      "Lightweight and shatterproof",
      "Custom designs and shapes",
      "Easy to clean and maintain",
    ],
    sizes: ["Small (3x3 inches)", "Medium (4x4 inches)", "Large (5x5 inches)"],
    materials: ["Clear Acrylic", "Frosted Acrylic", "Colored Acrylic"],
    extraImages: [img2, img3, img4, img5],
  };

  const price = priceMapping[selectedSize][selectedMaterial];

  const handleAddToCart = () => {
    const item = {
      ...details,
      selectedSize,
      selectedMaterial,
      price,
      quantity: 1,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto" }}>
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
                alt={details.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "cover",
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
              }}
            >
              {details.extraImages.map((img, idx) => (
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
            sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}
          >
            {details.name}
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#70CB97", fontWeight: "bold", mb: 3 }}
          >
            ₹{price}
          </Typography>
          <Typography
            variant="body1"
            sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}
          >
            {details.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D" }}
          >
            Features:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3 }}>
            {details.features.map((f, i) => (
              <li key={i}>
                <Typography variant="body1" sx={{ color: "#5a6e7a" }}>
                  {f}
                </Typography>
              </li>
            ))}
          </Box>

          {/* Sizes */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D" }}
          >
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {details.sizes.map((size, idx) => (
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
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D" }}
          >
            Available Materials:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {details.materials.map((material, idx) => (
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

          <Button
            variant="contained"
            startIcon={<AddShoppingCart />}
            sx={{
              background: "#70CB97",
              color: "white",
              fontWeight: 700,
              fontSize: "16px",
              padding: "12px 28px",
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", md: "auto" },
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Item added to cart!"
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

export default AcrylicCoasters;
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
  InfoOutlined,
  AutoStories,
  WorkspacePremium,
  Inventory,
  AutoAwesome,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const TriFoldBrochure = ({ addToCart }) => {
  // Size options
  const sizeOptions = [
    { id: "A4", label: "A4 Tri-Fold", open: "24.9 x 11.7 in", moq: 5, price: 150 },
    { id: "A5", label: "A5 Tri-Fold", open: "17.4 x 8.3 in", moq: 5, price: 120 },
    { id: "DL", label: "DL Tri-Fold", open: "11.7 x 8.3 in", moq: 5, price: 90 },
  ];

  const paperCategories = [
    { name: "Standard Papers", desc: "Glossy/Matte finishes" },
    { name: "Eco-Friendly Papers", desc: "Recycled/Sustainable stock" },
    { name: "Premium Textured Papers", desc: "Tactile, high-end feel" },
    { name: "Laminated Brochures", desc: "Added durability and protection" },
  ];

  const productDetails = {
    name: "Professional Tri-Fold Brochures",
    description:
      "Engage, inform, and inspire with compact yet spacious marketing tools. Our tri-folds are the perfect canvas for corporate presentations, restaurant menus, or event details.",
    features: [
      "Full‑colour CMYK digital printing",
      "Tri‑fold format – compact yet spacious when opened",
      "Choice of standard, eco‑friendly, premium textured, or laminated paper",
      "Crisp folding with precise alignment",
      "Ideal for corporate profiles, menus, event programs, and product catalogs",
      "Minimum order: 5 units – perfect for small businesses",
      "Free design check – we ensure correct bleeds and safety margins",
    ],
    images: [
      "tri-fold-brochure.png",
      "tri-fold-brochure-1.png",
      "tri-fold-brochure-2.png",
      "tri-fold-brochure-3.png"
    ],
    tags: ["FULL COLOR"]
  };

  // State
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]); // A4 default
  const [selectedPaper, setSelectedPaper] = useState(paperCategories[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleAddToCart = () => {
    const item = {
      name: "Custom Tri-Fold Brochure",
      size: selectedSize.label,
      openFormat: selectedSize.open,
      paperType: selectedPaper.name,
      price: selectedSize.price,
      quantity: selectedSize.moq,
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
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <Chip
                label={`MOQ: ${selectedSize.moq} UNITS`}
                size="small"
                icon={<WorkspacePremium />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              {productDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={<AutoAwesome />}
                  sx={{
                    backgroundColor: "rgba(112, 203, 151, 0.1)",
                    color: "#70CB97",
                    fontWeight: "bold",
                    borderRadius: 2,
                  }}
                />
              ))}
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
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${productDetails.name} thumbnail view ${index + 1}`}
                    width="90"
                    height="90"
                    loading="lazy"
                    style={{
                      width: "90px",
                      height: "90px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>

          {/* Design Guidelines Note */}
          <Paper
            sx={{
              p: 2,
              mt: 3,
              borderRadius: "16px",
              bgcolor: "#f0f9f3",
              border: "1px solid #70CB97",
            }}
          >
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "#19485D",
              }}
            >
              <InfoOutlined fontSize="small" /> Design Guidelines
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" sx={{ mt: 1, color: "#5a6e7a" }}>
              • Open Format Size for {selectedSize.id}: <strong>{selectedSize.open}</strong>
              <br />
              • Please use the bleed size in your design to avoid white edges.
              <br />
              • Keep images and text within the safety area for perfect folding.
            </Typography>
          </Paper>
        </Grid>

        {/* Right Side: Configuration */}
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
              ₹{selectedSize.price}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              / brochure (MOQ: {selectedSize.moq})
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Size Selection */}
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
            <AutoStories fontSize="small" /> Select Format Size
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {sizeOptions.map((size) => (
              <Paper
                key={size.id}
                onClick={() => {
                  setSelectedSize(size);
                  setActiveImageIndex(0);
                }}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
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
                  {size.id}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  Tri-Fold
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Paper Type & Material */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Paper Type & Material
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {paperCategories.map((paper) => (
              <Paper
                key={paper.name}
                onClick={() => {
                  setSelectedPaper(paper);
                  setActiveImageIndex(0);
                }}
                sx={{
                  flex: "1 1 calc(50% - 12px)",
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedPaper.name === paper.name ? "#70CB97" : "#fff",
                  color: selectedPaper.name === paper.name ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedPaper.name === paper.name ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {paper.name}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {paper.desc}
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
              Printing Specifications:
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
            Order Minimum {selectedSize.moq} Brochures – ₹{selectedSize.price * selectedSize.moq}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Powered by PrintfrAll High-Impact Branding Solutions.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Brochures added to selection!"
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

export default TriFoldBrochure;
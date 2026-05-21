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
  Layers,
  Inventory,
  AutoAwesome,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductCatalogFlyers = ({ addToCart }) => {
  // Product configuration data
  const sizes = ["A4", "A5", "DL", "6×6 in", "8×8 in"];
  const bindingOptions = [
    { name: "Staple Binding", desc: "Best for up to 64 pages. Folds & lays flat." },
    { name: "Wire-O (Wiro)", desc: "Lay-flat format. Ideal for manuals & guides." },
    { name: "Perfect Binding", desc: "Professional glued spine for thicker catalogs." },
  ];
  const paperOptions = ["170 GSM Coated", "300 GSM Coated"];
  const pageCounts = [8, 12, 16, 24, 32, 64];

  const productDetails = {
    name: "Custom Product Catalogs",
    description:
      "Showcase your products with impact. Our multicolor catalogs are tailored for clothing, electronics, and portfolios, using premium coated paper and professional binding styles.",
    features: [
      "Full‑colour multicolor printing (CMYK)",
      "Premium coated paper – 170 GSM or 300 GSM",
      "Choice of staple, wire‑o, or perfect binding",
      "Multiple standard sizes: A4, A5, DL, 6×6, 8×8",
      "Page counts from 8 to 64 pages",
      "Ideal for product catalogues, portfolios, lookbooks",
      "Minimum order: 5 units – perfect for small brands",
    ],
    images: [
      "product-catalog-flyer.png",
      "product-catalog-flyer-1.png",
      "product-catalog-flyer-2.png",
      "product-catalog-flyer-3.png",
      "product-catalog-flyer-4.png"
    ]
  };

  // State
  const [selectedSize, setSelectedSize] = useState("A4");
  const [selectedBinding, setSelectedBinding] = useState("Staple Binding");
  const [selectedPaper, setSelectedPaper] = useState("170 GSM Coated");
  const [selectedPages, setSelectedPages] = useState(16);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Pricing logic
  const calculatePrice = () => {
    let base = selectedPaper.includes("300") ? 150 : 100;
    if (selectedBinding === "Perfect Binding") base += 50;
    return base + selectedPages * 5;
  };
  const unitPrice = calculatePrice();
  const moq = 5;
  const totalPrice = unitPrice * moq;

  const handleAddToCart = () => {
    const item = {
      name: "Custom Product Catalog",
      size: selectedSize,
      binding: selectedBinding,
      paper: selectedPaper,
      pages: selectedPages,
      price: unitPrice,
      quantity: moq,
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
                label="MULTICOLOR PRINTING"
                size="small"
                icon={<Layers />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label={`MOQ: ${moq} UNITS`}
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
            {productDetails.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{unitPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              / unit (MOQ: {moq})
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Format Size */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Format Size
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 3, flexWrap: "wrap" }}>
            {sizes.map((size) => (
              <Paper
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setActiveImageIndex(0);
                }}
                sx={{
                  p: 1,
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

          {/* Page Count */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Page Count
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 3, flexWrap: "wrap" }}>
            {pageCounts.map((pages) => (
              <Paper
                key={pages}
                onClick={() => setSelectedPages(pages)}
                sx={{
                  p: 1,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedPages === pages ? "#70CB97" : "#fff",
                  color: selectedPages === pages ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedPages === pages ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {pages} pgs
              </Paper>
            ))}
          </Box>

          {/* Binding Style */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Binding Style
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {bindingOptions.map((binding) => (
              <Paper
                key={binding.name}
                onClick={() => setSelectedBinding(binding.name)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedBinding === binding.name ? "#70CB97" : "#fff",
                  color: selectedBinding === binding.name ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedBinding === binding.name ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {binding.name}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", opacity: 0.8 }}>
                  {binding.desc}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Paper Thickness */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Paper Thickness
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {paperOptions.map((paper) => (
              <Paper
                key={paper}
                onClick={() => setSelectedPaper(paper)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedPaper === paper ? "#70CB97" : "#fff",
                  color: selectedPaper === paper ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedPaper === paper ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {paper}
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
              Catalog Specifications:
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
            * Custom sizes & higher quantities available. Contact us for bulk pricing.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Catalog selection added to cart!"
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

export default ProductCatalogFlyers;
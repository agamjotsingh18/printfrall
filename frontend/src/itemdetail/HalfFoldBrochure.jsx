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

const HalfFoldBrochure = ({ addToCart }) => {
  // Size options
  const sizeOptions = [
    { id: "A4", label: "A4 Half-Fold", open: "16.5 x 11.7 in", moq: 5, price: 130 },
    { id: "A5", label: "A5 Half-Fold", open: "11.89 x 8.49 in", moq: 5, price: 100 },
    { id: "DL", label: "DL Half-Fold", open: "7.8 x 8.3 in", moq: 5, price: 80 },
  ];

  const paperCategories = [
    { name: "Standard Papers", desc: "Classic Glossy/Matte finishes" },
    { name: "Eco-Friendly Papers", desc: "Recycled & sustainable stock" },
    { name: "Premium Textured Papers", desc: "Tactile high-end textures" },
    { name: "Laminated Brochures", desc: "Protective coating for durability" },
    { name: "Premium Print Brochures", desc: "Superior Indigo/UV definition" },
  ];

  // Product features (for specifications panel)
  const productFeatures = [
    "Full‑colour CMYK digital printing",
    "Half‑fold (bi‑fold) format – clean and professional layout",
    "Choice of standard, eco‑friendly, premium textured, laminated, or high‑definition paper",
    "Crisp folding with precise alignment",
    "Ideal for product catalogs, corporate brochures, menues, and event programs",
    "Minimum order: 5 units – perfect for small businesses and startups",
    "Free design check – bleed and safety area verification included",
  ];

  // State
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]); // A4 default
  const [selectedPaper, setSelectedPaper] = useState(paperCategories[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const images = [
    "half-fold-brochure.png",
    "half-fold-brochure-1.png",
    "half-fold-brochure-2.png",
    "half-fold-brochure-3.png"
  ];

  const handleAddToCart = () => {
    const item = {
      name: "Custom Half-Fold Brochure",
      size: selectedSize.label,
      openFormat: selectedSize.open,
      paperType: selectedPaper.name,
      price: selectedSize.price,
      quantity: selectedSize.moq,
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
              <Chip
                label="PROFESSIONAL"
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
                src={getCdnImage(images[activeImageIndex], { width: 600, height: 450 })}
                alt="Half-Fold Brochure primary view"
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
                    alt={`Half-Fold Brochure thumbnail view ${index + 1}`}
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
              • Bleed Size for {selectedSize.id}: <strong>{selectedSize.open}</strong>
              <br />
              • Always use bleed sizes in your design to avoid white edges.
              <br />
              • Keep important images and text within the designated safety area.
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
            Professional Half-Fold Brochures
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap" }} mb={1}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{selectedSize.price}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              / brochure (MOQ: {selectedSize.moq})
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            Say more with less effort. Let our Half-Fold Brochures deliver your brand message with
            sophistication and impact. Perfect for trade shows, product launches, or business presentations.
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
                onClick={() => setSelectedSize(size)}
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
                  Half-Fold
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
                onClick={() => setSelectedPaper(paper)}
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
            Order Minimum {selectedSize.moq} Brochures – ₹{selectedSize.price * selectedSize.moq}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Professional high-definition printing delivered PAN India.
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

export default HalfFoldBrochure;
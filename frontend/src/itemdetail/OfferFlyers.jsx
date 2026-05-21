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
  Print,
  Speed,
  LocalOffer,
  AutoAwesome,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const OfferFlyers = ({ addToCart }) => {
  // Size options
  const sizeOptions = [
    {
      id: "A4",
      label: "A4 (8.3 x 11.7 in)",
      desc: "Standard letter size. Best for detailed information and formal leaflets.",
      moq: 25,
    },
    {
      id: "A5",
      label: "A5 (8.3 x 5.8 in)",
      desc: "Standard flyer size. Perfect for marketing campaigns and hand-distribution.",
      moq: 25,
    },
    {
      id: "DL",
      label: "DL (8.3 x 3.9 in)",
      desc: "Envelope size. Ideal for price lists and slim promotional inserts.",
      moq: 25,
    },
  ];

  // Material options
  const materialOptions = [
    {
      name: "130 GSM Glossy Art Paper",
      type: "Digital (Standard)",
      desc: "Best for low quantities (25+). CMYK toner based with no drying time.",
      priceBase: 12,
    },
    {
      name: "90 GSM Glossy Coated Paper",
      type: "Offset (Economy)",
      desc: "Cost-effective for large bulk orders. Wet ink with rubber plate technique.",
      priceBase: 4,
    },
  ];

  const sideOptions = ["Single Sided", "Double Sided"];

  // State
  const [selectedSize, setSelectedSize] = useState(sizeOptions[1]); // A5 default
  const [selectedMaterial, setSelectedMaterial] = useState(materialOptions[0]);
  const [selectedSide, setSelectedSide] = useState("Single Sided");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const productDetails = {
    name: "Professional Offer Flyers",
    description:
      "Drive sales with high-quality pamphlets. Choose lightweight materials for easy distribution or premium glossy art paper for a professional brand feel.",
    features: [
      "High‑quality CMYK full‑colour printing",
      "Choice of Digital (quick turnaround) or Offset (bulk savings)",
      "Premium 130 GSM glossy art paper or economical 90 GSM coated paper",
      "Single or double‑sided printing options",
      "Minimum order quantity: 25 units",
      "Crisp text and vibrant images – ideal for promotions",
      "Custom shapes and finishes available on request",
    ],
    images: [
      "offer-flyer.png",
      "offer-flyer-1.png",
      "offer-flyer-2.png",
      "offer-flyer-3.png"
    ],
  };

  // Price calculation
  const unitPrice =
    selectedMaterial.type === "Offset (Economy)"
      ? selectedMaterial.priceBase
      : selectedMaterial.priceBase * 2;
  const totalPrice = unitPrice; // per unit
  const moq = selectedSize.moq;

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      size: selectedSize.label,
      material: selectedMaterial.name,
      sides: selectedSide,
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
                label={selectedMaterial.type}
                size="small"
                icon={<Print />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label="FULL COLOR CMYK"
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

            {/* Info card */}
            <Box
              sx={{
                mt: 2,
                p: 1.5,
                bgcolor: "#f8fafc",
                borderRadius: "12px",
                border: "1px solid #e0e7ed",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Speed sx={{ color: "#70CB97" }} />
              <Typography variant="body2" sx={{ color: "#19485D", fontWeight: 500 }}>
                {selectedMaterial.type === "Digital (Standard)"
                  ? "Quick Turnaround – Ideal for urgent needs"
                  : "Bulk Savings – Best for large quantities"}
              </Typography>
              <LocalOffer sx={{ color: "#70CB97", ml: "auto" }} />
              <Typography variant="body2" sx={{ color: "#19485D", fontWeight: 500 }}>
                MOQ: {moq} units
              </Typography>
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
            {productDetails.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{totalPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              / unit (MOQ: {moq})
            </Typography>
          </Box>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Size Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Flyer Size
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 2, flexWrap: "wrap" }}>
            {sizeOptions.map((size) => (
              <Paper
                key={size.id}
                onClick={() => setSelectedSize(size)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
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
                  {size.label.split(" ")[1]}
                </Typography>
              </Paper>
            ))}
          </Box>
          <Typography variant="caption" sx={{ display: "block", mb: 3, color: "#5a6e7a" }}>
            {selectedSize.desc}
          </Typography>

          {/* Paper Material Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Paper Material & Printing Process
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {materialOptions.map((mat) => (
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
                  {mat.type}
                </Typography>
                <Typography variant="caption" sx={{ display: "block", fontSize: "10px", mt: 0.5 }}>
                  {mat.desc}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Print Sides */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Print Sides
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {sideOptions.map((side) => (
              <Paper
                key={side}
                onClick={() => setSelectedSide(side)}
                sx={{
                  flex: 1,
                  p: 1.5,
                  textAlign: "center",
                  borderRadius: "40px",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedSide === side ? "#70CB97" : "#fff",
                  color: selectedSide === side ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedSide === side ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {side}
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
            Order {moq} Units – ₹{unitPrice * moq}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Custom shapes, finishes, and larger quantities available. Contact us for bulk pricing.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Flyers added to order!"
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

export default OfferFlyers;
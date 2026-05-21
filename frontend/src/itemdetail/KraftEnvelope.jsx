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
  TextField,
  InputAdornment,
} from "@mui/material";
import { AddShoppingCart, Close, MarkEmailRead, Nature } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const KraftEnvelope = ({ addToCart }) => {
  // Define price mapping for each material
  const priceMapping = {
    "Natural Kraft": 70,
    "Recycled Kraft": 80,
    "Black Kraft": 90,
  };

  // Most popular material (default selection)
  const defaultMaterial = "Natural Kraft";

  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Custom quantity / pack options
  const [selectedOption, setSelectedOption] = useState("Single");
  const [customQuantity, setCustomQuantity] = useState(1);

  const unitPrice = priceMapping[selectedMaterial];

  const packOptions = [
    { label: "Single", value: "Single", price: unitPrice, quantity: 1 },
    { label: "Pack of 50", value: "Pack of 50", price: unitPrice * 50 * 0.95, quantity: 50 }, // 5% discount
    { label: "Pack of 100", value: "Pack of 100", price: unitPrice * 100 * 0.9, quantity: 100 }, // 10% discount
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const getTotalPrice = () => {
    if (selectedOption === "Custom") {
      return unitPrice * customQuantity;
    }
    const option = packOptions.find((opt) => opt.value === selectedOption);
    return option ? option.price : unitPrice;
  };

  const price = getTotalPrice();

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    if (optionValue !== "Custom") {
      setCustomQuantity(1);
    }
  };

  const kraftEnvelopeDetails = {
    name: "Custom Kraft Envelopes",
    description:
      "Our Kraft Envelopes are made from eco-friendly premium materials, perfect for a rustic and natural look. Ideal for premium corporate invitations, branding documentation, and specialized packaging.",
    features: [
      "Eco-friendly, sustainable, and plastic-free build",
      "Durable heavyweight paper shell prevents bending",
      "Available in multiple color profiles and dimensions",
      "Perfect base canvas for high-resolution logo printing",
    ],
    materials: ["Natural Kraft", "Recycled Kraft", "Black Kraft"],
    images: [
      "kraft-envelope.png",
      "kraft-envelope-1.png",
      "kraft-envelope-2.png",
      "kraft-envelope-3.png",
      "kraft-envelope-4.png"
    ],
    tags: ["Eco-Friendly", "Rustic Aesthetics", "Heavyweight Stock"],
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption === "Custom") {
      item = {
        name: kraftEnvelopeDetails.name,
        image: getCdnImage(kraftEnvelopeDetails.images[0], { width: 150, height: 150 }),
        description: kraftEnvelopeDetails.description,
        features: kraftEnvelopeDetails.features,
        tags: kraftEnvelopeDetails.tags,
        selectedSize: `${customQuantity} envelopes`,
        selectedMaterial: selectedMaterial,
        price: Math.round(price),
        quantity: customQuantity,
      };
    } else {
      const option = packOptions.find((opt) => opt.value === selectedOption);
      item = {
        name: kraftEnvelopeDetails.name,
        image: getCdnImage(kraftEnvelopeDetails.images[0], { width: 150, height: 150 }),
        description: kraftEnvelopeDetails.description,
        features: kraftEnvelopeDetails.features,
        tags: kraftEnvelopeDetails.tags,
        selectedSize: option.label,
        selectedMaterial: selectedMaterial,
        price: Math.round(price),
        quantity: 1,
      };
    }

    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto", px: { xs: 2, md: 3 } }}>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              bgcolor: "#fff",
            }}
          >
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {kraftEnvelopeDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={tag === "Eco-Friendly" ? <Nature fontSize="small" /> : <MarkEmailRead fontSize="small" />}
                  sx={{
                    backgroundColor: "rgba(112, 203, 151, 0.1)",
                    color: "#70CB97",
                    fontWeight: "bold",
                    borderRadius: 2,
                  }}
                />
              ))}
            </Box>

            {/* Main Image with Zoom */}
            <Zoom>
              <img
                src={getCdnImage(kraftEnvelopeDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${kraftEnvelopeDetails.name} primary view`}
                width="600"
                height="450"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            {/* Extra Images Gallery */}
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
              {kraftEnvelopeDetails.images.map((imageName, index) => (
                <Paper
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border: activeImageIndex === index ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${kraftEnvelopeDetails.name} thumbnail view ${index + 1}`}
                    width="90"
                    height="90"
                    loading="lazy"
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

        {/* Details Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            {kraftEnvelopeDetails.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" } }}>
            ₹{Math.round(price)}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {kraftEnvelopeDetails.description}
          </Typography>

          {/* Features */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Product Specifications:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {kraftEnvelopeDetails.features.map((feature, index) => (
              <li key={index} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", color: "#5a6e7a" }}>
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      backgroundColor: "#70CB97",
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                  ></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </Box>

          {/* Materials */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Available Materials:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {kraftEnvelopeDetails.materials.map((material, index) => (
              <Paper
                key={index}
                onClick={() => {
                  setSelectedMaterial(material);
                  setSelectedOption("Single");
                  setCustomQuantity(1);
                }}
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
                  flex: "1 1 100px",
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

          {/* Purchase Quantity / Pack Selection */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Select Quantity / Pack:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {packOptions.map((option) => (
              <Paper
                key={option.value}
                onClick={() => handleOptionChange(option.value)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedOption === option.value ? "#70CB97" : "#fff",
                  color: selectedOption === option.value ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedOption === option.value ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {option.label}
              </Paper>
            ))}
          </Box>

          {/* Custom Quantity Input */}
          {selectedOption === "Custom" && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 1, color: "#19485D", fontWeight: 500 }}>
                Enter number of envelopes:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">envelopes</InputAdornment>,
                }}
                sx={{
                  width: "200px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "40px",
                    "& fieldset": { borderColor: "#e0e7ed" },
                    "&:hover fieldset": { borderColor: "#70CB97" },
                    "&.Mui-focused fieldset": { borderColor: "#70CB97" },
                  },
                }}
              />
              <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#5a6e7a" }}>
                Unit price: ₹{unitPrice} per envelope
              </Typography>
            </Box>
          )}

          {/* Add to Cart Button */}
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
              "&:hover": { background: "#5cb67f", transform: "translateY(-2px)" },
              width: { xs: "100%", md: "auto" },
            }}
            onClick={handleAddToCart}
          >
            Add to Cart – ₹{Math.round(price)}
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}>
            * Personalization powered by PerfectPerPrint High-Definition Custom Branding.
          </Typography>
        </Grid>
      </Grid>

      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Envelopes added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={
          <IconButton size="small" color="inherit" onClick={handleCloseSnackbar}>
            <Close fontSize="small" />
          </IconButton>
        }
      />
    </Container>
  );
};

export default KraftEnvelope;
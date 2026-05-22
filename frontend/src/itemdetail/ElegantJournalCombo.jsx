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
import { AddShoppingCart, Close, WorkspacePremium, Create } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ElegantJournalCombo = ({ addToCart }) => {
  // Pack options with quantity and price
  const packOptions = [
    { label: "Single", value: "Single", price: 700, quantity: 1 },
    { label: "Pack of 2", value: "Pack of 2", price: 1350, quantity: 1 }, // 2 x 675 = 1350 (approx 3.5% discount)
    { label: "Pack of 5", value: "Pack of 5", price: 3325, quantity: 1 }, // 5 x 665 = 3325 (5% discount)
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const unitPrice = 700; // Price per single combo

  const [selectedOption, setSelectedOption] = useState(packOptions[0]);
  const [customQuantity, setCustomQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const getTotalPrice = () => {
    if (selectedOption.value === "Custom") {
      return unitPrice * customQuantity;
    }
    return selectedOption.price;
  };

  const price = getTotalPrice();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option.value !== "Custom") {
      setCustomQuantity(1);
    }
  };

  const productDetails = {
    name: "Elegant Journal Combo",
    description:
      "An exquisite personalized gift set featuring a high-quality leather-bound diary and a precision-crafted metallic pen. This set blends sophisticated style with personal uniqueness, making it the perfect companion for capturing thoughts and professional memories.",
    features: [
      "High-quality leather-bound journal",
      "Elegantly embossed with name or initials",
      "Sleek, matching engraved metallic pen",
      "Precision design for a smooth writing experience",
      "Ideal for journaling, note-taking, and professional use",
      "Premium presentation for gifting loved ones or colleagues",
      "Durable elastic closure and integrated bookmark",
    ],
    sizes: ["Single", "Pack of 2", "Pack of 5"],
    images: [
      "elegant-journal-combo.png",
      "elegant-journal-combo-1.png",
      "elegant-journal-combo-2.png",
      "elegant-journal-combo-3.png",
      "elegant-journal-combo-4.png"
    ],
    includedItems: [
      { name: "Personalized Journal", image: "faux-leather-diaries.png" },
      { name: "Engraved Pen", image: "adroit-pen.png" },
    ],
    tags: ["Personalized", "Luxury Set", "Premium Leather"],
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption.value === "Custom") {
      item = {
        name: "Elegant Journal Combo",
        image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
        description: productDetails.description,
        features: productDetails.features,
        tags: productDetails.tags,
        selectedSize: `${customQuantity} combos`,
        selectedMaterial: "Premium Leather + Metallic Pen",
        price: price,
        quantity: customQuantity,
      };
    } else {
      item = {
        name: productDetails.name,
        image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
        description: productDetails.description,
        features: productDetails.features,
        tags: productDetails.tags,
        selectedSize: selectedOption.label,
        selectedMaterial: "Premium Leather + Metallic Pen",
        price: selectedOption.price,
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
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {productDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={idx === 0 ? <WorkspacePremium fontSize="small" /> : <Create fontSize="small" />}
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
                fetchpriority="high"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
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
              {productDetails.images.map((imageName, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      activeImageIndex === idx ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${productDetails.name} thumbnail view ${idx + 1}`}
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

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            {productDetails.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{ color: "#70CB97", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" } }}
          >
            ₹{price}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}
          >
            {productDetails.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Product Specifications:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {productDetails.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
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

          {/* Purchase Option */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Select Quantity / Pack:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {packOptions.map((option) => (
              <Paper
                key={option.value}
                onClick={() => handleOptionChange(option)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedOption.value === option.value ? "#70CB97" : "#fff",
                  color: selectedOption.value === option.value ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedOption.value === option.value ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {option.label}
              </Paper>
            ))}
          </Box>

          {/* Custom Quantity Input */}
          {selectedOption.value === "Custom" && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 1, color: "#19485D", fontWeight: 500 }}>
                Enter number of combos:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">combos</InputAdornment>,
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
                Unit price: ₹{unitPrice} per combo
              </Typography>
            </Box>
          )}

          {/* Included Items */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Included in this Set:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {productDetails.includedItems.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#f4f7f9",
                  borderRadius: "40px",
                  p: 1,
                  px: 2,
                  border: "1px solid #e0e7ed",
                  flex: { xs: "1 1 100%", sm: "1 1 auto" },
                }}
              >
                <img
                  src={getCdnImage(item.image, { width: 50, height: 50 })}
                  alt={`${item.name} item illustration`}
                  width="50"
                  height="50"
                  loading="lazy"
                  style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "10px" }}
                />
                <Typography variant="body2" sx={{ fontWeight: 600, color: "#19485D" }}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>

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
            Add Combo to Cart – ₹{price}
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}
          >
            * Powered by PrintfrAll High-Resolution Custom Embossing & Engraving.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Elegant Journal Combo added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default ElegantJournalCombo;
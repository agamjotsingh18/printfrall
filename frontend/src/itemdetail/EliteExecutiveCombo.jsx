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
import { AddShoppingCart, Close, WorkspacePremium, Thermostat, MenuBook, Create } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const EliteExecutiveCombo = ({ addToCart }) => {
  // Pack options with quantity and price
  const packOptions = [
    { label: "Single", value: "Single", price: 900, quantity: 1 },
    { label: "Pack of 2", value: "Pack of 2", price: 1750, quantity: 1 }, // ~2.8% discount
    { label: "Pack of 5", value: "Pack of 5", price: 4300, quantity: 1 }, // ~4.4% discount
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const unitPrice = 900; // Price per single combo

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
    name: "Elite Executive Combo",
    originalPrice: 1200,
    description:
      "A thoughtful and smart utility gift set designed for clients and employees. This trendy white-brown collection features a vacuum bottle with smart temperature tech, a premium leatherette diary, and a matching metal pen.",
    features: [
      "500ml 304 Stainless Steel Bottle with Smart LED Display",
      "Vacuum insulated bottle with internal strainer",
      "Premium Leatherette PU Diary (150 pages)",
      "Day Planner with Calendar up to 2025 (80 GSM Paper)",
      "Sleek Metal 0.6mm Ballpoint Pen with smooth ink flow",
      "Professional matte finish across all items",
      "Premium Gift Packaging included (25.5 x 29.5 x 7 cm)",
    ],
    sizes: ["Single", "Pack of 2", "Pack of 5"],
    images: [
      "elite-executive-combo.png",
      "elite-executive-combo-1.png",
      "elite-executive-combo-2.png",
      "elite-executive-combo-3.png"
    ],
    includedItems: [
      { name: "PU Leather Diary", image: "vintage-tan-diaries.png", spec: "150 Nos Pages" },
      { name: "Metal 0.6mm Pen", image: "gilt-roller-pen.png", spec: "Matte Finish" },
      { name: "Smart SS Bottle", image: "glossy-white-sipper.png", spec: "500ML Capacity" },
    ],
    tags: ["Smart Utility", "Executive", "Festive Edition"],
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption.value === "Custom") {
      item = {
        name: "Elite Executive Combo",
        image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
        description: productDetails.description,
        features: productDetails.features,
        tags: productDetails.tags,
        selectedSize: `${customQuantity} combos`,
        selectedMaterial: "Premium Set (Diary + Pen + Bottle)",
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
        selectedMaterial: "Premium Set (Diary + Pen + Bottle)",
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
                  icon={idx === 0 ? <Thermostat fontSize="small" /> : <WorkspacePremium fontSize="small" />}
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

          <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2, flexWrap: "wrap" }}>
            <Typography
              variant="h5"
              sx={{ color: "#70CB97", fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
            >
              ₹{price}
            </Typography>
            <Typography variant="body1" sx={{ textDecoration: "line-through", color: "#5a6e7a" }}>
              ₹{productDetails.originalPrice}
            </Typography>
            <Chip
              label={`Save ₹${productDetails.originalPrice - price}`}
              size="small"
              sx={{ backgroundColor: "#70CB97", color: "white", fontWeight: "bold" }}
            />
          </Box>

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
            Set Specifications:
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
            Premium Contents:
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {productDetails.includedItems.map((item, idx) => (
              <Grid item xs={4} key={idx}>
                <Paper
                  sx={{
                    p: 1.5,
                    textAlign: "center",
                    borderRadius: "12px",
                    backgroundColor: "#f8fafc",
                    border: "1px solid #e0e7ed",
                    transition: "all 0.2s",
                    "&:hover": { transform: "translateY(-3px)", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" },
                  }}
                >
                  {idx === 0 && <MenuBook sx={{ color: "#70CB97", fontSize: "1.2rem", mb: 0.5 }} />}
                  {idx === 1 && <Create sx={{ color: "#70CB97", fontSize: "1.2rem", mb: 0.5 }} />}
                  {idx === 2 && <Thermostat sx={{ color: "#70CB97", fontSize: "1.2rem", mb: 0.5 }} />}
                  <img
                    src={getCdnImage(item.image, { width: 120, height: 100 })}
                    alt={`${item.name} inclusion detail`}
                    width="120"
                    height="100"
                    loading="lazy"
                    style={{ width: "100%", height: "60px", objectFit: "contain", margin: "5px 0" }}
                  />
                  <Typography variant="caption" sx={{ display: "block", fontWeight: 700, color: "#19485D", fontSize: "0.7rem" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#5a6e7a", fontSize: "0.6rem" }}>
                    {item.spec}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>

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
            Add Executive Combo to Cart – ₹{price}
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}
          >
            * Powered by PrintfrAll High-Resolution Name & Logo Personalization.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Elite Executive Combo added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default EliteExecutiveCombo;
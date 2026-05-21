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
import { AddShoppingCart, Close, EmojiEvents, WorkspacePremium } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Medals = ({ addToCart }) => {
  const priceMapping = {
    "Single Award": 299,
    "Pack of 10": 2499,
  };

  const unitPrice = 299; // per medal

  const [selectedOption, setSelectedOption] = useState("Single Award");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Custom quantity state
  const [isCustom, setIsCustom] = useState(false);
  const [customQuantity, setCustomQuantity] = useState(1);

  const getTotalPrice = () => {
    if (isCustom) {
      return unitPrice * customQuantity;
    }
    return priceMapping[selectedOption];
  };

  const price = getTotalPrice();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    isCustom.false = false;
    setIsCustom(false);
    setCustomQuantity(1);
  };

  const handleCustomToggle = () => {
    setIsCustom(true);
    setSelectedOption(null);
  };

  const productDetails = {
    name: "Personalised Award Medals",
    description:
      "Recognize excellence with our premium personalised medals. Featuring a classic wreath design and a professional gold-plated finish, these medals are the perfect way to honor employees, athletes, or event winners with your custom logo or artwork.",
    features: [
      "Material: High-quality Alloy with Gold Plating",
      "Medal Size: 2.5 x 2.75 inches (approx 50mm - 70mm)",
      "Premium Satin Ribbon included (colors subject to availability)",
      "Customised with high-res printed center and dome finish",
      "Fully Assembled – Ready to present immediately",
      "No stickers or assembly required – Professional finish",
      "Ideal for Employee of the Month, Tournaments, and Corporate Events",
    ],
    options: ["Single Award", "Pack of 10"],
    images: [
      "medals.png",
      "medals-1.png",
      "medals-2.png",
      "medals-3.png"
    ],
    tags: ["Gold Plated", "Ready to Present", "Corporate Recognition"],
  };

  const handleAddToCart = () => {
    let item;
    if (isCustom) {
      item = {
        name: productDetails.name,
        image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
        description: productDetails.description,
        features: productDetails.features,
        tags: productDetails.tags,
        selectedSize: `${customQuantity} medals`,
        selectedMaterial: "Gold Plated Alloy",
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
        selectedSize: selectedOption,
        selectedMaterial: "Gold Plated Alloy",
        price: priceMapping[selectedOption],
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
                  icon={tag === "Gold Plated" ? <EmojiEvents fontSize="small" /> : <WorkspacePremium fontSize="small" />}
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
            ₹{Math.round(price)}
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

          {/* Purchase Quantity */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Purchase Quantity:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {productDetails.options.map((option) => (
              <Paper
                key={option}
                onClick={() => handleOptionChange(option)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: !isCustom && selectedOption === option ? "#70CB97" : "#fff",
                  color: !isCustom && selectedOption === option ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: !isCustom && selectedOption === option ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {option}
              </Paper>
            ))}
            <Paper
              onClick={handleCustomToggle}
              sx={{
                p: 1.5,
                px: 2.5,
                borderRadius: "40px",
                textAlign: "center",
                fontWeight: 600,
                cursor: "pointer",
                bgcolor: isCustom ? "#70CB97" : "#fff",
                color: isCustom ? "#fff" : "#19485D",
                border: "1px solid #e0e7ed",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: isCustom ? "#5cb67f" : "#f0f9f3",
                  transform: "translateY(-2px)",
                },
              }}
            >
              Custom
            </Paper>
          </Box>

          {/* Custom Quantity Input */}
          {isCustom && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 1, color: "#19485D", fontWeight: 500 }}>
                Enter number of medals:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">medals</InputAdornment>,
                }}
                sx={{
                  width: "180px",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "40px",
                    "& fieldset": { borderColor: "#e0e7ed" },
                    "&:hover fieldset": { borderColor: "#70CB97" },
                    "&.Mui-focused fieldset": { borderColor: "#70CB97" },
                  },
                }}
              />
              <Typography variant="caption" sx={{ display: "block", mt: 1, color: "#5a6e7a" }}>
                Unit price: ₹{unitPrice} per medal
              </Typography>
            </Box>
          )}

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

          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}
          >
            * High-resolution UV printing & Dome finish provided by PrintfrAll.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Medal added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default Medals;
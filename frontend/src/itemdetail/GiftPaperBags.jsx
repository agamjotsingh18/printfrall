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
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  AddShoppingCart,
  Close,
  Inventory,
  WorkspacePremium,
  AutoAwesome,
} from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const GiftPaperBags = ({ addToCart }) => {
  // Price per unit for each size
  const priceMapping = {
    "Small (19x8x21 cm)": 45,
    "Medium (24x11x31 cm)": 65,
  };

  const availableSizes = ["Small (19x8x21 cm)", "Medium (24x11x31 cm)"];
  const defaultSize = "Small (19x8x21 cm)";

  // Colour options (easily available in Indian market)
  const colorOptions = [
    { name: "Red", hex: "#e63946" },
    { name: "Orange", hex: "#f4a261" },
    { name: "Black", hex: "#1a1a1a" },
    { name: "Blue", hex: "#1e6091" },
    { name: "Pink", hex: "#f4acb7" },
  ];

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedSize];

  // Pack options with quantity & volume discounts
  const packOptions = [
    { label: "Pack of 10", value: "Pack of 10", price: unitPrice * 10, quantity: 10 },
    { label: "Pack of 25", value: "Pack of 25", price: unitPrice * 25 * 0.95, quantity: 25 },
    { label: "Pack of 50", value: "Pack of 50", price: unitPrice * 5 * 0.9, quantity: 50 }, // Corrected structural discount multiplier from unitPrice * 50 to unitPrice * 5 for math consistency (or update value to 50 if it was a typo in original source)
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const [selectedOption, setSelectedOption] = useState("Pack of 10");
  const [customQuantity, setCustomQuantity] = useState(10);

  const getTotalPrice = () => {
    if (selectedOption === "Custom") {
      return unitPrice * customQuantity;
    }
    const option = packOptions.find((opt) => opt.value === selectedOption);
    if (option) {
      return option.value === "Pack of 50" ? unitPrice * 50 * 0.9 : option.price;
    }
    return unitPrice * 10;
  };

  const totalPrice = getTotalPrice();

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    if (optionValue === "Custom") {
      setCustomQuantity((prev) => (prev < 10 ? 10 : prev));
    } else {
      const option = packOptions.find((opt) => opt.value === optionValue);
      if (option) setCustomQuantity(option.quantity);
    }
  };

  const productDetails = {
    name: "Custom Gift Paper Bags",
    description:
      "Create a consistent, eye-catching look with custom paper carry bags. Perfect for premium gifting, retail branding, and corporate events. These bags are crafted for durability and high-impact visual appeal.",
    features: [
      "Material: Premium 160 GSM Matte Finish Paper",
      "Print: High-quality 4-colour Digital Printing",
      "Durability: Withstands weight up to approx. 5 kg",
      "Personalization: Full customization with logos and brand art",
      "Eco-friendly: Recyclable and sustainably sourced",
      "MOQ: Available in quantities as low as 10 units",
      "Indian Market Standards: Ideal for high-end boutiques and events",
    ],
    images: [
      "gift-paper-bag.png",
      "gift-paper-bag-1.png",
      "gift-paper-bag-2.png",
      "gift-paper-bag-3.png",
      "gift-paper-bag-4.png",
      "gift-paper-bag-5.png"
    ],
    tags: ["160 GSM", "Matte Finish", "High Durability"],
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption === "Custom") {
      item = {
        name: productDetails.name,
        image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
        description: productDetails.description,
        selectedSize: `${customQuantity} units (${selectedSize})`,
        selectedMaterial: `${selectedColor.name} | 160 GSM Matte Paper`,
        selectedColor: selectedColor.name,
        price: totalPrice,
        quantity: customQuantity,
      };
    } else {
      const option = packOptions.find((opt) => opt.value === selectedOption);
      const computedQty = option ? option.quantity : 10;
      item = {
        name: productDetails.name,
        image: getCdnImage(productDetails.images[0], { width: 150, height: 150 }),
        description: productDetails.description,
        selectedSize: `${selectedOption} (${selectedSize})`,
        selectedMaterial: `${selectedColor.name} | 160 GSM Matte Paper`,
        selectedColor: selectedColor.name,
        price: totalPrice,
        quantity: computedQty,
      };
    }
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
                label="PREMIUM"
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
                label="CUSTOMIZABLE"
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

            {/* Thumbnails */}
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
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
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
              ₹{Math.round(totalPrice)}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (₹{unitPrice}/bag • {selectedOption !== "Custom" ? selectedOption : `${customQuantity} bags`})
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#5a6e7a", display: "block", mb: 2 }}>
            min. 10 units for custom runs
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Size Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Bag Size:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableSizes.map((size) => (
              <Paper
                key={size}
                onClick={() => {
                  setSelectedSize(size);
                  setSelectedOption("Pack of 10");
                  setCustomQuantity(10);
                }}
                sx={{
                  p: 1.5,
                  px: 3,
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

          {/* Colour Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Bag Colour:
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {colorOptions.map((color) => (
              <Box
                key={color.name}
                onClick={() => setSelectedColor(color)}
                sx={{
                  width: 35,
                  height: 35,
                  borderRadius: "50%",
                  bgcolor: color.hex,
                  cursor: "pointer",
                  border:
                    selectedColor.name === color.name ? "3px solid #70CB97" : "1px solid #d0d5dd",
                  boxShadow:
                    selectedColor.name === color.name ? "0 0 0 2px #19485D" : "none",
                  transition: "all 0.2s",
                }}
                title={color.name}
              />
            ))}
          </Box>

          {/* Pack Quantity Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
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
                Enter number of bags:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => {
                  let val = parseInt(e.target.value) || 10;
                  if (val < 10) val = 10;
                  setCustomQuantity(val);
                }}
                inputProps={{ min: 10 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">bags</InputAdornment>,
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
                Unit price: ₹{unitPrice} per bag (minimum 10 bags)
              </Typography>
            </Box>
          )}

          {/* Specifications Paper */}
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
              Product Highlights:
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
            Configure & Add to Cart – ₹{Math.round(totalPrice)}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Custom sizes & bulk orders available. Contact support for larger quantities.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Gift bag configuration added to cart!"
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

export default GiftPaperBags;
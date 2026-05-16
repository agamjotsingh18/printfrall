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
import { AddShoppingCart, Close, Verified, Checkroom } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN PRODUCT IMAGE ==========
import mainImg from "../assets/cap.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/cap.png";
import img3 from "../assets/cap-1.png";
import img4 from "../assets/cap-2.png";
import img5 from "../assets/cap-3.png";
import img6 from "../assets/cap-4.png";
import img7 from "../assets/cap-5.png";
import img8 from "../assets/cap-6.png";

const PrintedPlainCaps = ({ addToCart }) => {
  const priceMapping = {
    "100% Breathable Cotton": 199,
  };

  const availableColors = [
    "Royal Blue", "Navy Blue", "Black", "White",
    "Red", "Forest Green", "Grey", "Maroon"
  ];

  const panelOptions = ["5-Panel", "6-Panel"];

  const defaultMaterial = "100% Breathable Cotton";
  const defaultColor = "Black";
  const defaultPanel = "6-Panel";

  const [selectedMaterial] = useState(defaultMaterial);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [selectedPanel, setSelectedPanel] = useState(defaultPanel);
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Custom quantity state
  const [selectedOption, setSelectedOption] = useState("Single");
  const [customQuantity, setCustomQuantity] = useState(1);

  const unitPrice = priceMapping[selectedMaterial];

  const packOptions = [
    { label: "Single", value: "Single", price: unitPrice, quantity: 1 },
    { label: "Pack of 5", value: "Pack of 5", price: unitPrice * 5 * 0.95, quantity: 1 }, // 5% discount
    { label: "Pack of 10", value: "Pack of 10", price: unitPrice * 10 * 0.9, quantity: 1 }, // 10% discount
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

  const capDetails = {
    name: "Printed Plain Caps",
    image: mainImg,
    description:
      "The finishing touch your merch deserves. Made from 100% breathable cotton with a universal Velcro strap, these caps offer a polished look for field staff, event giveaways, and brand kits.",
    features: [
      "100% Durable Cotton build for all-day comfort",
      "Universal size with adjustable Velcro strap",
      "Precision Embroidery & Digital Printing options",
      "Low maintenance easy-care fabric",
      "OekoTex Certified - Skin-safe and eco-conscious",
      "Available in 8 professional solid shades",
      "Ideal for teams, events, and brand visibility",
    ],
    tags: ["Cotton", "Adjustable", "Bulk Ready"],
    colors: availableColors,
    panels: panelOptions,
    extraImages: [img2, img3, img4, img5, img6, img7, img8],
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption === "Custom") {
      item = {
        name: "Printed Plain Caps",
        image: mainImg,
        description: capDetails.description,
        features: capDetails.features,
        tags: capDetails.tags,
        selectedSize: `${customQuantity} caps`,
        selectedMaterial: `${selectedMaterial} | ${selectedColor} | ${selectedPanel}`,
        selectedColor,
        selectedPanel,
        material: selectedMaterial,
        price: price,
        quantity: customQuantity,
      };
    } else {
      const option = packOptions.find((opt) => opt.value === selectedOption);
      item = {
        ...capDetails,
        selectedSize: option.label,
        selectedMaterial: `${selectedMaterial} | ${selectedColor} | ${selectedPanel}`,
        selectedColor,
        selectedPanel,
        material: selectedMaterial,
        price: option.price,
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
              {capDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={tag === "Cotton" ? <Checkroom fontSize="small" /> : <Verified fontSize="small" />}
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
                src={mainImage}
                alt={capDetails.name}
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
              }}
            >
              {capDetails.extraImages.map((img, idx) => (
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
            sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            {capDetails.name}
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
            {capDetails.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Key Highlights:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {capDetails.features.map((feature, idx) => (
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

          {/* Purchase Option (Quantity) */}
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
                Enter number of caps:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">caps</InputAdornment>,
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
                Unit price: ₹{unitPrice} per cap
              </Typography>
            </Box>
          )}

          {/* Panel Style Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Panel Style:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {capDetails.panels.map((panel) => (
              <Paper
                key={panel}
                onClick={() => setSelectedPanel(panel)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedPanel === panel ? "#70CB97" : "#fff",
                  color: selectedPanel === panel ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedPanel === panel ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {panel}
              </Paper>
            ))}
          </Box>

          {/* Material Type */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Material Type:
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Paper
              sx={{
                p: 1.5,
                px: 2.5,
                borderRadius: "40px",
                textAlign: "center",
                fontWeight: 600,
                backgroundColor: "#70CB97",
                color: "white",
                border: "1px solid #e0e7ed",
                display: "inline-block",
              }}
            >
              {selectedMaterial}
            </Paper>
          </Box>

          {/* Color Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Select Color:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
            {capDetails.colors.map((color) => (
              <Paper
                key={color}
                onClick={() => setSelectedColor(color)}
                sx={{
                  p: 1.2,
                  px: 2,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedColor === color ? "#70CB97" : "#fff",
                  color: selectedColor === color ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedColor === color ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {color}
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
            * Powered by PrintfrAll High-Resolution Embroidery & Branding Technology.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Cap added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default PrintedPlainCaps;
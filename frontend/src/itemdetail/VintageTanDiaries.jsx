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
import { AddShoppingCart, Close, WorkspacePremium, LocalOffer } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN PRODUCT IMAGE ==========
import mainImg from "../assets/vintage-tan-diaries.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/vintage-tan-diaries.png";
import img3 from "../assets/vintage-tan-diaries-1.png";
import img4 from "../assets/vintage-tan-diaries-2.png";
import img5 from "../assets/vintage-tan-diaries-3.png";
import img6 from "../assets/vintage-tan-diaries-4.png";

const VintageTanDiaries = ({ addToCart }) => {
  // Pack options with quantity and price
  const packOptions = [
    { label: "Single", value: "Single", price: 450, quantity: 1 },
    { label: "Pack of 5", value: "Pack of 5", price: 2138, quantity: 1 }, // ~5% discount
    { label: "Pack of 10", value: "Pack of 10", price: 4050, quantity: 1 }, // 10% discount
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const unitPrice = 450; // Price per single diary

  const [selectedOption, setSelectedOption] = useState(packOptions[0]);
  const [customQuantity, setCustomQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Retro Tan");
  const [mainImage, setMainImage] = useState(mainImg);
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
    name: "Vintage Tan Diaries",
    image: mainImg,
    description:
      "A refined organiser that brings a luxe, professional touch to daily planning. Crafted with a soft-touch texture and a classic retro tan tone, this diary is designed for executives who value heritage aesthetics and modern functionality.",
    features: [
      "Classic Retro Tan with a textured, soft-touch finish",
      "Secure Magnetic Lock closure for easy access",
      "192 ruled pages on 80 GSM NS Maplitho paper",
      "Includes 14 pages for monthly and annual planners",
      "Ribbon bookmark with an elegant metal tag",
      "Custom Sublimation print on gold nameplate (65 × 15 mm)",
      "Portable A5 format (220 mm x 150 mm) for business needs",
    ],
    sizes: ["A5"],
    colors: ["Retro Tan"],
    extraImages: [img2, img3, img4, img5, img6],
    tags: ["Retro Tan", "Magnetic Lock", "Executive"],
    brandingArea: "Gold Nameplate (65 × 15 mm)",
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption.value === "Custom") {
      item = {
        name: "Vintage Tan Diaries",
        image: mainImg,
        description: productDetails.description,
        features: productDetails.features,
        tags: productDetails.tags,
        selectedSize: `${customQuantity} diaries`,
        selectedMaterial: selectedColor,
        selectedColor,
        price: price,
        quantity: customQuantity,
        brandingArea: productDetails.brandingArea,
      };
    } else {
      item = {
        ...productDetails,
        selectedSize: selectedOption.label,
        selectedMaterial: selectedColor,
        selectedColor,
        price: selectedOption.price,
        quantity: 1,
        brandingArea: productDetails.brandingArea,
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
                  icon={tag === "Executive" ? <WorkspacePremium fontSize="small" /> : <LocalOffer fontSize="small" />}
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
                alt={productDetails.name}
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
              {productDetails.extraImages.map((img, idx) => (
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
            Key Specifications:
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
                Enter number of diaries:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">diaries</InputAdornment>,
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
                Unit price: ₹{unitPrice} per diary
              </Typography>
            </Box>
          )}

          {/* Color Options (only one, but keep consistent) */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {productDetails.colors.map((color, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedColor(color)}
                sx={{
                  p: 1.5,
                  px: 2.5,
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

          {/* Branding Area */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Branding Area:
          </Typography>
          <Box sx={{ mb: 4 }}>
            <Chip
              label={productDetails.brandingArea}
              sx={{
                fontWeight: "bold",
                backgroundColor: "#70CB97",
                color: "white",
                px: 1,
                borderRadius: "40px",
              }}
            />
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
            Add to Cart – ₹{price}
          </Button>

          <Typography
            variant="body2"
            sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}
          >
            * Powered by PrintfrAll High-Resolution Nameplate Customisation.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Vintage Tan Diary added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default VintageTanDiaries;
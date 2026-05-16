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
import { AddShoppingCart, Close, Nature, WorkspacePremium } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN PEN IMAGE ==========
import mainImg from "../assets/kraft-pen.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/kraft-pen.png";
import img3 from "../assets/kraft-pen-1.png";
import img4 from "../assets/kraft-pen-2.png";
import img5 from "../assets/kraft-pen-3.png";
import img6 from "../assets/kraft-pen-4.png";

const KraftPen = ({ addToCart }) => {
  // Predefined pack options with their total prices
  const packOptions = [
    { label: "Single", value: "Single", price: 120, quantity: 1 },
    { label: "Pack of 5", value: "Pack of 5", price: 550, quantity: 1 },
    { label: "Pack of 12", value: "Pack of 12", price: 1200, quantity: 1 },
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const unitPrice = 120; // Price per single pen (derived from "Single")

  const [selectedOption, setSelectedOption] = useState(packOptions[0]);
  const [customQuantity, setCustomQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Natural Bamboo");
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Calculate total price based on selection
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

  const handleAddToCart = () => {
    let item;
    if (selectedOption.value === "Custom") {
      item = {
        name: "Kraft Pen",
        image: mainImg,
        description: kraftDetails.description,
        features: kraftDetails.features,
        tags: kraftDetails.tags,
        selectedSize: `${customQuantity} pens`,
        selectedMaterial: selectedColor,
        selectedColor,
        price: price,
        quantity: customQuantity, // actual number of pens
      };
    } else {
      item = {
        ...kraftDetails,
        selectedSize: selectedOption.label,
        selectedMaterial: selectedColor,
        selectedColor,
        price: selectedOption.price,
        quantity: 1,
      };
    }
    addToCart(item);
    setSnackbarOpen(true);
  };

  const kraftDetails = {
    name: "Kraft Pen",
    image: mainImg,
    description:
      "Eco-friendly and stylish, this retractable ballpoint pen features a natural bamboo outer body with a sleek metal clip. Carved with unique inspirational sayings, it’s a meaningful gift designed to motivate and express care.",
    features: [
      "Natural Bamboo wood body with metal clip",
      "0.5 mm fine point for smooth writing",
      "Retractable design for convenience",
      "Carved with 12 different inspirational sayings",
      "Easy-to-replace pen refills",
      "Dimensions: 13.5 x 1.1 cm (approx 5.5 x 0.43 inches)",
      "Ink Color: Professional Blue",
    ],
    sizes: ["Single", "Pack of 5", "Pack of 12"],
    colors: ["Natural Bamboo"],
    extraImages: [img2, img3, img4, img5, img6],
    tags: ["Eco-Friendly", "Inspirational", "Bamboo Wood"],
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto", px: { xs: 2, md: 3 } }}>
      <Grid container spacing={4}>
        {/* Image Gallery (unchanged) */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2, borderRadius: "16px", boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)", bgcolor: "#fff" }}>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {kraftDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={tag === "Eco-Friendly" ? <Nature fontSize="small" /> : <WorkspacePremium fontSize="small" />}
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
                alt={kraftDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            <Box sx={{ display: "flex", gap: 2, mt: 2, overflowX: "auto", "&::-webkit-scrollbar": { display: "none" } }}>
              {kraftDetails.extraImages.map((img, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setMainImage(img)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border: mainImage === img ? "2px solid #70CB97" : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                  }}
                >
                  <img src={img} alt={`view ${idx + 1}`} style={{ width: "90px", height: "90px", borderRadius: "8px", objectFit: "cover" }} />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            {kraftDetails.name}
          </Typography>

          <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold", mb: 3, fontSize: { xs: "1.5rem", md: "2rem" } }}>
            ₹{price}
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {kraftDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Key Highlights:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {kraftDetails.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", color: "#5a6e7a" }}>
                  <span style={{ display: "inline-block", width: "6px", height: "6px", backgroundColor: "#70CB97", borderRadius: "50%", marginRight: "8px" }}></span>
                  {feature}
                </Typography>
              </li>
            ))}
          </Box>

          {/* Purchase Option (with Custom quantity) */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
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

          {/* Custom Quantity Input (only when Custom is selected) */}
          {selectedOption.value === "Custom" && (
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 1, color: "#19485D", fontWeight: 500 }}>
                Enter number of pens:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">pens</InputAdornment>,
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
                Unit price: ₹{unitPrice} per pen
              </Typography>
            </Box>
          )}

          {/* Color Options (only one, but keep consistent) */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {kraftDetails.colors.map((color, idx) => (
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

          <Typography variant="body2" sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}>
            * Perfect for Diwali, Birthdays, or Corporate inaugurations by PrintfrAll.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Kraft Pen added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default KraftPen;
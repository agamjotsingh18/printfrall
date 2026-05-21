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
import { AddShoppingCart, Close, Inventory, WorkspacePremium, AutoAwesome } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const GiftBoxes = ({ addToCart }) => {
  const boxTypes = {
    "Creator's Carton": {
      img: "creator's-carton.png",
      basePrice: 195,
      desc: "Versatile e-commerce packaging. Full colour print options for short or long runs. Available in 13+ standard sizes.",
      specs: ["Full colour single/double side", "Minimum order: 50 units", "Custom sizes for 1000+ units"],
    },
    "Magnetic Monarch": {
      img: "magnetic-monarch.png",
      basePrice: 450,
      desc: "Premium rigid luxury packaging. Concealed magnetic closure with a heavy-duty sturdy construction.",
      specs: ["Concealed Magnetic Mechanism", "Matte/Glossy Luxury Finish", "Ideal for Corporate & High-end Gifting"],
    },
    "Celebration Box": {
      img: "celebration-box.png",
      basePrice: 320,
      desc: "Decorative folding paper box with a signature satin ribbon. Available in 9 elegant shades.",
      specs: ["26 x 21 x 11 cm dimensions", "DIY Folding design", "Premium Satin Ribbon Included"],
    },
  };

  const colorOptions = [
    { name: "Forest Green", hex: "#2d5a27" },
    { name: "Luxury Black", hex: "#1a1a1a" },
    { name: "Royal Navy", hex: "#002366" },
    { name: "Crimson Red", hex: "#8b0000" },
    { name: "Midnight Grey", hex: "#2f4f4f" },
    { name: "Golden Sand", hex: "#c5a059" },
    { name: "Rose Pink", hex: "#e6a8d7" },
    { name: "Lavender", hex: "#967bb6" },
    { name: "Kraft Brown", hex: "#a68966" },
  ];

  const standardSizes = [
    "100x100x22mm",
    "150x120x50mm",
    "200x200x50mm",
    "230x230x80mm",
    "350x250x100mm",
    "500x500x150mm",
  ];

  const [selectedType, setSelectedType] = useState("Creator's Carton");
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);
  const [selectedSize, setSelectedSize] = useState(standardSizes[1]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = boxTypes[selectedType].basePrice;

  // Only pack options that meet minimum 50 units
  const packOptions = [
    { label: "Pack of 50", value: "Pack of 50", price: unitPrice * 50 * 0.9, quantity: 50 },
    { label: "Pack of 100", value: "Pack of 100", price: unitPrice * 100 * 0.85, quantity: 100 },
    { label: "Pack of 150", value: "Pack of 150", price: unitPrice * 150 * 0.8, quantity: 150 },
    { label: "Custom", value: "Custom", price: null, quantity: null },
  ];

  const [selectedOption, setSelectedOption] = useState("Pack of 50");
  const [customQuantity, setCustomQuantity] = useState(50); // minimum 50

  const getTotalPrice = () => {
    if (selectedOption === "Custom") {
      return unitPrice * customQuantity;
    }
    const option = packOptions.find((opt) => opt.value === selectedOption);
    return option ? option.price : unitPrice * 50;
  };

  const totalPrice = getTotalPrice();

  const handleOptionChange = (optionValue) => {
    setSelectedOption(optionValue);
    if (optionValue === "Custom") {
      setCustomQuantity((prev) => (prev < 50 ? 50 : prev));
    } else {
      const option = packOptions.find((opt) => opt.value === optionValue);
      if (option) setCustomQuantity(option.quantity);
    }
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption === "Custom") {
      item = {
        name: `Premium Box: ${selectedType}`,
        image: getCdnImage(boxTypes[selectedType].img, { width: 150, height: 150 }),
        description: boxTypes[selectedType].desc,
        specs: boxTypes[selectedType].specs,
        selectedSize: `${customQuantity} units (${selectedSize})`,
        selectedMaterial: `${selectedColor.name} | ${selectedType}`,
        selectedColor: selectedColor.name,
        selectedBoxType: selectedType,
        price: totalPrice,
        quantity: customQuantity,
      };
    } else {
      const option = packOptions.find((opt) => opt.value === selectedOption);
      item = {
        name: `Premium Box: ${selectedType}`,
        image: getCdnImage(boxTypes[selectedType].img, { width: 150, height: 150 }),
        description: boxTypes[selectedType].desc,
        specs: boxTypes[selectedType].specs,
        selectedSize: `${option.label} (${selectedSize})`,
        selectedMaterial: `${selectedColor.name} | ${selectedType}`,
        selectedColor: selectedColor.name,
        selectedBoxType: selectedType,
        price: option.price,
        quantity: option.quantity,
      };
    }
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  const boxTypesArray = Object.keys(boxTypes);

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto", px: { xs: 2, md: 3 } }}>
      <Grid container spacing={5}>
        {/* Left Side: Dynamic Gallery */}
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
            <Box sx={{ position: "absolute", top: 20, left: 20, zIndex: 10, display: "flex", gap: 1 }}>
              <Chip
                label="PREMIUM"
                size="small"
                icon={<WorkspacePremium />}
                sx={{ bgcolor: "#19485D", color: "white", fontWeight: "bold", borderRadius: "40px" }}
              />
              <Chip
                label="CUSTOMIZABLE"
                size="small"
                icon={<AutoAwesome />}
                sx={{ bgcolor: "#70CB97", color: "white", fontWeight: "bold", borderRadius: "40px" }}
              />
            </Box>

            <Zoom>
              <img
                src={getCdnImage(boxTypes[selectedType].img, { width: 600, height: 450 })}
                alt={`${selectedType} primary view`}
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

            <Typography variant="h6" sx={{ mt: 3, mb: 2, fontWeight: 700, color: "#19485D" }}>
              Infrastructure Selection:
            </Typography>
            <Grid container spacing={2}>
              {boxTypesArray.map((type) => (
                <Grid item xs={4} key={type}>
                  <Box
                    onClick={() => {
                      setSelectedType(type);
                      setSelectedOption("Pack of 50");
                      setCustomQuantity(50);
                    }}
                    sx={{
                      cursor: "pointer",
                      border: selectedType === type ? "2px solid #70CB97" : "1px solid #e0e7ed",
                      borderRadius: "12px",
                      overflow: "hidden",
                      transition: "all 0.2s",
                      "&:hover": { transform: "translateY(-3px)", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" },
                    }}
                  >
                    <img
                      src={getCdnImage(boxTypes[type].img, { width: 120, height: 100 })}
                      alt={`${type} option preview`}
                      width="120"
                      height="100"
                      loading="lazy"
                      style={{ width: "100%", height: "80px", objectFit: "cover" }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        textAlign: "center",
                        p: 0.5,
                        fontWeight: 600,
                        bgcolor: "#f8fafc",
                        color: "#19485D",
                      }}
                    >
                      {type.split(" ")[0]}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        {/* Right Side: Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            {selectedType}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{Math.round(totalPrice)}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (₹{unitPrice}/box • {selectedOption !== "Custom" ? selectedOption : `${customQuantity} units`})
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#5a6e7a", display: "block", mb: 2 }}>
            min. 50 units for custom runs
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {boxTypes[selectedType].desc}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Color Selection */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}>
            Select Brand Theme Color:
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
                  border: selectedColor.name === color.name ? "3px solid #70CB97" : "1px solid #d0d5dd",
                  boxShadow: selectedColor.name === color.name ? "0 0 0 2px #19485D" : "none",
                  transition: "all 0.2s",
                }}
                title={color.name}
              />
            ))}
          </Box>

          {/* Size Selection */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}>
            Standard Size Guide:
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mb: 4, flexWrap: "wrap" }}>
            {standardSizes.map((size) => (
              <Paper
                key={size}
                onClick={() => setSelectedSize(size)}
                sx={{
                  p: 1,
                  px: 2,
                  borderRadius: "40px",
                  cursor: "pointer",
                  bgcolor: selectedSize === size ? "#70CB97" : "#fff",
                  color: selectedSize === size ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  fontWeight: 600,
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedSize === size ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  {size}
                </Typography>
              </Paper>
            ))}
          </Box>

          {/* Purchase Quantity / Pack */}
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}>
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
                Enter number of boxes:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => {
                  let val = parseInt(e.target.value) || 50;
                  if (val < 50) val = 50;
                  setCustomQuantity(val);
                }}
                inputProps={{ min: 50 }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">units</InputAdornment>,
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
                Unit price: ₹{unitPrice} per box (minimum 50 boxes)
              </Typography>
            </Box>
          )}

          {/* Box Specifications */}
          <Paper sx={{ p: 3, bgcolor: "#f8fafc", mb: 4, borderRadius: "16px", border: "1px solid #e0e7ed" }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
              Build Specifications:
            </Typography>
            {boxTypes[selectedType].specs.map((spec, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Inventory sx={{ fontSize: 16, color: "#70CB97" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                  {spec}
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

          <Typography variant="caption" sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}>
            * Custom sizes available for orders exceeding 1000 units. Contact support for bulk logistics.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Premium Box configuration added to cart!"
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

export default GiftBoxes;
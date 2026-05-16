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
import { AddShoppingCart, Close, Description, WorkspacePremium } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN PRODUCT IMAGE ==========
import mainImg from "../assets/custom-letterheads.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/custom-letterheads.png";
import img3 from "../assets/custom-letterheads-1.png";
import img4 from "../assets/custom-letterheads-2.png";
import img5 from "../assets/custom-letterheads-3.png";

const CustomLetterheads = ({ addToCart }) => {
  const priceMapping = {
    "Premium Paper": 200,
    "Recycled Paper": 180,
    "Linen Paper": 250,
  };

  const defaultMaterial = "Premium Paper";

  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
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

  const productDetails = {
    name: "Custom Letterheads",
    image: mainImg,
    description:
      "Elevate your business correspondence with our high-quality custom letterheads. Designed to project professionalism, our letterheads provide a crisp, consistent brand image for all your official documents and communications.",
    features: [
      "Fully customizable designs with your logo and brand info",
      "High-resolution offset and digital printing quality",
      "Available in multiple premium paper weights and textures",
      "Standard A4 size (210 x 297 mm) for professional use",
      "Sharp color reproduction and text clarity",
      "Quick turnaround time for business urgent needs",
      "Compatible with most office laser and inkjet printers",
    ],
    materials: ["Premium Paper", "Recycled Paper", "Linen Paper"],
    extraImages: [img2, img3, img4, img5],
    tags: ["Professional", "Custom Design", "Corporate Identity"],
  };

  const handleAddToCart = () => {
    let item;
    if (selectedOption === "Custom") {
      item = {
        name: "Custom Letterheads",
        image: mainImg,
        description: productDetails.description,
        features: productDetails.features,
        tags: productDetails.tags,
        selectedSize: `${customQuantity} sheets`,
        selectedMaterial: selectedMaterial,
        price: price,
        quantity: customQuantity,
      };
    } else {
      const option = packOptions.find((opt) => opt.value === selectedOption);
      item = {
        ...productDetails,
        selectedSize: option.label,
        selectedMaterial: selectedMaterial,
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
              {productDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={tag === "Professional" ? <Description fontSize="small" /> : <WorkspacePremium fontSize="small" />}
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
            Key Features:
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

          {/* Paper Type Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Select Paper Type:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {productDetails.materials.map((material, idx) => (
              <Paper
                key={idx}
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

          {/* Purchase Quantity */}
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
                Enter number of sheets:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">sheets</InputAdornment>,
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
                Unit price: ₹{unitPrice} per sheet
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
            * Powered by PrintfrAll High-Resolution Business Printing Technology.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Letterhead added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default CustomLetterheads;
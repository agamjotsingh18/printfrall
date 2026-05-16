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
import { AddShoppingCart, Close, VpnKey, WorkspacePremium } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN PRODUCT IMAGE ==========
import mainImg from "../assets/keychain.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/keychain.png";
import img3 from "../assets/keychain-1.png";
import img4 from "../assets/keychain-2.png";
import img5 from "../assets/keychain-3.png";

const Keychains = ({ addToCart }) => {
  const priceMapping = {
    "Single Unit": 199,
    "Pack of 2": 350,
  };

  const availableMaterials = ["Metallic Leather", "Polished Metal"];

  const defaultOption = "Single Unit";
  const defaultMaterial = "Metallic Leather";

  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // Custom quantity state
  const [customQuantity, setCustomQuantity] = useState(1);
  const [isCustom, setIsCustom] = useState(false);

  const unitPrice = 199; // price of a single unit

  // Calculate total price based on selection
  const getTotalPrice = () => {
    if (isCustom) {
      return unitPrice * customQuantity;
    }
    return priceMapping[selectedOption];
  };

  const price = getTotalPrice();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsCustom(false);
    setCustomQuantity(1);
  };

  const handleCustomToggle = () => {
    setIsCustom(true);
    setSelectedOption(null);
  };

  const keychainDetails = {
    name: "Metallic Leather Keychain",
    image: mainImg,
    description:
      "Carry your keys in style with our elegant vintage-designed keychain. Specifically crafted for car and bike enthusiasts, this sturdy metallic leather accessory features a rich brown color and high-quality metal construction.",
    features: [
      "Premium Metallic Leather construction",
      "Elegant vintage design in a rich brown finish",
      "Customizable single-side laser engraving",
      "Sturdy metal build for daily wear and tear",
      "Lightweight, compact, and pocket-friendly",
      "Ideal for branding with car/bike logos or text",
      "Specially designed for Mahindra and bike lovers",
    ],
    sizes: ["Single Unit", "Pack of 2"],
    materials: availableMaterials,
    extraImages: [img2, img3, img4, img5],
    tags: ["Personalized", "Vintage Design", "Sturdy Build"],
  };

  const handleAddToCart = () => {
    let item;
    if (isCustom) {
      item = {
        name: "Metallic Leather Keychain",
        image: mainImg,
        description: keychainDetails.description,
        features: keychainDetails.features,
        tags: keychainDetails.tags,
        selectedSize: `${customQuantity} keychains`,
        selectedMaterial: selectedMaterial,
        price: price,
        quantity: customQuantity,
      };
    } else {
      item = {
        ...keychainDetails,
        selectedSize: selectedOption,
        selectedMaterial: selectedMaterial,
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
              {keychainDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={tag === "Personalized" ? <WorkspacePremium fontSize="small" /> : <VpnKey fontSize="small" />}
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
                alt={keychainDetails.name}
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
              {keychainDetails.extraImages.map((img, idx) => (
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
            {keychainDetails.name}
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
            {keychainDetails.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Specifications:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {keychainDetails.features.map((feature, idx) => (
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

          {/* Purchase Options */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Purchase Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            {keychainDetails.sizes.map((size) => (
              <Paper
                key={size}
                onClick={() => handleOptionChange(size)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: !isCustom && selectedOption === size ? "#70CB97" : "#fff",
                  color: !isCustom && selectedOption === size ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: !isCustom && selectedOption === size ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {size}
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
                Enter number of keychains:
              </Typography>
              <TextField
                type="number"
                value={customQuantity}
                onChange={(e) => setCustomQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                InputProps={{
                  endAdornment: <InputAdornment position="end">pcs</InputAdornment>,
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
                Unit price: ₹{unitPrice} per keychain
              </Typography>
            </Box>
          )}

          {/* Material Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Material Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {keychainDetails.materials.map((material, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedMaterial(material)}
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
            * Powered by PrintfrAll High-Resolution Laser Engraving Technology.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Keychain added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{ "& .MuiSnackbarContent-root": { backgroundColor: "#19485D", borderRadius: "40px" } }}
        action={<IconButton size="small" color="inherit" onClick={handleCloseSnackbar}><Close fontSize="small" /></IconButton>}
      />
    </Container>
  );
};

export default Keychains;
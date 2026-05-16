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
} from "@mui/material";
import { AddShoppingCart, Close, LocalDrink, AcUnit } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN BOTTLE IMAGE ==========
import mainImg from "../assets/supreme-blue-sipper.png";

// ========== EXTRA ANGLES ==========
import img2 from "../assets/supreme-blue-sipper.png";
import img3 from "../assets/supreme-blue-sipper-1.png";
import img4 from "../assets/supreme-blue-sipper-2.png";

const SupremeBlueSipper = ({ addToCart }) => {
  // Price mapping
  const priceMapping = {
    "750ml": 600,
  };

  // Available options
  const availableColors = ["Blue"];
  const defaultSize = "750ml";
  const defaultColor = "Blue";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const bottleDetails = {
    name: "Paramount Sipper - Blue",
    image: mainImg,
    description:
      "A summer buddy you can't live without. This vibrant blue Paramount Sipper is designed for high durability and professional style, making it the perfect choice for home, office, or outdoor use.",
    features: [
      "750 ML High Capacity",
      "Leak-proof and spill-proof cap design",
      "Refrigerator safe for keeping drinks chilled",
      "Durable, lightweight stainless steel construction",
      "Multicolour UV & Screen Printing options",
      "Custom logo/text print area: 1.5 x 3 inches",
    ],
    sizes: ["750ml"],
    colors: availableColors,
    extraImages: [img2, img3, img4],
    tags: ["Refrigerator Safe", "Leak-Proof", "Summer Buddy"],
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...bottleDetails,
      selectedSize,
      selectedColor,
      price,
      quantity: 1,
    };
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
            <Zoom>
              <img
                src={mainImage}
                alt={bottleDetails.name}
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
              {bottleDetails.extraImages.map((img, idx) => (
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
          {/* Tags */}
          <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
            {bottleDetails.tags.map((tag, idx) => (
              <Chip
                key={idx}
                label={tag}
                size="small"
                icon={tag === "Refrigerator Safe" ? <AcUnit fontSize="small" /> : <LocalDrink fontSize="small" />}
                sx={{
                  backgroundColor: "rgba(112, 203, 151, 0.1)",
                  color: "#70CB97",
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              />
            ))}
          </Box>

          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 2, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            {bottleDetails.name}
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
            {bottleDetails.description}
          </Typography>

          {/* Product Highlights */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Product Highlights:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {bottleDetails.features.map((feature, idx) => (
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

          {/* Color Options */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {bottleDetails.colors.map((color, idx) => (
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

          {/* Capacity */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Capacity:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {bottleDetails.sizes.map((size, idx) => (
              <Paper
                key={idx}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  backgroundColor: "#70CB97",
                  color: "white",
                  border: "1px solid #e0e7ed",
                }}
              >
                {size}
              </Paper>
            ))}
          </Box>

          {/* Add to Cart Button */}
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
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", md: "auto" },
              transition: "all 0.2s ease",
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>

          <Typography variant="body2" sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}>
            * Personalization powered by PrintfrAll High-Resolution Custom Printing.
          </Typography>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Item added to cart!"
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

export default SupremeBlueSipper;
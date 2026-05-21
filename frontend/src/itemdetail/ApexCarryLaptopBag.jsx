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
import { AddShoppingCart, Close, Business } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ApexCarryLaptopBag = ({ addToCart }) => {
  const priceMapping = {
    "15-inch": 2499,
    "17-inch": 2799,
  };

  const availableColors = ["Black", "Charcoal Grey", "Navy Blue"];
  const defaultSize = "15-inch";
  const defaultColor = "Black";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const apexBagDetails = {
    name: "Apex Carry Laptop Bag",
    description:
      "Premium professional laptop bag with superior protection and organization. Features a padded laptop compartment, multiple pockets, and a sleek design perfect for business professionals.",
    features: [
      "Padded laptop compartment (fits up to selected size)",
      "Water-resistant polyester fabric",
      "Multiple organizational pockets",
      "Padded shoulder strap for comfort",
      "Durable zippers and reinforced stitching",
      "Corporate branding options available",
    ],
    sizes: ["15-inch", "17-inch"],
    images: [
      "apex-carry-laptop-bag.png",
      "apex-carry-laptop-bag-1.png",
      "apex-carry-laptop-bag-2.png",
      "apex-carry-laptop-bag-3.png",
    ],
    tags: ["Professional", "Durable", "Premium"],
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      name: apexBagDetails.name,
      image: getCdnImage(apexBagDetails.images[0], { width: 150, height: 150 }),
      description: apexBagDetails.description,
      selectedSize,
      selectedMaterial: selectedColor,
      selectedColor,
      price,
      quantity: 1,
    };
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
      <Grid container spacing={4}>
        {/* Image Gallery */}
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
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {apexBagDetails.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Professional" ? <Business fontSize="small" /> : null}
                  sx={{
                    backgroundColor: "#19485D",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              ))}
            </Box>

            <Zoom>
              <img
                src={getCdnImage(apexBagDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${apexBagDetails.name} primary view`}
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
              {apexBagDetails.images.map((imageName, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      activeImageIndex === idx
                        ? "2px solid #70CB97"
                        : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${apexBagDetails.name} thumbnail view ${idx + 1}`}
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
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#19485D",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {apexBagDetails.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#70CB97",
              fontWeight: "bold",
              mb: 3,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            ₹{price}
          </Typography>

          <Typography
            variant="body1"
            sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}
          >
            {apexBagDetails.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Features:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {apexBagDetails.features.map((feature, idx) => (
              <li key={idx} style={{ marginBottom: "8px" }}>
                <Typography
                  variant="body1"
                  sx={{ display: "flex", alignItems: "center", color: "#5a6e7a" }}
                >
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

          {/* Sizes */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Available Sizes:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {apexBagDetails.sizes.map((size, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedSize(size)}
                sx={{
                  p: 1.5,
                  px: 2.5,
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

          {/* Colors */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableColors.map((color, idx) => (
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

          <Typography
            variant="body2"
            sx={{
              mt: 2,
              color: "#5a6e7a",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            * Includes 1-year warranty against manufacturing defects
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Apex Carry Laptop Bag added to cart!"
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

export default ApexCarryLaptopBag;
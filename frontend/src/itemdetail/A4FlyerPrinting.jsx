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
} from "@mui/material";
import { AddShoppingCart, Close } from "@mui/icons-material";
import { getCdnImage } from "../utils/imageLoader";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const A4FlyerPrinting = ({ addToCart }) => {
  const priceMapping = {
    "Glossy Paper": 50,
    "Matte Paper": 60,
    "Premium Paper": 70,
  };

  const defaultMaterial = "Glossy Paper";
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  
  // Track selected thumbnail index instead of raw imported objects
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const a4FlyerDetails = {
    name: "A4 Flyer Printing",
    description:
      "High-quality A4 flyers for all your marketing needs. Perfect for events, promotions, and branding campaigns.",
    features: [
      "High-resolution printing",
      "Custom designs",
      "Quick turnaround time",
      "Durable and vibrant prints",
    ],
    materials: ["Glossy Paper", "Matte Paper", "Premium Paper"],
    // Clean strings representing filename keys for CDN delivery
    images: [
      "a4-flyer-1-flatlay.png",
      "a4-flyer-2-hand.png",
      "a4-flyer-3-folded.png",
      "a4-flyer-4-stack.png",
      "a4-flyer-5-closeup.png"
    ]
  };

  const price = priceMapping[selectedMaterial];

  const handleAddToCart = () => {
    const item = {
      name: a4FlyerDetails.name,
      image: getCdnImage(a4FlyerDetails.images[0], { width: 150, height: 150 }),
      description: a4FlyerDetails.description,
      selectedMaterial,
      price,
      quantity: 1,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto" }}>
      <Grid container spacing={4}>
        {/* Image Gallery Section */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 2,
              borderRadius: "16px",
              boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.08)",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Main Display Image */}
            <Zoom>
              <img
                src={getCdnImage(a4FlyerDetails.images[activeImageIndex], { width: 600, height: 450 })}
                alt={`${a4FlyerDetails.name} primary view`}
                width="600"
                height="450"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "cover",
                  transition: "transform 0.2s ease",
                }}
              />
            </Zoom>

            {/* Thumbnail Carousel Strip */}
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
              {a4FlyerDetails.images.map((imageName, index) => (
                <Paper
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    border:
                      activeImageIndex === index
                        ? `2px solid #70CB97`
                        : "2px solid transparent",
                    "&:hover": { border: "2px solid #70CB97" },
                    flexShrink: 0,
                    transition: "all 0.2s ease",
                  }}
                >
                  <img
                    src={getCdnImage(imageName, { width: 90, height: 90 })}
                    alt={`${a4FlyerDetails.name} thumbnail view ${index + 1}`}
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

        {/* Product Details Section */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#19485D",
              letterSpacing: "-0.5px",
            }}
          >
            {a4FlyerDetails.name}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: "#70CB97",
              fontWeight: "bold",
              mb: 3,
            }}
          >
            ₹{price}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: "#1e2a32",
              lineHeight: 1.6,
            }}
          >
            {a4FlyerDetails.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
            }}
          >
            Features:
          </Typography>
          <Box
            component="ul"
            sx={{
              ml: 2,
              mb: 3,
              pl: 2,
            }}
          >
            {a4FlyerDetails.features.map((feature, index) => (
              <li key={index}>
                <Typography variant="body1" sx={{ color: "#5a6e7a", mb: 0.5 }}>
                  {feature}
                </Typography>
              </li>
            ))}
          </Box>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
            }}
          >
            Available Materials:
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 4,
              flexWrap: "wrap",
            }}
          >
            {a4FlyerDetails.materials.map((material, index) => (
              <Paper
                key={index}
                onClick={() => setSelectedMaterial(material)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
                  cursor: "pointer",
                  backgroundColor:
                    selectedMaterial === material ? "#70CB97" : "#ffffff",
                  color: selectedMaterial === material ? "#ffffff" : "#19485D",
                  border:
                    selectedMaterial === material
                      ? "1px solid #70CB97"
                      : "1px solid #e0e7ed",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    backgroundColor:
                      selectedMaterial === material ? "#5cb67f" : "#f0f9f3",
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
              fontSize: "16px",
              padding: "12px 28px",
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
                boxShadow: "0px 6px 16px rgba(112, 203, 151, 0.4)",
              },
              width: { xs: "100%", md: "auto" },
              transition: "all 0.2s ease",
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Item added to cart!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#19485D",
            color: "white",
            fontWeight: 500,
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

export default A4FlyerPrinting;
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
import { AddShoppingCart, Close, Description } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== YOUR GENERATED CERTIFICATE IMAGES ==========
import mainImg from "../assets/certificate-1.jpeg";
import img2 from "../assets/certificate-2.png";
import img3 from "../assets/certificate-3.png";
import img4 from "../assets/certificate-4.png";
import img5 from "../assets/certificate-5.png";
// ======================================================

const Certificates = ({ addToCart }) => {
  const priceMapping = {
    A4: 199,
    A5: 149,
    Letter: 179,
  };

  const availableFinishes = ["Matte", "Glossy", "Parchment", "Premium Textured"];
  const defaultSize = "A4";
  const defaultFinish = "Matte";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedFinish, setSelectedFinish] = useState(defaultFinish);
  const [mainImage, setMainImage] = useState(mainImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const certificateDetails = {
    name: "Custom Corporate Certificates",
    image: mainImg,
    description:
      "Elegant and professional certificates for corporate recognition, employee awards, training completion, and special achievements. Fully customizable with your branding and text.",
    features: [
      "Custom design and text",
      "Premium paper options",
      "Gold/silver foil options",
      "Corporate branding",
      "Bulk order discounts",
      "Quick turnaround",
      "Eco-friendly options",
    ],
    sizes: ["A4", "A5", "Letter"],
    extraImages: [img2, img3, img4, img5],
    tags: ["Formal", "Recognition", "Elegant"],
  };

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...certificateDetails,
      selectedSize,
      selectedFinish,
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
              {certificateDetails.tags.map((tag, index) => (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  icon={tag === "Formal" ? <Description fontSize="small" /> : null}
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
                src={mainImage}
                alt={certificateDetails.name}
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
              }}
            >
              {certificateDetails.extraImages.map((img, idx) => (
                <Paper
                  key={idx}
                  onClick={() => setMainImage(img)}
                  sx={{
                    p: 1,
                    borderRadius: "10px",
                    cursor: "pointer",
                    border:
                      mainImage === img
                        ? "2px solid #70CB97"
                        : "2px solid transparent",
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
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#19485D",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {certificateDetails.name}
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
            {certificateDetails.description}
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
            {certificateDetails.features.map((feature, idx) => (
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
            {certificateDetails.sizes.map((size, idx) => (
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

          {/* Finish Options */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "#19485D",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Finish Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {availableFinishes.map((finish, idx) => (
              <Paper
                key={idx}
                onClick={() => setSelectedFinish(finish)}
                sx={{
                  p: 1.5,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedFinish === finish ? "#70CB97" : "#fff",
                  color: selectedFinish === finish ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  "&:hover": {
                    bgcolor: selectedFinish === finish ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {finish}
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
            sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", fontWeight: 500 }}
          >
            * Minimum order of 10 certificates required
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Certificate added to cart!"
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

export default Certificates;
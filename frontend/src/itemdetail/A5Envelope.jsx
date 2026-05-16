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
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== YOUR GENERATED ENVELOPE IMAGES ==========
import a5EnvelopeMain from "../assets/a5-envelope-1-flatlay.png";
import a5EnvelopeTilted from "../assets/a5-envelope-2-tilted.png";
import a5EnvelopeOpen from "../assets/a5-envelope-3-open.png";
import a5EnvelopeStack from "../assets/a5-envelope-4-stack.png";
import a5EnvelopeCloseup from "../assets/a5-envelope-5-closeup.png";
// ====================================================

const A5Envelope = ({ addToCart }) => {
  const priceMapping = {
    "White Paper": 60,
    "Ivory Paper": 70,
    "Recycled Paper": 80,
  };

  const defaultMaterial = "White Paper";
  const [selectedMaterial, setSelectedMaterial] = useState(defaultMaterial);
  const [mainImage, setMainImage] = useState(a5EnvelopeMain);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const a5EnvelopeDetails = {
    name: "A5 Envelope",
    image: a5EnvelopeMain,
    description:
      "Our A5 Envelopes are perfect for mailing invitations, brochures, and other documents. Available in a variety of materials to suit your needs.",
    features: [
      "Standard A5 size (5.8 x 8.3 inches)",
      "High-quality paper",
      "Available in multiple materials",
      "Ideal for invitations and brochures",
    ],
    materials: ["White Paper", "Ivory Paper", "Recycled Paper"],
    extraImages: [a5EnvelopeTilted, a5EnvelopeOpen, a5EnvelopeStack, a5EnvelopeCloseup],
  };

  const price = priceMapping[selectedMaterial];

  const handleAddToCart = () => {
    const item = {
      ...a5EnvelopeDetails,
      selectedMaterial,
      price,
      quantity: 1,
    };
    addToCart(item);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => setSnackbarOpen(false);

  return (
    <Container sx={{ py: 6, maxWidth: 1200, margin: "40px auto 0 auto" }}>
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
                alt={a5EnvelopeDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  cursor: "zoom-in",
                  maxHeight: "400px",
                  objectFit: "cover",
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
              {a5EnvelopeDetails.extraImages.map((img, idx) => (
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
                  <img
                    src={img}
                    alt={`view ${idx + 1}`}
                    style={{ width: "90px", height: "90px", borderRadius: "8px", objectFit: "cover" }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
            {a5EnvelopeDetails.name}
          </Typography>
          <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold", mb: 3 }}>
            ₹{price}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {a5EnvelopeDetails.description}
          </Typography>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D" }}>
            Features:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3 }}>
            {a5EnvelopeDetails.features.map((f, i) => (
              <li key={i}>
                <Typography variant="body1" sx={{ color: "#5a6e7a" }}>{f}</Typography>
              </li>
            ))}
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "#19485D" }}>
            Available Materials:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {a5EnvelopeDetails.materials.map((material, idx) => (
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
              fontSize: "16px",
              padding: "12px 28px",
              borderRadius: "40px",
              textTransform: "none",
              boxShadow: "0px 4px 12px rgba(112, 203, 151, 0.3)",
              "&:hover": {
                background: "#5cb67f",
                transform: "translateY(-2px)",
              },
              width: { xs: "100%", md: "auto" },
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

export default A5Envelope;
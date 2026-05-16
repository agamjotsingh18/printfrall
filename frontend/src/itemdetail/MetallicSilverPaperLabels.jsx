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
} from "@mui/material";
import {
  AddShoppingCart,
  Close,
  Inventory,
  WorkspacePremium,
  AutoAwesome,
} from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// Import your actual silver label images – replace with real variants if available
import metallicSilverPaperLabelsImg from "../assets/metallic-silver-paper-labels.png";
import metallicSilverPaperLabelsImg2 from "../assets/metallic-silver-paper-labels-1.png";
import metallicSilverPaperLabelsImg3 from "../assets/metallic-silver-paper-labels-2.png";
import metallicSilverPaperLabelsImg4 from "../assets/metallic-silver-paper-labels-3.png";
// import metallicSilverPaperLabelsImg5 from "../assets/metallic-silver-paper-labels.png";

const MetallicSilverPaperLabels = ({ addToCart }) => {
  // Price mapping for premium 80 GSM Silver Paper labels
  const priceMapping = {
    "Subtle Sleek Silver": 150,
    "Brushed Metallic Silver": 180,
    "Polished Silver Finish": 165,
  };

  const shapes = ["Circle", "Oval", "Square", "Rectangle", "Rounded Corner", "Custom", "Leaf"];

  const [selectedMaterial, setSelectedMaterial] = useState("Subtle Sleek Silver");
  const [selectedShape, setSelectedShape] = useState("Circle");
  const [mainImage, setMainImage] = useState(metallicSilverPaperLabelsImg);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const unitPrice = priceMapping[selectedMaterial];
  const moq = 50;
  const totalPrice = unitPrice * moq;

  const productDetails = {
    name: "Metallic Silver Paper Labels",
    description:
      "Bring a touch of sophistication and shine with labels that gleam in silver. Crafted from premium 80 GSM silver sticker paper with a sleek, subtle finish, these labels are designed to add an elegant and polished look to luxury product packaging, branding materials, and special occasions.",
    features: [
      "Material: Premium 80 GSM Silver Sticker Paper",
      "Finish: Sleek, subtle metallic shine for a polished look",
      "Adhesive: High-quality self-adhesive backing for secure labeling",
      "Format: Delivered in convenient sheets for easy handling",
      "Versatility: 7 different shapes and 10+ sizes available",
      "Branding: Ideal for premium goods, invitations, and retail",
      "Low MOQ: Start your sophisticated branding with just 50 labels",
    ],
    tags: ["80 GSM", "Subtle Shine", "Self-Adhesive"],
  };

  const thumbnailImages = [
    metallicSilverPaperLabelsImg,
    metallicSilverPaperLabelsImg2,
    metallicSilverPaperLabelsImg3,
    metallicSilverPaperLabelsImg4,
  ];

  const handleAddToCart = () => {
    const item = {
      name: productDetails.name,
      image: mainImage,
      description: productDetails.description,
      selectedMaterial,
      selectedShape,
      price: totalPrice,
      quantity: moq,
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
      <Grid container spacing={5}>
        {/* Left Side: Gallery */}
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
            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                zIndex: 10,
                display: "flex",
                gap: 1,
              }}
            >
              <Chip
                label="80 GSM"
                size="small"
                icon={<WorkspacePremium />}
                sx={{
                  bgcolor: "#19485D",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
              <Chip
                label="SILVER SHINE"
                size="small"
                icon={<AutoAwesome />}
                sx={{
                  bgcolor: "#70CB97",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "40px",
                }}
              />
            </Box>

            <Zoom>
              <img
                src={mainImage}
                alt={productDetails.name}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  height: "450px",
                  objectFit: "contain",
                }}
              />
            </Zoom>

            {/* Thumbnails */}
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 2,
                overflowX: "auto",
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {thumbnailImages.map((image, index) => (
                <Paper
                  key={index}
                  onClick={() => setMainImage(image)}
                  sx={{
                    p: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    border:
                      mainImage === image ? "2px solid #70CB97" : "1px solid #e0e7ed",
                    flexShrink: 0,
                    transition: "all 0.2s",
                    "&:hover": { transform: "translateY(-2px)" },
                  }}
                >
                  <img
                    src={image}
                    alt={`View ${index + 1}`}
                    style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "8px" }}
                  />
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Right Side: Details */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: "#19485D",
              fontSize: { xs: "1.8rem", md: "2.5rem" },
            }}
          >
            {productDetails.name}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "baseline", gap: 2, flexWrap: "wrap", mb: 1 }}>
            <Typography variant="h5" sx={{ color: "#70CB97", fontWeight: "bold" }}>
              ₹{totalPrice}
            </Typography>
            <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
              (₹{unitPrice}/label • Pack of {moq})
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: "#5a6e7a", display: "block", mb: 2 }}>
            Minimum order: {moq} units
          </Typography>

          <Typography variant="body1" sx={{ mb: 3, color: "#1e2a32", lineHeight: 1.6 }}>
            {productDetails.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* Silver Finish Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Select Silver Finish:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {Object.keys(priceMapping).map((material) => (
              <Paper
                key={material}
                onClick={() => setSelectedMaterial(material)}
                sx={{
                  p: 1.5,
                  px: 3,
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

          {/* Shape Selection */}
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: "1.1rem" }}
          >
            Choose Label Shape:
          </Typography>
          <Box sx={{ display: "flex", gap: 1.5, mb: 4, flexWrap: "wrap" }}>
            {shapes.map((shape) => (
              <Paper
                key={shape}
                onClick={() => setSelectedShape(shape)}
                sx={{
                  p: 1,
                  px: 2.5,
                  borderRadius: "40px",
                  textAlign: "center",
                  fontWeight: 600,
                  cursor: "pointer",
                  bgcolor: selectedShape === shape ? "#70CB97" : "#fff",
                  color: selectedShape === shape ? "#fff" : "#19485D",
                  border: "1px solid #e0e7ed",
                  transition: "all 0.2s",
                  fontSize: "0.85rem",
                  "&:hover": {
                    bgcolor: selectedShape === shape ? "#5cb67f" : "#f0f9f3",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                {shape}
              </Paper>
            ))}
          </Box>

          {/* Specifications Panel */}
          <Paper
            sx={{
              p: 3,
              bgcolor: "#f8fafc",
              mb: 4,
              borderRadius: "16px",
              border: "1px solid #e0e7ed",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: "#19485D" }}>
              Premium Highlights:
            </Typography>
            {productDetails.features.map((feature, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <Inventory sx={{ fontSize: 16, color: "#70CB97" }} />
                <Typography variant="body2" sx={{ color: "#5a6e7a" }}>
                  {feature}
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
            Add Pack of {moq} to Cart – ₹{totalPrice}
          </Button>

          <Typography
            variant="caption"
            sx={{ display: "block", mt: 2, textAlign: "center", color: "#5a6e7a" }}
          >
            * Sleek branding solutions powered by PrintfrAll Silver Paper Technology.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={`✓ Pack of ${moq} Silver Labels added to cart!`}
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

export default MetallicSilverPaperLabels;
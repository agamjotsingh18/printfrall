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
  Dialog,
  DialogContent,
  IconButton as MuiIconButton,
} from "@mui/material";
import { AddShoppingCart, Close, Security, OpenInFull, PlayCircleOutline } from "@mui/icons-material";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

// ========== MAIN BAG IMAGE ==========
import mainImg from "../assets/vanguard-laptop-bag.png";

// ========== EXTRA ANGLES (images + one video) ==========
import img2 from "../assets/vanguard-laptop-bag.png";
import video1 from "../assets/vanguard-laptop-bag-01.mp4";
import img4 from "../assets/vanguard-laptop-bag-1.png";
import img5 from "../assets/vanguard-laptop-bag-2.png";
import img6 from "../assets/vanguard-laptop-bag-3.png";
import img7 from "../assets/vanguard-laptop-bag-4.png";

// Helper to check if a file is a video
const isVideoFile = (src) => {
  return src && (src.endsWith('.mp4') || src.endsWith('.webm') || src.endsWith('.ogg'));
};

const VanguardLaptopBag = ({ addToCart }) => {
  const priceMapping = {
    "30 Litres": 3400,
  };

  const availableColors = ["Stealth Black", "Urban Grey"];
  const defaultSize = "30 Litres";
  const defaultColor = "Stealth Black";

  const [selectedSize, setSelectedSize] = useState(defaultSize);
  const [selectedColor, setSelectedColor] = useState(defaultColor);
  const [mainMedia, setMainMedia] = useState(mainImg);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const bagDetails = {
    name: "Vanguard Laptop Bag",
    image: mainImg,
    description:
      "A versatile 30L powerhouse designed for the modern commuter. Featuring a 180° fully opening main compartment, this bag offers complete access for effortless packing of your laptop, iPad, and daily essentials.",
    features: [
      "180° Full-access opening for easy packing",
      "Padded shockproof sleeve for 15.6 inch laptops",
      "Built-in USB charging system (connect powerbank inside)",
      "Removable & washable pocket for shoes/tiffin",
      "Anti-theft back pocket & water-resistant polyester",
      "Spacious 30L capacity with compact design",
      "Front organizer for pens, cables, and chargers",
    ],
    sizes: ["30 Litres"],
    colors: availableColors,
    extraImages: [img2, video1, img4, img5, img6, img7],
    tags: ["Anti-Theft", "30L Capacity", "180° Open"],
  };

  const allImages = bagDetails.extraImages.filter(src => !isVideoFile(src));
  const allMedia = bagDetails.extraImages;

  const price = priceMapping[selectedSize];

  const handleAddToCart = () => {
    const item = {
      ...bagDetails,
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
  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);

  // Render main media (image with Zoom and click lightbox, or video with controls)
  const renderMainMedia = () => {
    if (isVideoFile(mainMedia)) {
      return (
        <video
          controls
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            borderRadius: "12px",
            maxHeight: "400px",
            objectFit: "contain",
          }}
        >
          <source src={mainMedia} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <Box onClick={openLightbox} sx={{ cursor: "pointer" }}>
          <Zoom zoomMargin={40}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                border: "1px solid #e2e8f0",
              }}
            >
              <img
                src={mainMedia}
                alt={bagDetails.name}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "500px",
                  objectFit: "contain",
                  display: "block",
                  pointerEvents: "none", // prevents Zoom from capturing click
                }}
              />
            </Box>
          </Zoom>
        </Box>
      );
    }
  };

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
              {bagDetails.tags.map((tag, idx) => (
                <Chip
                  key={idx}
                  label={tag}
                  size="small"
                  icon={
                    tag === "180° Open" ? (
                      <OpenInFull fontSize="small" />
                    ) : tag === "Anti-Theft" ? (
                      <Security fontSize="small" />
                    ) : null
                  }
                  sx={{
                    backgroundColor: "rgba(112, 203, 151, 0.1)",
                    color: "#70CB97",
                    fontWeight: "bold",
                    borderRadius: 2,
                  }}
                />
              ))}
            </Box>

            {/* Main Media Display */}
            {renderMainMedia()}

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
              {allMedia.map((media, idx) => {
                const isVideo = isVideoFile(media);
                return (
                  <Paper
                    key={idx}
                    onClick={() => setMainMedia(media)}
                    sx={{
                      p: 1,
                      borderRadius: "10px",
                      cursor: "pointer",
                      border:
                        mainMedia === media ? "2px solid #70CB97" : "2px solid transparent",
                      "&:hover": { border: "2px solid #70CB97" },
                      flexShrink: 0,
                      transition: "all 0.2s",
                      position: "relative",
                    }}
                  >
                    {isVideo ? (
                      <>
                        <video
                          src={media}
                          style={{
                            width: "90px",
                            height: "90px",
                            borderRadius: "8px",
                            objectFit: "cover",
                          }}
                          muted
                        />
                        <PlayCircleOutline
                          sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "white",
                            fontSize: "2rem",
                            textShadow: "0 0 5px black",
                            pointerEvents: "none",
                          }}
                        />
                      </>
                    ) : (
                      <img
                        src={media}
                        alt={`view ${idx + 1}`}
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "8px",
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Paper>
                );
              })}
            </Box>

            {/* Lightbox Dialog for Images Only */}
            <Dialog
              open={lightboxOpen}
              onClose={closeLightbox}
              maxWidth="lg"
              fullWidth
              scroll="paper"
              PaperProps={{
                sx: {
                  backgroundColor: "rgba(0,0,0,0.9)",
                  boxShadow: "none",
                },
              }}
            >
              <DialogContent
                sx={{
                  p: 0,
                  position: "relative",
                  minHeight: "60vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MuiIconButton
                  onClick={closeLightbox}
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    color: "white",
                    zIndex: 10,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                  }}
                >
                  <Close />
                </MuiIconButton>
                <img
                  src={mainMedia}
                  alt="Full size"
                  style={{
                    maxWidth: "90%",
                    maxHeight: "80vh",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "8px",
                  }}
                />
              </DialogContent>
            </Dialog>
          </Paper>
        </Grid>

        {/* Product Details (unchanged) */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 700, mb: 1, color: "#19485D", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            {bagDetails.name}
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
            {bagDetails.description}
          </Typography>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Key Highlights:
          </Typography>
          <Box component="ul" sx={{ ml: 2, mb: 3, listStyleType: "none", p: 0 }}>
            {bagDetails.features.map((feature, idx) => (
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

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Storage Capacity:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4 }}>
            <Paper
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
              {selectedSize}
            </Paper>
          </Box>

          <Typography
            variant="h6"
            sx={{ fontWeight: 600, mb: 2, color: "#19485D", fontSize: { xs: "1.2rem", md: "1.5rem" } }}
          >
            Color Options:
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
            {bagDetails.colors.map((color, idx) => (
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
            sx={{ mt: 2, color: "#5a6e7a", fontStyle: "italic", textAlign: "center" }}
          >
            * Includes 1 year manufacturer warranty. Perfect for corporate gifting.
          </Typography>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message="✓ Vanguard Bag added to cart!"
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

export default VanguardLaptopBag;
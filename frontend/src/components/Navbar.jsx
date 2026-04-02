import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
  InputBase,
  Paper,
  Collapse,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import products from "../data/AllProducts";
import logo from "../assets/long-white.svg";
import logop from "../assets/long.png";

const Navbar = ({ cartItems, addToCart, removeFromCart }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchInputRef = useRef(null);
  const searchResultsRef = useRef(null); // Ref for the search results dropdown

  const theme = useTheme();
  const isIpadView = useMediaQuery(theme.breakpoints.between("sm", "md")); 

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery("");
    setSearchResults([]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const handlePhoneClick = (event) => {
    event.stopPropagation(); // Prevent drawer from closing
    window.location.href = "tel:9319042075"; // Redirect to phone call
  };

  const handleEmailClick = (event) => {
    event.stopPropagation(); // Prevent drawer from closing
    window.location.href = "mailto:printfrall@gmail.com"; 
  };

  // Close search results dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target) &&
        !searchInputRef.current.contains(event.target)
      ) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto-focus on search input when search bar opens
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const drawerContent = () => (
    <Box
      sx={{
        width: 280,
        background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      {/* Logo */}
      <Box sx={{ textAlign: "center", p: 2 }}>
  <img src={logop} alt="Printfrall Logo" style={{ height: "20px" }} />
</Box>

      {/* Navigation Links */}
      <List sx={{ flex: 1 }}>
        <ListItem
          button
          component={Link}
          to="/"
          sx={{ "&:hover": { background: "#ff6600", color: "white" } }}
          onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
        >
          <ListItemText primary="Home" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>

        {/* Services Dropdown */}
        <ListItem
          button
          component={Link}
          to="/services"
          sx={{ "&:hover": { background: "#ff6600", color: "white" } }}
          onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
        >
          <ListItemText primary="Services" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/portfolio"
          sx={{ "&:hover": { background: "#ff6600", color: "white" } }}
          onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
        >
          <ListItemText primary="Portfolio" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          sx={{ "&:hover": { background: "#ff6600", color: "white" } }}
          onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
        >
          <ListItemText primary="About" sx={{ color: "#333", fontWeight: 600 }} />
        </ListItem>
        <ListItem>
          {/* Search Bar for Mobile */}
          <Box sx={{ p: 2 }} onClick={(e) => e.stopPropagation()}>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "25px",
                p: "2px 10px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
              onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
            >
              <InputBase
                placeholder="Search products..."
                sx={{ ml: 1, flex: 1, color: "#333" }}
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                inputRef={searchInputRef}
                onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
              />
              <IconButton
                onClick={(e) => {
                  e.stopPropagation(); // Prevent drawer from closing
                  toggleSearch();
                }}
                sx={{ color: "#333" }}
              >
                <SearchIcon />
              </IconButton>
            </Paper>

            {/* Search Results Dropdown */}
            {searchQuery && (
              <Box
                sx={{
                  mt: 2,
                  background: "white",
                  color: "black",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
                onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
              >
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderBottom: "1px solid #ddd",
                          "&:hover": { background: "#f9f9f9" },
                        }}
                      >
                        <Typography>{result.name}</Typography>
                      </Box>
                    </Link>
                  ))
                ) : (
                  <Box sx={{ p: 2 }}>
                    <Typography>No results found</Typography>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </ListItem>
      </List>

      <hr style={{ border: "1px solid #ddd", margin: "20px auto", width: "75%" }} />

      {/* Contact Section */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>
          Need Assistance?
        </Typography>
        <Button
          variant="contained"
          startIcon={<WhatsAppIcon />}
          sx={{
            background: "#28D146",
            color: "white",
            textTransform: "none",
            mb: 2,
            width: "100%",
            "&:hover": { background: "#1e9c3a" },
          }}
          href="https://wa.me/9319042075"
          target="_blank"
          onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
        >
          WhatsApp Us
        </Button>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1, cursor: "pointer" }}
          onClick={handlePhoneClick}
        >
          <PhoneIcon sx={{ color: "#333" }} />
          <Typography variant="body1" sx={{ color: "#333" }}>
            9319042075
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, cursor: "pointer" }}
          onClick={handleEmailClick}
        >
          <EmailIcon sx={{ color: "#333" }} />
          <Typography variant="body1" sx={{ color: "#333" }}>
            printfrall@gmail.com
          </Typography>
        </Box>
      </Box>

      <hr style={{ border: "1px solid #ddd", margin: "20px auto", width: "75%" }} />

      {/* Additional Links */}
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: "#333", fontWeight: "bold", mb: 2 }}>
          Who are we?
        </Typography>
        <List>
          <ListItem
            button
            component={Link}
            to="/about"
            sx={{ "&:hover": { background: "#ff6600", color: "white" } }}
            onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
          >
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/portfolio"
            sx={{ "&:hover": { background: "#ff6600", color: "white" } }}
            onClick={(e) => e.stopPropagation()} // Prevent drawer from closing
          >
            <ListItemText primary="Work Portfolio" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{ background: "linear-gradient(135deg, #ff6600, #ff8c42)", boxShadow: "none" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
    <img src={logo} alt="PrintfrAll Logo" style={{ height: "26px", marginRight: "10px" }} />
  </Box>

          {/* Cart Icon for Mobile */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", gap: 1 }}>
            <IconButton
              component={Link}
              to="/cart"
              sx={{ color: "white", "&:hover": { transform: "scale(1.1)" } }}
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Navigation Links for Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 3,
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/services"
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Services
            </Button>
            <Button
              component={Link}
              to="/portfolio"
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              Portfolio
            </Button>
            <Button
              component={Link}
              to="/about"
              sx={{
                color: "white",
                fontSize: "16px",
                textTransform: "none",
                "&:hover": { background: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              About
            </Button>
          </Box>

          {/* Search Icon and Search Bar for Desktop */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
              position: "relative",
            }}
            onMouseEnter={() => setIsSearchOpen(true)}
            onMouseLeave={() => {
              if (!searchQuery) setIsSearchOpen(false);
            }}
          >
            <IconButton
              onClick={() => {
                toggleSearch();
                if (isSearchOpen) {
                  setSearchQuery("");
                  setSearchResults([]);
                }
              }}
              sx={{ color: "white" }}
            >
              {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            </IconButton>
            <Collapse in={isSearchOpen} orientation="horizontal">
              <Paper
                component="form"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: isIpadView ? "200px" : "300px", // Adjust width for iPad view
                  background: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "25px",
                  p: "2px 10px",
                }}
              >
                <InputBase
                  placeholder="Search products..."
                  sx={{ ml: 1, flex: 1, color: "white" }}
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  inputRef={searchInputRef}
                />
              </Paper>
            </Collapse>

            {/* Search Results Dropdown */}
            {isSearchOpen && searchQuery && (
              <Box
                ref={searchResultsRef}
                sx={{
                  position: "absolute",
                  top: "56px",
                  left: "0",
                  width: isIpadView ? "200px" : "300px", // Adjust width for iPad view
                  background: "white",
                  color: "black",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  zIndex: 1000,
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <Link
                      key={index}
                      to={result.link}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderBottom: "1px solid #ddd",
                          "&:hover": { background: "#f9f9f9" },
                        }}
                      >
                        <Typography>{result.name}</Typography>
                      </Box>
                    </Link>
                  ))
                ) : (
                  <Box sx={{ p: 2 }}>
                    <Typography>No results found</Typography>
                  </Box>
                )}
              </Box>
            )}

            {/* Add to Cart Icon for Desktop */}
            <IconButton
              component={Link}
              to="/cart"
              sx={{ color: "white", "&:hover": { transform: "scale(1.1)" } }}
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* Contact Button for Desktop */}
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              sx={{
                background: "white",
                fontWeight: "bold",
                color: "#ff6600",
                textTransform: "none",
                fontSize: "16px",
                display: { xs: "none", md: "block" },
                "&:hover": { background: "#ff8c42", color: "white", fontWeight: "bold" },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent()}
      </Drawer>
    </>
  );
};

export default Navbar;
import React, { useState } from "react";
import { Box, Typography, Snackbar, Alert } from "@mui/material";
import { FaInstagram, FaEnvelope, FaFacebookF, FaLinkedinIn, FaPinterestP, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { getCdnImage } from "../utils/imageLoader";
import "../styles/Footer.css";

const Footer = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "https://printfrall.onrender.com";

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();

    if (!email) {
      setSnackbarMessage("Please enter an email address");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get("content-type");
      let data;
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const rawText = await response.text();
        data = { success: response.ok, message: rawText, error: rawText };
      }

      if (response.ok && data.success === true) {
        setSnackbarMessage(data.message || "✅ Successfully subscribed to newsletter!");
        setSnackbarSeverity("success");
        e.target.reset();
      } else {
        setSnackbarMessage(data.error || "Failed to subscribe. Please try again.");
        setSnackbarSeverity(response.status === 400 ? "warning" : "error");
      }
    } catch (error) {
      console.error("Network trace:", error);
      setSnackbarMessage("Network error. Please check your connection.");
      setSnackbarSeverity("error");
    } finally {
      setIsLoading(false);
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <Box className="footer" aria-label="Footer">
      <Box className="footer-container">
        <Box className="footer-logo-container">
          <img 
            src={getCdnImage("long-white.svg")} 
            alt="PrintfrAll Logo" 
            className="footer-logo"   
            width="160" 
            height="40"
            style={{ width: 'auto', height: 'auto' }}
          />
          <Typography className="footer-tagline">Your Printing Partner</Typography>
        </Box>

        <Box className="footer-column" aria-label="Company information">
          <Typography className="footer-heading" aria-label="Company section heading">Our Company</Typography>
          <a href="/about" aria-label="About us page">About us</a>
          <a href="mailto:printfrall@gmail.com?subject=Job Application" aria-label="Careers - email us for job opportunities">Careers</a>
          <a href="/blog" aria-label="Blog page">Blog</a>
        </Box>

        <Box className="footer-column" aria-label="Important legal links">
          <Typography className="footer-heading" aria-label="Important links section heading">Important Links</Typography>
          <a href="/privacy-policy" aria-label="Privacy policy page">Privacy Policy</a>
          <a href="/delivery-return" aria-label="Delivery and return policy page">Delivery & Return Policy</a>
          <a href="/terms-conditions" aria-label="Terms and conditions page">Terms & Conditions</a>
        </Box>

        <Box className="footer-column contact-info" aria-label="Contact information">
          <Typography className="footer-heading" aria-label="Contact section heading">Contact</Typography>
          <Box className="contact-item">
            <FaPhoneAlt className="contact-icon" aria-hidden="true" />
            <a href="tel:+919319042075" aria-label="Call us at 9319042075">+91 9319042075</a>
          </Box>
          <Box className="contact-item">
            <FaEnvelope className="contact-icon" aria-hidden="true" />
            <a href="mailto:printfrall@gmail.com" aria-label="Email us at printfrall@gmail.com">printfrall@gmail.com</a>
          </Box>
          
          <Box className="map-container">
            <iframe
              title="PrintfrAll Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.090779985867!2d77.0346579408233!3d28.627041222072712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05362adfb89b%3A0x8f8e3e7bb27db4d0!2sPrintfrAll!5e0!3m2!1sen!2sus!4v1779191737277!5m2!1sen!2sus" 
              width="100%"
              height="150"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              aria-label="Google Maps showing PrintfrAll location in Uttam Nagar, New Delhi"
            ></iframe>
          </Box>
        </Box>

        <Box className="footer-column newsletter-column" aria-label="Newsletter subscription">
          <Typography className="footer-heading" aria-label="Newsletter section heading">Subscribe to our Newsletter</Typography>
          <form className="newsletter-form" onSubmit={handleSubscribe} aria-label="Newsletter subscription form">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="newsletter-input"
              required
              disabled={isLoading}
              aria-label="Your email address"
            />
            <button 
              type="submit" 
              className="newsletter-button" 
              disabled={isLoading}
              aria-label={isLoading ? "Subscribing..." : "Subscribe to newsletter"}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          <Typography className="footer-heading social-heading" aria-label="Social media section heading">Follow us</Typography>
          <Box className="footer-social" aria-label="Social media links">
            <a href="https://instagram.com/printfrall" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram (opens in new tab)">
              <FaInstagram className="social-icon instagram" aria-hidden="true" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook (opens in new tab)">
              <FaFacebookF className="social-icon facebook" aria-hidden="true" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn (opens in new tab)">
              <FaLinkedinIn className="social-icon linkedin" aria-hidden="true" />
            </a>
            <a href="https://youtube.com/PrintfrAll" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel (opens in new tab)">
              <FaYoutube className="social-icon youtube" aria-hidden="true" />
            </a>
            <a href="https://pinterest.com/printfrall" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Pinterest (opens in new tab)">
              <FaPinterestP className="social-icon pinterest" aria-hidden="true" />
            </a>
          </Box>
        </Box>
      </Box>

      <Typography className="footer-text" aria-label="Copyright information">
        © {new Date().getFullYear()} <a href="/" className="footer-brand" aria-label="PrintfrAll home page">PrintfrAll</a>. All rights reserved.
      </Typography>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%', fontSize: '0.95rem', fontWeight: 500 }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
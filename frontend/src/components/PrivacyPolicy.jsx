import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const PrivacyPolicy = () => {
  return (
    <Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
      <Box py={5}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Privacy Policy
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          At PrintfrAll, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.
        </Typography>
        
        <Typography variant="h6" color="secondary" sx={{ mt: 3 }}>
          Information We Collect
        </Typography>
        <Typography variant="body1" paragraph>
          We may collect the following information when you use our services:
        </Typography>
        <ul>
          <li><Typography variant="body1">Contact information (name, email, phone number)</Typography></li>
          <li><Typography variant="body1">Shipping and billing addresses</Typography></li>
          <li><Typography variant="body1">Payment details (processed securely through our payment gateway)</Typography></li>
          <li><Typography variant="body1">Order history and preferences</Typography></li>
        </ul>

        <Typography variant="h6" color="secondary" sx={{ mt: 3 }}>
          How We Use Your Information
        </Typography>
        <Typography variant="body1" paragraph>
          Your information helps us to:
        </Typography>
        <ul>
          <li><Typography variant="body1">Process and fulfill your orders</Typography></li>
          <li><Typography variant="body1">Provide customer support</Typography></li>
          <li><Typography variant="body1">Improve our products and services</Typography></li>
          <li><Typography variant="body1">Send order confirmations and updates</Typography></li>
        </ul>

        <Typography variant="h6" color="secondary" sx={{ mt: 3 }}>
          Data Security
        </Typography>
        <Typography variant="body1" paragraph>
          We implement industry-standard security measures to protect your personal information from unauthorized access or disclosure.
        </Typography>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;
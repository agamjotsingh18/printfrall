import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const TermsConditions = () => {
  return (
    <Container 
      sx={{ marginTop: "50px", paddingBottom: "50px" }}
      aria-label="Terms and Conditions page"
    >
      <Box py={5}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center" 
          color="primary"
          aria-label="Terms and Conditions heading"
        >
          Terms & Conditions
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography 
          variant="body1" 
          paragraph
          aria-label="Welcome message and agreement to terms"
        >
          Welcome to PrintfrAll. By accessing or using our services, you agree to be bound by these Terms and Conditions.
        </Typography>

        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ mt: 3 }}
          aria-label="Order Acceptance section"
        >
          Order Acceptance
        </Typography>
        <Typography 
          variant="body1" 
          paragraph
          aria-label="Order acceptance terms"
        >
          We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase.
        </Typography>

        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ mt: 3 }}
          aria-label="Pricing and Payment section"
        >
          Pricing and Payment
        </Typography>
        <Typography 
          variant="body1" 
          paragraph
          aria-label="Pricing and payment terms"
        >
          All prices are in INR and subject to change without notice. Payment must be completed before order processing begins.
        </Typography>

        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ mt: 3 }}
          aria-label="Intellectual Property section"
        >
          Intellectual Property
        </Typography>
        <Typography 
          variant="body1" 
          paragraph
          aria-label="Intellectual property rights information"
        >
          All content on this website, including designs, text, and graphics, is owned by PrintfrAll and protected by copyright laws.
        </Typography>

        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ mt: 3 }}
          aria-label="User Responsibilities section"
        >
          User Responsibilities
        </Typography>
        <Typography 
          variant="body1" 
          paragraph
          aria-label="User responsibilities introduction"
        >
          You agree not to:
        </Typography>
        <ul aria-label="List of prohibited actions">
          <li><Typography variant="body1">Use our services for any illegal purpose</Typography></li>
          <li><Typography variant="body1">Upload content that infringes on intellectual property rights</Typography></li>
          <li><Typography variant="body1">Attempt to gain unauthorized access to our systems</Typography></li>
        </ul>

        <Typography 
          variant="h5" 
          color="primary" 
          sx={{ mt: 3 }}
          aria-label="Limitation of Liability section"
        >
          Limitation of Liability
        </Typography>
        <Typography 
          variant="body1" 
          paragraph
          aria-label="Liability limitation information"
        >
          PrintfrAll shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsConditions;
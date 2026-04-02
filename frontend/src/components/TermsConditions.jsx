import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const TermsConditions = () => {
  return (
    <Container sx={{ marginTop: "50px", paddingBottom: "50px" }}>
      <Box py={5}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Terms & Conditions
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="body1" paragraph>
          Welcome to PrintfrAll. By accessing or using our services, you agree to be bound by these Terms and Conditions.
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 3 }}>
          Order Acceptance
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase.
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 3 }}>
          Pricing and Payment
        </Typography>
        <Typography variant="body1" paragraph>
          All prices are in INR and subject to change without notice. Payment must be completed before order processing begins.
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 3 }}>
          Intellectual Property
        </Typography>
        <Typography variant="body1" paragraph>
          All content on this website, including designs, text, and graphics, is owned by PrintfrAll and protected by copyright laws.
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 3 }}>
          User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          You agree not to:
        </Typography>
        <ul>
          <li><Typography variant="body1">Use our services for any illegal purpose</Typography></li>
          <li><Typography variant="body1">Upload content that infringes on intellectual property rights</Typography></li>
          <li><Typography variant="body1">Attempt to gain unauthorized access to our systems</Typography></li>
        </ul>

        <Typography variant="h5" color="primary" sx={{ mt: 3 }}>
          Limitation of Liability
        </Typography>
        <Typography variant="body1" paragraph>
          PrintfrAll shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsConditions;
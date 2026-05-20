import React from "react";
import { Box, Container, Typography, Divider } from "@mui/material";

const DeliveryReturnPolicy = () => {
  return (
    <Container sx={{ marginTop: "50px", paddingBottom: "50px" }} aria-label="Delivery and Return Policy">
      <Box py={5}>
        <Typography variant="h4" gutterBottom align="center" color="primary" aria-label="Delivery and Return Policy heading">
          Delivery & Return Policy
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Typography variant="h5" color="primary" sx={{ mt: 3 }} aria-label="Delivery Information section">
          Delivery Information
        </Typography>
        <Typography variant="body1" paragraph>
          We strive to process and ship all orders within 1-2 business days.
        </Typography>
        
        <Typography variant="h6" color="secondary" aria-label="Shipping Options section">
          Shipping Options
        </Typography>
        <ul aria-label="Shipping options list">
          <li><Typography variant="body1">Standard Shipping: 5-7 business days</Typography></li>
          <li><Typography variant="body1">Express Shipping: 2-3 business days</Typography></li>
          <li><Typography variant="body1">Same-day Delivery: Available for select locations</Typography></li>
        </ul>
        <Typography variant="body1" paragraph>
          Shipping costs are calculated at checkout based on weight, dimensions, and destination.
        </Typography>

        <Typography variant="h5" color="primary" sx={{ mt: 4 }} aria-label="Return Policy section">
          Return Policy
        </Typography>
        <Typography variant="body1" paragraph>
          We accept returns within 14 days of delivery for most products.
        </Typography>
        
        <Typography variant="h6" color="secondary" aria-label="Return Conditions section">
          Return Conditions
        </Typography>
        <ul aria-label="Return conditions list">
          <li><Typography variant="body1">Items must be unused and in original condition</Typography></li>
          <li><Typography variant="body1">Original packaging must be intact</Typography></li>
          <li><Typography variant="body1">Proof of purchase is required</Typography></li>
        </ul>
        <Typography variant="body1" paragraph>
          Custom or personalized items may not be eligible for return.
        </Typography>

        <Typography variant="h6" color="secondary" aria-label="Refund Process section">
          Refund Process
        </Typography>
        <Typography variant="body1" paragraph>
          Refunds will be processed within 5-7 business days after we receive and inspect the returned item.
        </Typography>
      </Box>
    </Container>
  );
};

export default DeliveryReturnPolicy;
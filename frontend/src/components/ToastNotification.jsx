import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ToastNotification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        display: visible ? "block" : "none",
      }}
    >
      <Typography>{message}</Typography>
    </Box>
  );
};

export default ToastNotification;
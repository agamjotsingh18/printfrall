import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const ToastNotification = ({ message, onClose, severity = "success" }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const getBackgroundColor = () => {
    switch (severity) {
      case "success":
        return "#1a6e44";
      case "error":
        return "#d32f2f";
      case "warning":
        return "#ed6c02";
      default:
        return "#1a6e44";
    }
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: getBackgroundColor(),
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        minWidth: "250px",
        maxWidth: "350px",
      }}
      role="alert"
      aria-live="polite"
      aria-label={`Notification: ${message}`}
    >
      <Typography 
        sx={{ 
          fontSize: "0.95rem", 
          fontWeight: 500,
          textAlign: "center"
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default ToastNotification;
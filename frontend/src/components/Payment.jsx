import React, { useState } from "react";
import axios from "axios";

const Payment = ({ cartItems, totalAmount }) => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const initiatePayment = async () => {
    setIsLoading(true);
    setPaymentStatus(null);

    try {
      const response = await axios.post("https://api.allupipay.in/create-order", {
        merchant_id: "YOUR_MERCHANT_ID",
        api_key: "YOUR_API_KEY",
        amount: totalAmount,
        currency: "INR",
        order_id: `ORDER_${Date.now()}`,
        customer_name: "Customer Name",
        customer_email: "customer@example.com",
        customer_phone: "1234567890",
        return_url: "https://yourwebsite.com/payment-success",
        cancel_url: "https://yourwebsite.com/payment-cancel",
      });

      if (response.data && response.data.payment_url) {
        window.location.href = response.data.payment_url;
      } else {
        setPaymentStatus("Payment initiation failed. Please try again.");
      }
    } catch (error) {
      setPaymentStatus("Payment initiation failed. Please check your connection and try again.");
      console.error("Error initiating payment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div aria-label="Payment section">
      <button
        onClick={initiatePayment}
        disabled={isLoading}
        aria-label={isLoading ? "Processing payment..." : "Proceed to payment"}
        aria-disabled={isLoading}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#70CB97",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: isLoading ? "not-allowed" : "pointer",
          opacity: isLoading ? 0.7 : 1,
        }}
      >
        {isLoading ? "Processing..." : "Proceed to Payment"}
      </button>
      
      {paymentStatus && (
        <p 
          role="alert" 
          aria-live="polite"
          style={{
            marginTop: "16px",
            color: paymentStatus.includes("success") ? "#1a6e44" : "#d32f2f",
            fontWeight: "500",
          }}
        >
          {paymentStatus}
        </p>
      )}
    </div>
  );
};

export default Payment;
require('dotenv').config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'https://printfrall.vercel.app', 'https://printfrall.com', 'https://www.printfrall.com'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

// Brevo API Configuration
const brevoApiKey = process.env.BREVO_KEY;
const brevoBaseUrl = 'https://api.brevo.com/v3';


// Helper function to send emails via Brevo
async function sendBrevoEmail(emailData) {
  try {
    const response = await fetch(`${brevoBaseUrl}/smtp/email`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': brevoApiKey,
        'content-type': 'application/json'
      },
      body: JSON.stringify(emailData)
    });

    const responseData = await response.json();
    
    if (!response.ok) {
      console.error('❌ Brevo API Error:', responseData);
      throw new Error(responseData.message || 'Failed to send email');
    }

    console.log('✅ Email sent successfully. Message ID:', responseData.messageId);
    return responseData;
  } catch (error) {
    console.error('❌ Send email error:', error.message);
    throw error;
  }
}

// Health Check
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "healthy",
    brevo: "connected",
    timestamp: new Date().toISOString()
  });
});

// Send Email Endpoint
app.post("/send-email", async (req, res) => {
  console.log("🚀 Contact form submission received");
  
  const { name, email, message } = req.body;
  
  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: "Please fill in all fields" 
    });
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: "Please enter a valid email address" 
    });
  }

  // Email to support team
  const emailData = {
    sender: { 
      name: "PrintfrAll Contact", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: "support@printfrall.com", 
      name: "PrintfrAll Support" 
    }],
    replyTo: { 
      email: email, 
      name: name 
    },
    subject: `📬 New Contact Form Message from ${name}`,
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; border: 1px solid #ddd; border-radius: 5px; max-width: 500px; }
          h2 { color: #70CB97; }
          .info { background: #f5f5f5; padding: 10px; margin: 10px 0; border-radius: 5px; }
          .message { background: #fafafa; padding: 15px; margin: 10px 0; border-left: 4px solid #70CB97; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>📬 New Contact Form Submission</h2>
          <div class="info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <div class="message">
            <strong>Message:</strong>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Reply to: <a href="mailto:${email}">${email}</a></p>
        </div>
      </body>
      </html>
    `
  };

  // Auto-reply to user
  const autoReplyData = {
    sender: { 
      name: "PrintfrAll Team", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: email, 
      name: name 
    }],
    subject: "Thank you for contacting PrintfrAll! 📬",
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; max-width: 500px; margin: 0 auto; }
          .header { background: #70CB97; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
          .button { background: #70CB97; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Thank You for Contacting Us! 📬</h2>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Thank you for reaching out to PrintfrAll!</p>
            <p>We have received your message and will get back to you within <strong>24-48 hours</strong>.</p>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <strong>Your message:</strong>
              <p>${message.replace(/\n/g, '<br>')}</p>
            </div>
            <p style="text-align: center;">
              <a href="https://printfrall.com" class="button">Visit Our Website</a>
            </p>
            <p>Best regards,<br><strong>PrintfrAll Team</strong></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Send notification to support team
    await sendBrevoEmail(emailData);
    
    // Send auto-reply to user (don't fail if this fails)
    try {
      await sendBrevoEmail(autoReplyData);
    } catch (autoReplyError) {
      console.warn('⚠️ Auto-reply failed (non-critical):', autoReplyError.message);
    }
    
    res.status(200).json({ 
      success: true, 
      message: "Your message has been sent successfully! We'll get back to you soon." 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Failed to send message. Please try again later." 
    });
  }
});

// Subscribe Endpoint
app.post("/subscribe", async (req, res) => {
  console.log("📧 Newsletter subscription received");
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ 
      success: false, 
      error: "Email address is required" 
    });
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: "Please enter a valid email address" 
    });
  }

  // Email to support team
  const emailData = {
    sender: { 
      name: "PrintfrAll Newsletter", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: "support@printfrall.com", 
      name: "PrintfrAll Support" 
    }],
    subject: "📧 New Newsletter Subscription",
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; max-width: 500px; }
          h2 { color: #70CB97; }
          .info { background: #f5f5f5; padding: 10px; border-radius: 5px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h2>🎉 New Newsletter Subscription</h2>
          <div class="info">
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  // Welcome email to subscriber
  const welcomeData = {
    sender: { 
      name: "PrintfrAll Team", 
      email: "support@printfrall.com" 
    },
    to: [{ 
      email: email 
    }],
    subject: "Welcome to PrintfrAll Newsletter! 🎉",
    htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { padding: 20px; max-width: 500px; margin: 0 auto; }
          .header { background: #70CB97; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { padding: 20px; border: 1px solid #ddd; border-top: none; border-radius: 0 0 5px 5px; }
          .button { background: #70CB97; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Welcome to PrintfrAll! 🎉</h2>
          </div>
          <div class="content">
            <p>Dear Subscriber,</p>
            <p>Thank you for subscribing to PrintfrAll newsletter!</p>
            <p>You'll now receive updates about:</p>
            <ul>
              <li>✨ Latest printing services</li>
              <li>🎯 Special offers & discounts</li>
              <li>💡 Design tips & tricks</li>
              <li>🚀 New product launches</li>
            </ul>
            <p style="text-align: center;">
              <a href="https://printfrall.com" class="button">Visit Our Website</a>
            </p>
            <p>Best regards,<br><strong>PrintfrAll Team</strong></p>
          </div>
        </div>
      </body>
      </html>
    `
  };

  try {
    // Send notification to support team
    await sendBrevoEmail(emailData);
    
    // Send welcome email to subscriber (non-critical)
    try {
      await sendBrevoEmail(welcomeData);
    } catch (welcomeError) {
      console.warn('⚠️ Welcome email failed (non-critical):', welcomeError.message);
    }
    
    res.status(200).json({ 
      success: true, 
      message: "Successfully subscribed! Check your email for a welcome message." 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Failed to subscribe. Please try again later." 
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
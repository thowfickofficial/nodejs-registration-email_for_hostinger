// Import the nodemailer module for sending emails
const nodemailer = require('nodemailer');

// Create a transporter using Hostinger's SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
  port: 465,
  secure: true, // Use secure connection
  auth: {
    user: 'your-email', // Replace with your email address
    pass: 'your-password' // Replace with your email password
  }
});

// Function to send the registration notification email
const sendRegistrationEmail = (userEmail) => {
  // Email content and details
  const mailOptions = {
    from: 'YOUR-EMAIL-ID', // Sender email address
    to: userEmail, // Receiver email address (passed as an argument)
    subject: 'Registration Successful', // Email subject
    html: `
      <html>
      <head>
        <title>Email Template</title>
        <style>
          /* CSS styling for the email template */
          body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 0;
          }
      
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
      
          h1 {
            color: #333333;
            font-size: 24px;
            margin-bottom: 20px;
          }
      
          p {
            color: #666666;
            font-size: 16px;
            line-height: 1.5;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Dear User,</h1>
          <p>Thank you for registering an account. We appreciate your support!</p>
        </div>
      </body>
      </html>
    `
  };

  // Send the email using the configured transporter
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email: ', error); // Log the error if email fails to send
    } else {
      console.log('Email sent: ', info.response); // Log the response when email is successfully sent
    }
  });
};

// Example usage: Call the function to send the registration email
const userEmail = 'example@example.com'; // Add the receiver's email id here
sendRegistrationEmail(userEmail);

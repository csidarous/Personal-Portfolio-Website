require('dotenv').config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const AWS = require('aws-sdk');

// Set up the Express application
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

// Configure AWS SDK with your credentials
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const ses = new AWS.SES({ apiVersion: '2010-12-01' });

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  
  const params = {
    Destination: {
      ToAddresses: [process.env.SENDER_EMAIL], // Send email to the address provided by the user
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
            <p>Name: ${firstName} ${lastName}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Message: ${message}</p>
          `,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Contact Form Submission - Portfolio',
      },
    },
    Source: process.env.SENDER_EMAIL, // Your verified email address
    ReplyToAddresses: [email],
  };

  ses.sendEmail(params, (error, data) => {
    if (error) {
      console.error("Error sending email:", error); // Log the error
      res.json({ code: 500, status: 'Error sending email' });
    } else {
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

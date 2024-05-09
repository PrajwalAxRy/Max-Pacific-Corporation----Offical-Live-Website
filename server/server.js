require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // or another email provider
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, description } = req.body;
  const mailOptions = {
    from: process.env.EMAIL_USERNAME, // sender address
    to: 'info@gmail.com',             // list of receivers
    subject: 'Contact Form Message',  // Subject line
    html: `<p>You have a new contact request from:</p>
           <p><b>Name:</b> ${name}</p>
           <p><b>Email:</b> ${email}</p>
           <p><b>Description:</b> ${description}</p>` // html body
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send({msg: 'Failure'});
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({msg: 'Success'});
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
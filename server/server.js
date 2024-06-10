require('dotenv').config();

var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
app.use(bodyParser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  });

app.post('/send-email', (req, res) => {
    const { username, phoneNumber, email, description, reason } = req.body;

    console.log('Received form data:', req.body);
    
    var mailOptions = {
        from: email,
        to: 'prajwalsingh7512@gmail.com',
        subject: `Contact Form Submission:`,
        text: `Hello Ram, Here's a new submission from the Contact page\n\n Name: ${username}\n Email: ${email}\n Phone Number: ${phoneNumber}\n Category: ${reason}\nDescription: ${description}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

var server = app.listen(3001, function() {
    console.log('Server is running on port 3001');
});

const express = require("express");
const mongoose = require("mongoose");
const ContactMe = require("./model/contactMe");
const adminDetails = require("./model/adminLogin");
const projects = require("./model/projects");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const certificates = require("./model/certificates");
const cors = require("cors");
const app = express();
let jwtToken = null;

app.use(express.json());
app.use(cors());
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri);
    console.log("DB Connected");
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log("Error", e);
    process.exit(1);
  }
};

connectDB();

const authoriseAdmin = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).send("Authorization token missing or invalid");
  }
  const token = authorization.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) return res.status(401).send("Invalid JWT token");
    req.username = payload.username;
    next();
  });
};

const sendContactAcceptMail = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const contacts = await ContactMe.find({});
  const latestContact = contacts[contacts.length - 1];

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: latestContact.email,
    subject: "Thank you for Contacting Me!",
    html: `
            <div style="...">Hello ${latestContact.inquiredBy}...</div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

app.post("/api/contactMe", async (req, res) => {
  try {
    const { inquiredBy, email, contactNo, message } = req.body;
    const date = new Date();
    const newContact = new ContactMe({ inquiredBy, date, email, contactNo, message });
    await newContact.save();
    res.status(201).send("Successful! Thanks for approaching me! Will contact you shortly");
    sendContactAcceptMail();
  } catch (e) {
    res.status(500).send(`Error Sending Your Request: ${e.message}`);
  }
});

app.post("/api/add-Admin", async (req, res) => {
  try {
    let { adminName, password } = req.body;
    password = await bcrypt.hash(password, 10);
    const newAdmin = new adminDetails({ adminName, password });
    await newAdmin.save();
    res.status(200).send("Admin Added");
  } catch (e) {
    res.status(500).send(e.message);
    console.log(e.message);
  }
});

app.post("/api/adminLogin", async (req, res) => {
  try {
    const { adminName, password } = req.body;
    const adminCreds = await adminDetails.findOne({ adminName });

    if (adminCreds && (await bcrypt.compare(password, adminCreds.password))) {
      const payload = { adminName };
      jwtToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
      return res.status(200).send({ jwtToken });
    }
    res.status(401).send("Invalid Credentials");
  } catch (e) {
    res.status(500).send(e.message);
    console.log(e.message);
  }
});

app.post("/api/add-project", authoriseAdmin, async (req, res) => {
  try {
    const { projectName, technologiesUsed, githubLink, publishLink, projectImagesLink, projectDescription } = req.body;
    const newProject = new projects({ projectName, technologiesUsed, githubLink, publishLink, projectImagesLink, projectDescription });
    await newProject.save();
    res.status(201).send("Project Added Successfully");
  } catch (e) {
    res.status(401).send(e.message);
  }
});

app.post("/api/add-certificate", authoriseAdmin, async (req, res) => {
  try {
    const { title, technologiesCovered, description, imageUrl, verificationLink } = req.body;
    const newCertificate = new certificates({ title, technologiesCovered, description, imageUrl, verificationLink });
    await newCertificate.save();
    res.status(201).send("Certificate Added Successfully");
  } catch (e) {
    res.status(401).send(e.message);
  }
});

app.get("/api/get-projects", async (req, res) => {
  try {
    const allProjects = await projects.find({});
    res.status(200).send(allProjects);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/api/get-certificates", async (req, res) => {
  try {
    const allCertificates = await certificates.find({});
    res.status(200).send(allCertificates);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

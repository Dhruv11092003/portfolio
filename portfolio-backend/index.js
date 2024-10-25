const express = require("express");
const mongoose = require("mongoose");
const ContactMe = require("./model/contactMe");
const adminDetails = require("./model/adminLogin");
const projects = require("./model/projects");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const certificates = require("./model/certificates");
const cors = require("cors");
const app = express();
let jwtToken = null;

app.use(express.json());
app.use(cors());
const mongoUri = "mongodb://localhost:27017/Portfolio";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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
  let token;
  const { authorization } = req.headers;
  token = authorization.split(" ")[1];
  if (token === undefined) {
    res.status(404).send("Invalid JWT token");
  } else {
    jwt.verify(token, "adbcde", (err, payload) => {
      if (err) {
        res.status(404).send("Invalid JWT token");
      } else {
        req.username = payload.username;
        next();
      }
    });
  }

  // return req.headers
};

const sendContactAcceptMail = async () => {
  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "dhruvkulshrestha11official@gmail.com",
      pass: "urqo muov ivwd behj",
    },
  });
  const contacts = await ContactMe.find({});
  const latestContact = contacts[contacts.length - 1];

  // Email options
  const mailOptions = {
    from: "dhruvkulshrestha11official@gmail.com",
    to: latestContact.email,
    subject: "Thank you for Contacting Me!",
    html: `
            <div style="border: 2px solid #4CAF50; border-radius: 10px; padding: 20px; max-width: 600px; margin: auto; background-color: #f9f9f9; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #4CAF50; font-family: Arial, sans-serif; text-align: center;">Hello ${latestContact.inquiredBy}, Thank you for contacting me!</h1>
                <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; line-height: 1.5; text-align: center;">
                    I have received your enquiry and will contact you shortly!
                </p>
                <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; text-align: center;">Regards,</p>
                <p style="font-family: Arial, sans-serif; font-size: 16px; color: #333; text-align: center; font-weight: bold;">
                    Dhruv Kulshrestha
                </p>
            </div>`,
  };

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
};

// sendContactAcceptMail()

app.post("/contactMe", async (req, res) => {
  try {
    const { inquiredBy, email, contactNo, message } = req.body;
    const date = new Date();
    const newContact = new ContactMe({
      inquiredBy,
      date,
      email,
      contactNo,
      message,
    });
    await newContact.save();
    res
      .status(201)
      .send("Successful! Thanks For Approaching Me! Will Contact you Shortly");
    sendContactAcceptMail();
  } catch (e) {
    res.status(500).send(`Error Sending Your Request: ${e.message}`);
  }
});

app.post("/add-Admin", async (req, res) => {
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

app.post("/adminLogin", async (req, res) => {
  try {
    const { adminName, password } = req.body;
    
    const adminCreds = await adminDetails.findOne({});
    // console.log(adminCreds.password)

    if (adminCreds.adminName === adminName) {
      const checkPassword = await bcrypt.compare(password, adminCreds.password);
      
      if (checkPassword) {
        const payload = { adminName, password };
        jwtToken = jwt.sign(payload, "adbcde");
        res.status(200).send({ jwtToken });
      } else {
        res.status(404).send("Invalid Password");
      }
    } else {
      res.status(404).send("Invalid Credentials");
    }
  } catch (e) {
    console.log(e.message);
  }
});

app.post("/add-project", authoriseAdmin, async (req, res) => {
  try {
    let { username } = req;
    const {
      projectName,
      technologiesUsed,
      githubLink,
      publishLink,
      projectImagesLink,
      projectDescription,
    } = req.body;
    const newProject = new projects({
      projectName,
      technologiesUsed,
      githubLink,
      publishLink,
      projectImagesLink,
      projectDescription,
    });
    await newProject.save();
    res.status(201).send("Project Added Successfully");
  } catch (e) {
    res.status(401).send(e.message);
  }
});

app.post("/add-certificate", authoriseAdmin, async (req, res) => {
  try {
    let { username } = req;
    const {
      title,
      technologiesCovered,
      description,
      imageUrl,
      verificationLink,
    } = req.body;
    const newCertificate = new certificates({
      title,
      technologiesCovered,
      description,
      imageUrl,
      verificationLink,
    });
    await newCertificate.save();
    res.status(201).send("Certificate Added Successfully");
  } catch (e) {
    res.status(401).send(e.message);
  }
});

app.get("/get-projects", async (req, res) => {
  try {
    const allProjects = await projects.find({});
    res.status(200).send(allProjects);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/get-certificates", async (req, res) => {
  try {
    const allCertificates = await certificates.find({});
    res.status(200).send(allCertificates);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

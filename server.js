const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { email, pass, port } = require("./config");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const transporter = nodemailer.createTransport({
  service: "gmail",
  date: Date.now(),
  auth: {
    user: email,
    pass
  }
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const appendedBody = `from:  ${req.body.email} 
                      phone: ${req.body.phone}
                      company: ${req.body.company}
`;
  const mailOpts = {
    from: req.body.email,
    to: email,
    subject: "e-mail from: " + req.body.email,
    text: `${req.body.message} ${appendedBody}`
  };
  transporter.sendMail(mailOpts, (err, info) => {
    if (err) {
      console.log("Error: " + err);
    } else {
      console.log("Email - Received Successfully" + info);
    }
  });
});
app.listen(port, () => {
  console.log("listening on port " + port);
});

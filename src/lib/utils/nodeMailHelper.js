import nodemailer from "nodemailer";

const USERGMAIL = "leon.calobeto@gmail.com";
const APPKEYGMAIL = "iojq betc qosx rsqb";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: USERGMAIL,
    pass: APPKEYGMAIL,
  },
});

const mailOptions = {
  from: 'calobeto.leon@gmail.com',
  to: USERGMAIL,
  subject: "Hello world",
  text: "Hello world!",
  html: "<b>Hello world!</b>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});

export default transporter;
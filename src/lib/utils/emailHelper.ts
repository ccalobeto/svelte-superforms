import nodemailer from "nodemailer";
// import { GOOGLE_EMAIL, GOOGLE_APP_PASSWORD } from "$env/static/private";

const GOOGLE_EMAIL = 'leon.calobeto@gmail.com'
const GOOGLE_APP_PASSWORD = "iojq betc qosx rsqb"

const emailHelper = async (from: string, subject: string, text: string) => {
  // create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GOOGLE_EMAIL,
      pass: GOOGLE_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: from,
    to: GOOGLE_EMAIL,
    subject: subject,
    text: text
  };

  try {
    const info = await transporter.sendMail(mailOptions) 
    console.log("Email sent: " + info.response);
    return info

  } catch (error) {
    console.log("Error sending email:", error);
    throw error
  }

}

export default emailHelper
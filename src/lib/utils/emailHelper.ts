import nodemailer from "nodemailer";

const USERGMAIL = "leon.calobeto@gmail.com";
const APPKEYGMAIL = "iojq betc qosx rsqb";

const emailHelper = async (from: string, subject: string, text: string) => {
  // create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: USERGMAIL,
      pass: APPKEYGMAIL,
    },
  });

  const mailOptions = {
    from: from,
    to: USERGMAIL,
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
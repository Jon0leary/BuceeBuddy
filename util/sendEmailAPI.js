const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    if (!email) {
        throw new Error("No recipient email specified");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: Boolean(process.env.SECURE),
      auth: {
        user: process.env.ADMIN,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ADMIN,
      to: email,
      subject: subject,
      text: text
    });

    console.log("Email sent Successfully");
  } catch (error) {
    console.log("Email not sent");
    console.log(error);
  }
};

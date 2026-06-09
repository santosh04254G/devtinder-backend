const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const run = async (subject, body, toEmailId) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: toEmailId,
      subject: subject,
      html: `<h2>${subject}</h2><p>${body}</p>`,
    };
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent to: " + toEmailId);
    return result;
  } catch (err) {
    console.error("Email error: " + err.message);
    throw err;
  }
};

module.exports = { run };

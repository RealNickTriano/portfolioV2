export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      from: `${process.env.YOUR_EMAIL_ADDRESS}`,
      to: process.env.YOUR_EMAIL_ADDRESS,
      subject: subject
        ? `Potential Client: ${subject}`
        : `New contact form submission from ${name}`,
      text: email + "\n" + message,
    };

    try {
      const response = await sgMail.send(msg);
      console.log("SendGrid response: ", response);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

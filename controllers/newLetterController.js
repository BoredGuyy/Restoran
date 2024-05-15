const {PrismaClient} = require('@prisma/client')
const nodemailer = require('nodemailer')

const prisma = new PrismaClient();

const sendEmail = async (req, res, next) => {
  try {
    const email = req.body.email;
    console.log(email);

    const existEmail = await prisma.client.findUnique({
      where: {
        EMAIL: email,
      },
    });

    if (existEmail) {
      return res.json({success: false});
    }

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true, // Use true for port 465, false for all other ports
      auth: {
        user: process.env.EMAIL_ADRESSE,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: process.env.EMAIL_ADRESSE,
      to: email,
      subject: "Thank you for subscribing to out newsletter!",
      text: "Welcome aboard! Get ready for exclusive updates, special offers, and exciting content delivered straight to your inbox",
      html: `<h2>Welcome aboard! Get ready for exclusive updates, special offers, and exciting content delivered straight to your inbox</h2>`
    };

    // Send the email
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        console.error(error);
        return res.json({success: false});
      } else {
        const ID_Restaurant = 1;
        const savedEmail = await prisma.client.create({
          data: {
            EMAIL: email,
            ID_Restaurant
          },
        });
        return res.redirect('/');
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = sendEmail;
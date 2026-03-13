import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'catherine.sanford99@ethereal.email',
      pass: 'pM9FWwwt2naAS7P25H'
  }
});

const sendMail = async (to: string, subject: string, text: string) => {
    try {
      const mailOptions = {
        from: "catherine.sanford99@ethereal.email",
        to,
        subject,
        text
      };
      const info = await transporter.sendMail(mailOptions);
      console.log(`Email sent ${info.response}`);
    } catch (error: any) {
        console.error(`Some error has occured ${error.message}`)
        throw error;
    }
}

export default sendMail;
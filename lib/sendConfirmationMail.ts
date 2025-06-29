"use server"
import nodemailer from "nodemailer";

export async function sendConfirmationMail(to: string, name: string) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Creative NGO" <${process.env.SMTP_USER}>`,
      to,
      subject: "🎉 Thanks for Volunteering!",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for signing up to volunteer with us!</p>
        <p>We’re excited to have your support. You'll hear from us soon.</p>
        <br/>
        <p>— The Team</p>
      `,
    });

  } catch (error) {
    console.error("Error sending confirmation email:", error);
    throw error; 
  }
}

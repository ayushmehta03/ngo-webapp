"use server";

import nodemailer from "nodemailer";

export async function sendMailToAdmin(
  fullName: string,
  phoneno: string,
  mailId: string,
  supportType: string
) {
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
      to: process.env.ADMIN_EMAIL, 
      subject: "📥 New Volunteer Registration",
      html: `
        <p>A new volunteer has signed up:</p>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${mailId}</li>
          <li><strong>Phone:</strong> ${phoneno}</li>
          <li><strong>Support Type:</strong> ${supportType}</li>
        </ul>
        <p>Please reach out to them soon.</p>
      `,
    });

  } catch (error) {
    console.error("Error sending admin mail:", error);
    throw error;
  }
}

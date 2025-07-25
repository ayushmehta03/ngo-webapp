"use server";
import nodemailer from "nodemailer";

export default async function sendEnquiryMail(
  name: string,
  number: string,
  roomType: string,
  mailId: string,
  profession: string
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

    await transporter.sendMail({
      from: `"Apna PG / Hostel" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: "New Enquiry for Apna PG / Hostel",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Enquiry Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${number}</p>
          <p><strong>Room Type:</strong> ${roomType}</p>
          <p><strong>Email ID:</strong> ${mailId}</p>
          <p><strong>Profession:</strong> ${profession}</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Error sending admin mail:", error);
    throw error;
  }
}

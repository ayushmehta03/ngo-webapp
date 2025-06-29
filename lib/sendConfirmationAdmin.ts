"use server"
import { Resend } from "resend";

const resend= new Resend(process.env.RESEND_API_KEY);
export async function sendMailToAdmin(fullName:string, phoneno:string, mailId:string, supportType:string ) {
    try{
         await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL!, // make sure it's in .env
      subject: `📥 New Volunteer Sign-Up: ${fullName}`,
      html: `
        <h3>New Volunteer Registration</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${mailId}</p>
        <p><strong>Phone:</strong> ${phoneno}</p>
        <p><strong>Support Type:</strong> ${supportType}</p>
      `,
    });

    } catch(error){
        console.error("resend error",error)
    }
    
}
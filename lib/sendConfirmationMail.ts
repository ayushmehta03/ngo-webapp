"use server"
import {Resend} from "resend"

const resend= new Resend(process.env.RESEND_API_KEY);
 
export async function sendConfirmationMail(to:string,name:string) {
    try{
        const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to,
      subject: "🎉 Thanks for Volunteering!",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>Thank you for signing up to volunteer with us!</p>
        <p>We’re excited to have your support. You'll hear from us soon.</p>
        <p>— The Team</p>
      `,
      
    }
);
    }catch(error){
        console.error("resend error",error)
    }
    
}
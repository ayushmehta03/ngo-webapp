import nodemailer from "nodemailer"

export default async function (name:string,email:string,query:string){
    try{
        const transporter= nodemailer.createTransport({
            host:process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT)|| 465,
             secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
 const info= transporter.sendMail({
      from: `"Creative NGO" <${process.env.SMTP_USER}>`,
      to:process.env.ADMIN_EMAIL,
      subject:"User Query Mail Sir",
       html: `
        <p>A user is having query /p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Query:</strong> ${query}</li>
        </ul>
        <p>Please reach out to them soon.</p>
      `,


 })

        
    }catch(error){
        console.error("error sending query mail",error)
        throw error
    }
}
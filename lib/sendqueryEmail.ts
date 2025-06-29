import nodemailer from "nodemailer"

export default async function sendQueryMail(to:string ,name:string){
    try{
 const transporter= nodemailer.createTransport({
    host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
 })
  const info= transporter.sendMail({
    from: `"Creative NGO"<${process.env.SMTP_USER}>`,
    to,
      subject: "About your query",
      html: `
        <p>Hi <strong>${name}</strong>,</p>
        <p>WE have received your query request ${name}!</p>
        <p>You'll hear from us soon Thank You !</p>
        <br/>
        <p>Hope you have a nice day </p>
      `,
  })}
  catch(error){
    console.error("error in sending mail",error)
    throw error
  }
}
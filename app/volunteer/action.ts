"use server"
import toast from "react-hot-toast";
import { prisma } from "../utilis/db";
import { redirect } from "next/navigation";





export default  async function handleSumbission(formData:FormData){
 const fullName=formData.get("fullname") as string;
 const mailId= formData.get("mailid") as string;
 const phoneno=formData.get("phoneNo") as string;
 const supportType= formData.get("supportType") as string;

 if(!fullName|| !mailId|| !phoneno || !supportType){
    throw new Error("Missing form fields");
 }


  await prisma.volunteerInfo.create({
    data:{
     fullName,
     phoneno,
     supportType,
     mailId
    }
  })
 redirect('/')

}
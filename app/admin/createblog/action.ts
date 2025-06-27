"use server"

import { prisma } from "@/app/utilis/db";
import cloudinary from "@/lib/cloudinary";
import { rejects } from "assert";
import { error } from "console";
import { redirect } from "next/navigation"
import { resolve } from "path";

export default async function handleSubmission(formData:FormData) {
  const title = formData.get("title") as string | null;
  const content = formData.get("content") as string | null;
  const file = formData.get("image") as File;

     if (!title || !content) {
    throw new Error("Missing form fields");
  }
  if(!file || !file.size) throw new Error("No file uploaded");
  const arrayBuffer= await file.arrayBuffer()
  const buffer= Buffer.from(arrayBuffer)



const uploadResult= await new Promise ((resolve,reject)=>{
  cloudinary.uploader.upload_stream({folder:"blog"},(error,result)=>{
    if(error) reject(error)
      else resolve(result)
  }) .end(buffer);
})
const imageUrl = (uploadResult as any).secure_url;
await prisma.blogPost.create({
 data: { 
  title,
  content,
  imageUrl


 }
})

 redirect('/admin')
}


"use server "
import prisma from "@/lib/db";
import { redirect } from "next/navigation"

export default async function handleSubmission(formData:FormData) {
  const title = formData.get("title") as string | null;
  const content = formData.get("content") as string | null;
  const url = formData.get("url") as string | null;



  await prisma.BlogPost.create({
    data:{
        title,
        content,
        imageUrl
    }
  })
}
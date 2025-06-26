"use server "
import { prisma } from "@/app/utilis/db";
import { redirect } from "next/navigation"

export default async function handleSubmission(formData:FormData) {
  const title = formData.get("title") as string | null;
  const content = formData.get("content") as string | null;
  const url = formData.get("url") as string | null;
     if (!title || !content || !url) {
    throw new Error("Missing form fields");
  }

await prisma.blogPost.create({
    data:{
        title,
        content,
        imageUrl:url,
    }
})

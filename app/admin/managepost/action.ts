"use server"
import { prisma } from "@/app/utilis/db"
import { revalidatePath } from "next/cache"

export default async function deletePost(postId:string){
    try{
        await prisma.blogPost.delete({
            where:{id:postId}
        })
        revalidatePath("/admin/manaage/post")
    } catch(error){
          throw new Error("Failed to delete post");

    }
}
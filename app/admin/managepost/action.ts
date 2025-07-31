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

export  async function editPost(postId:string,updatedData:{title?:string}) {
    try{
        await prisma.blogPost.update({
            where:{id:postId},
            data:updatedData
        })
         revalidatePath("/admin/manaage/post")


        
    } catch(err){
        throw new Error("Failed to update title")
    }
    
}
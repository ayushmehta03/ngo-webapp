"use server"

import { prisma } from "@/app/utilis/db";
import { revalidatePath } from "next/cache";


export async function editPost(postId: string, updatedData: { title?: string }) {
  try {
    await prisma.dignitaryVisit.update({
      where: { id: postId },
      data: updatedData,
    });
    revalidatePath("/admin/manage/post");
  } catch (err) {
    throw new Error("Failed to update title");
  }
}

export async function deletePost(postId: string) {
  try {
    await prisma.dignitaryVisit.delete({
      where: { id: postId },
    });
    revalidatePath("/admin/manage/post");
  } catch (error) {
    throw new Error("Failed to delete post");
  }
}